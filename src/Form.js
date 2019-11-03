import React from 'react';

class Form extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         title: '',
         globalTitle: '',
      }
   }

   handleFormChange = e => this.setState({title: e.target.value});

   // After the component has been rendered, display “Rendered Form” in the console
   // I assume it's the 1st render?
   componentDidMount() {
      console.log('Rendered Form');
   }

   // During the form validation, update the component "globalTitle" state with the following value: "My form - "
   // I assume it means onClick?
   handleGlobalTitleChange = () => this.setState({globalTitle: 'My form - '+this.state.title,});
   
   // Once the component is updated, display “Title changed” in the console
   componentDidUpdate(prevProps) {
      if (this.state.globalTitle !== prevProps.globalTitle) {
         console.log('Title changed');
      }
   }
    
   render() {
      return (
         <div>
            {/* to make this easier, added h1 and h2 */}
            <h1>title: {this.state.title}</h1>
            <h2>globalTile: {this.state.globalTitle}</h2>
            
            <label htmlFor='title'>
               <input 
                  id='title'
                  type='text'
                  value={this.state.title}
                  onChange={this.handleFormChange}
                  >
               </input>
               <br/>
               <button 
                  type="submit"
                  onClick={this.handleGlobalTitleChange}
                  >Validation
               </button>
            </label>
         </div>
      )
   }
}

export default Form;