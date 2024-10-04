import { useState, useEffect, useRef } from 'react';

import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import {
	ClassicEditor,
	AccessibilityHelp,
	Autoformat,
	AutoImage,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	Bold,
	Context,
	ContextWatchdog,
	Essentials,
	Heading,
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
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	Markdown,
	MediaEmbed,
	Mention,
	Paragraph,
	PasteFromMarkdownExperimental,
	PasteFromOffice,
	SelectAll,
	SimpleUploadAdapter,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	Undo,
	CodeBlock,
	GeneralHtmlSupport,
} from 'ckeditor5';

import translations from 'ckeditor5/translations/ko.js';

import 'ckeditor5/ckeditor5.css';

export const SUPPORTED_TEXT_EDITORS = {
	text: 'text',
	expandable: 'expandable',
	language:'ko_KR',
  };
const Ckeditor5 = ({
	textValue,
	initialValue,
	mainHeight,
	editorContentHtml
	
}) => {
 

	const editorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'selectAll',
				'|',
				'heading',
				'|',
				'bold',
				'italic',
				'underline',
				'|',
				'link',
				'insertImage',
				'mediaEmbed',
				'insertTable',
				'blockQuote',
				'|',
				'bulletedList',
				'numberedList',
				'todoList',
				'outdent',
				'indent',
				'|',
				'accessibilityHelp',
        		'codeBlock',
				'GeneralHtmlSupport',
			],
			shouldNotGroupWhenFull: false
		},
		plugins: [
			AccessibilityHelp,
			Autoformat,
			AutoImage,
			Autosave,
			BalloonToolbar,
			BlockQuote,
			Bold,
			Essentials,
			Heading,
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
			Indent,
			IndentBlock,
			Italic,
			Link,
			LinkImage,
			List,
			ListProperties,
			Markdown,
			MediaEmbed,
			Mention,
			Paragraph,
			PasteFromMarkdownExperimental,
			PasteFromOffice,
			SelectAll,
			SimpleUploadAdapter,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			TextTransformation,
			TodoList,
			Underline,
			Undo,
			CodeBlock,
			GeneralHtmlSupport,
		],
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
		
		<div className="editor-container editor-container_classic-editor" ref={editorContainerRef}>
			<div className="editor-container__editor">
				<div ref={editorRef}>{isLayoutReady && <CKEditor editor={ClassicEditor} config={editorConfig} />}</div>
			</div>
		</div>

	);
};

Ckeditor5.propTypes = {
	textValue: PropTypes.object.isRequired,
	initialValue: PropTypes.string,
	minHeight: PropTypes.number,
	editorContentHtml: PropTypes.object
}
export default Ckeditor5;
