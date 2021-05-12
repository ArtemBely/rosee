import React from 'react';

function Questions() {
  return(
    <div className='wrap_questions2'>
      <div className='questions2'>
          <div className='first_section'>
              <p className='have_a_quest'>Если появился вопрос</p>
              <p className='have_a_quest2'>Напишите его в форме или <span className='call_us'>позвоните нам</span> <br/> напрямую, менеджеры разберутся в ситуации <br/> и постараются решить вашу задачу</p>
          </div>
          <div className='second_section'>
            <form action="#">
              <input type="text" name="name" className="questions_name" placeholder="Ваше имя"/>
              <input type="email" name="email" className="questions_mail" placeholder="Телефон или электронная почта"/>
              <textarea type="text" name="questions" className="questions_input" placeholder="Ваш вопрос"></textarea>
              <button type='submit' className="questions_button">Оформить</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Questions;
