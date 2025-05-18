import React from 'react'
import SubmitForm from './Components/SubmitForm'
import Form_Select from './Components/Form_Select'
import FavoriteColor from './Components/FavoriteColor'
import TextBox from './Components/TextBox'
import FormTextArea from './Components/Form_TextArea'


const App = () =>
{
  return (
    <div className="center-wrapper">
      <div className="center-box">
        <h1>Form In React</h1>
        <SubmitForm />
        <Form_Select />
        <FavoriteColor />
        <TextBox />
        <FormTextArea />
      </div>
    </div>
  )
}

export default App
