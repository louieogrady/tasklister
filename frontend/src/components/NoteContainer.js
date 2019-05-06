import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    noteEditorRenderCondition: false
  }

  switchNoteEditorRenderCondition = () => {
    this.setState({
      noteEditorRenderCondition: !this.state.noteEditorRenderCondition
    });
  };

  deleteNote = (noteToDeleteId) => {
    fetch(`http://localhost:3000/api/v1/notes/${noteToDeleteId}`, {
      method: "DELETE"
    }).then(resp => resp.json())
    .then(note => this.props.updateNotesAfterDelete(note))
    .then(this.props.clearSelectedNote)
  }

  render() {
    return (
      <Fragment>
        <Search searchInput={this.props.searchInput}/>
        <div className='container'>
          <Sidebar notes={this.props.notes} selectNote={this.props.selectNote} selectedNote={this.props.selectedNote} renderNewNote={this.props.renderNewNote} switchNoteEditorRenderCondition={this.switchNoteEditorRenderCondition} noteEditorRenderCondition={this.state.noteEditorRenderCondition} sortedByTimeCreated={this.props.sortedByTimeCreated} clearSelectedNote={this.props.clearSelectedNote}/>
          <Content noteEditorRenderCondition={this.state.noteEditorRenderCondition} switchNoteEditorRenderCondition={this.switchNoteEditorRenderCondition} selectedNote={this.props.selectedNote} renderUpdatedNote={this.props.renderUpdatedNote} deleteNote={this.deleteNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
