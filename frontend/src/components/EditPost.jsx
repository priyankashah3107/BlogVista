import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { styles } from '../../style.js';
import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';


function EditPost() {
   const {id} = useParams()
  const [value, setValue] = useState('');
  const[title, setTitle] = useState("");
  const [metaData, setMetaData] = useState("") 
  const[files, setFiles] = useState('')
  const[redirect, setRedirect] = useState(false)


  useEffect(() => {
    fetch("http://localhost:3333/post/"+id) 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(postInfo => {
        setTitle(postInfo.title);
        setMetaData(postInfo.metaData);
        setValue(postInfo.value);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error here, e.g., set state to indicate fetch error
      });
  }, [id]);
  

  async function handleSubmit(ev) { 
    ev.preventDefault();
    setValue(value)
  }


  if(redirect) {
    return <Navigate  to={'/'}/>
  }
  
    
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
  
  

  const quillModules = {
    toolbar: toolbarOptions
  };
  return (
    <>  
    <form action="" onSubmit={handleSubmit}>
    <div  className='box-border m-8'>
      
     <input type="text" placeholder='Title'
      className={`${`w-full h-12 border p-5`} ${styles.border} ${styles.rounded}`}

      value={title}
      onChange={(ev) => setTitle(ev.target.value)}
      
      />

     <input type="text" placeholder='MetaData' 
     className={`${`w-full h-12 border p-5 mt-8`} ${styles.border} ${styles.rounded}`}
       value={metaData}
       onChange={(ev) => setMetaData(ev.target.value)}
     />

     <input type="file" placeholder='uploads' className='w-full h-12 border p-2 border-black mt-8 rounded-md'
      
       onChange={(ev) => setFiles(ev.target.files)}
      />

    <ReactQuill theme="snow" value={value} 
    onChange={newValue => setValue(newValue)} 
     modules={quillModules}
     className={`${styles.rounded} mt-10 `}
    />
     <button className="btn btn-active btn-neutral w-full mt-10">Update Post</button>

    </div>
      
    </form>
    
     

    </>
  )
}

export default EditPost