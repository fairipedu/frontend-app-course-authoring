import React from 'react';
import PropTypes from 'prop-types';
import { connect, Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { getConfig } from '@edx/frontend-platform';
import {
	prepareEditorRef,
	TinyMceWidget,
} from '@edx/frontend-lib-content-components';

import { DEFAULT_EMPTY_WYSIWYG_VALUE } from '../constants';

import translations from 'ckeditor5/translations/ko.js';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
	ClassicEditor,
	AccessibilityHelp,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	Bold,
	CloudServices,
	Code,
	CodeBlock,
	Essentials,
	GeneralHtmlSupport,
	Heading,
	HtmlComment,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	Paragraph,
	PasteFromOffice,
	SelectAll,
	ShowBlocks,
	SimpleUploadAdapter,
	SourceEditing,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Undo
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

const store = createStore(() => ({}));

export const SUPPORTED_TEXT_EDITORS = {
	text: 'text',
	expandable: 'expandable',
	language: 'ko_KR',
};

const mapStateToProps = () => ({
	images: {},
	lmsEndpointUrl: getConfig().LMS_BASE_URL,
	studioEndpointUrl: getConfig().STUDIO_BASE_URL,
	isLibrary: true,
	onEditorChange: () => ({}),
});
const Editor = connect(mapStateToProps)(TinyMceWidget);

export const WysiwygEditor = ({
	initialValue, editorType, onChange, minHeight,
}) => {
	// const courseId = "course+test+test+test"
	const { editorRef, refReady, setEditorRef } = prepareEditorRef();
	const { courseId } = useSelector((state) => state.courseDetail);
	const isEquivalentCodeExtraSpaces = (first, second) => {
		// Utils allows to compare code extra spaces
		const removeWhitespace = (str) => str.replace(/\s/g, '');
		return removeWhitespace(first) === removeWhitespace(second);
	};

	const isEquivalentCodeQuotes = (first, second) => {
		// Utils allows to compare code with single quotes and double quotes
		const normalizeQuotes = (section) => section.replace(/'/g, '"');
		return normalizeQuotes(first) === normalizeQuotes(second);
	};

	// default initial string returned onEditorChange if empty input
	const needToChange = (value) => !isEquivalentCodeQuotes(initialValue, value)
		&& !isEquivalentCodeExtraSpaces(initialValue, value)
		&& (initialValue !== DEFAULT_EMPTY_WYSIWYG_VALUE || value !== '');

	const handleUpdate = (value, editor) => {
		// With bookmarks keep the current cursor position at the end of the line
		// and it inserts new content only at the end of the line.
		//const bm = editor.selection.getBookmark();
		
		const existingContent = editor.getData();
		
		//if (needToChange(value)) { onChange(value); }
		onChange(existingContent);
		//editor.setData(existingContent);
		//editor.selection.moveToBookmark(bm);
	};

	if (!refReady) {
		return null;
	}

	const editorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'sourceEditing',
				'showBlocks',
				'selectAll',
				'|',
				'heading',
				'|',
				'bold',
				'italic',
				'code',
				'|',
				'link',
				'insertImage',
				'insertTable',
				'codeBlock',
				'htmlEmbed',
				'|',
				'bulletedList',
				'numberedList',
				'|',
				'accessibilityHelp'
			],
			shouldNotGroupWhenFull: false
		},
		plugins: [
			AccessibilityHelp,
			Autoformat,
			AutoImage,
			AutoLink,
			Autosave,
			BalloonToolbar,
			Bold,
			CloudServices,
			Code,
			CodeBlock,
			Essentials,
			GeneralHtmlSupport,
			Heading,
			HtmlComment,
			HtmlEmbed,
			ImageBlock,
			ImageCaption,
			ImageInline,
			ImageInsert,
			ImageInsertViaUrl,
			ImageResize,
			ImageStyle,
			ImageTextAlternative,
			ImageToolbar,
			ImageUpload,
			Italic,
			Link,
			LinkImage,
			List,
			ListProperties,
			Paragraph,
			PasteFromOffice,
			SelectAll,
			ShowBlocks,
			SimpleUploadAdapter,
			SourceEditing,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			TextTransformation,
			Undo
		],
		htmlSupport: {
			allow: [
				{
					name: /^.*$/,
					attributes: true,
					classes: true,
					styles: true,
				}
			]
		},
		balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6'
				}
			]
		},
		image: {
			toolbar: [
				'toggleImageCaption',
				'imageTextAlternative',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText',
				'|',
				'resizeImage'
			]
		},
		initialData:
			initialValue,
		language: 'ko',
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true
			}
		},
		mention: {
			feeds: [
				{
					marker: '@',
					feed: [
						/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
					]
				}
			]
		},
		placeholder: 'Type or paste your content here!',
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
		},
		translations: [translations]
	};

	return (
		<Provider store={store}>
			<div>
				<CKEditor 
					textValue={initialValue}
					editorRef={editorRef}
					editorType={editorType}
					initialValue={initialValue}
					minHeight={minHeight}
					editorContentHtml={initialValue}
					setEditorRef={setEditorRef}
					onChange={handleUpdate}
					initializeEditor={() => ({})}
					learningContextId={courseId}
					editor={ClassicEditor} 
					config={editorConfig} 

				/>
			</div>
		</Provider>
	);
};

WysiwygEditor.defaultProps = {
	initialValue: '',
	editorType: SUPPORTED_TEXT_EDITORS.text,
	minHeight: 200,
};

WysiwygEditor.propTypes = {
	initialValue: PropTypes.string,
	editorType: PropTypes.oneOf(Object.values(SUPPORTED_TEXT_EDITORS)),
	onChange: PropTypes.func.isRequired,
	minHeight: PropTypes.number,
};
