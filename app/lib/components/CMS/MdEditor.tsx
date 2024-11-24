import '@mdxeditor/editor/style.css';
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  linkDialogPlugin,
  toolbarPlugin,
  UndoRedo,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ListsToggle,
  CreateLink,
} from '@mdxeditor/editor';
import PropTypes from 'prop-types';
import { useRef } from "react";

export interface MdEditorProps {
  content: string
  onChange: (value: string) => void
  editable: boolean
}

const MdEditor = ({ content, onChange, editable = false }: MdEditorProps ) => {
  const ref = useRef(null)

  const plugins = [
    headingsPlugin(),
    listsPlugin(),
    quotePlugin(),
    thematicBreakPlugin(),
    markdownShortcutPlugin(),
    ...(editable
      ? [
        linkDialogPlugin(),
        toolbarPlugin({
          toolbarClassName: 'mdx-toolbar',
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BlockTypeSelect />
              <BoldItalicUnderlineToggles />
              <ListsToggle />
              <CreateLink />
            </>
          ),
        }),
      ]
      : []),
  ];


  return (
    <MDXEditor
      ref={ref}
      plugins={plugins}
      markdown={content}
      onChange={onChange}
      className="mdxeditor"
    />
  );
};

MdEditor.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  editable: PropTypes.bool,
};

MdEditor.defaultProps = {
  content: '',
  editable: false,
};

export default MdEditor;
