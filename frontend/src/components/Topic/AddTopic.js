import React from 'react';


export const AddTopic = (props) => {
  const {handleSubmit, handleChange, topic} = props

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type='text' value={topic.title} name={'title'} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type='text' value={topic.description} name={'description'} onChange={handleChange} />
      </label>
      <input type='submit' value='Add' />
    </form>
  )
}