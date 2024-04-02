
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { styles } from '../../style.js';
function CreatePost() {
  const [value, setValue] = useState('');

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
  
  

  const module = {
    toolbar: toolbarOptions
  }
  return (
    <>  
    <div  className='box-border m-8'>
     <input type="text" placeholder='Heading'
      className={`${`w-full h-12 border p-5`} ${styles.border}`}
      
      />

     <input type="text" placeholder='MetaData' 
     className={`${`w-full h-12 border p-5 mt-8`} ${styles.border}`}
     />

     <input type="file" placeholder='uploads' className='w-full h-12 border p-2 border-black mt-8 '/>

    <ReactQuill theme="snow" value={value} onChange={setValue}  modules={module}
     className='mt-10'
    />;
    </div>
      
     

    </>
  )
}

export default CreatePost
