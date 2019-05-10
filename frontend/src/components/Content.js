import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';


class Content extends Component {

  renderContent = () => {

    const renderCondition = !!this.props.selectedNote

    if (this.props.noteEditorRenderCondition === true) {
      return <NoteEditor selectedNote={this.props.selectedNote} switchNoteEditorRenderCondition={this.props.switchNoteEditorRenderCondition} renderUpdatedNote={this.props.renderUpdatedNote} />;
    } else if (renderCondition === true) {
      return <NoteViewer selectedNote={this.props.selectedNote} switchNoteEditorRenderCondition={this.props.switchNoteEditorRenderCondition} deleteNote={this.props.deleteNote}/>;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }

}

export default Content;
