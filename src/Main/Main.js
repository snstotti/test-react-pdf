import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className='text-center'>
      <div className='m-5'>
        <h2>React Pdf App</h2>
        <span>Приветствую Вас, наше приложение поможет создать заявление в формате'PDF'</span><br />
        <span>Чтобы приступить нажмите на кнопку ниже</span>
      </div>
      <div className='p-3'>
        <button type="button" className="btn btn-primary">
          <Link className="text-white text-decoration-none" to="/create-pdf">Создать PDF</Link>
        </button>
      </div>
    </div>
  )
}
