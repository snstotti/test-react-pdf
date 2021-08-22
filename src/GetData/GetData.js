import React from 'react'
import { useState } from 'react'
import { PdfComponent } from '../PdfComponent/PdfComponent';
import { PDFDownloadLink } from '@react-pdf/renderer';

export default function GetData() {

    const [state, setState] = useState({ name: '', text: '', data: '' })

    const update = (e) => {
        let item = e.target.value
        let nameItem = e.target.name
        setState({
            ...state,
            [nameItem]: item
        });

    }


    let myPdf = <PdfComponent
        name={state.name}
        text={state.text}
        data={state.data.split('-').reverse().join('-')}
        surname={state.name.split(' ')[0]} />
  

    return (
        <form className="m-auto w-50 mt-5">
            <div className="mb-3">
                <label className="form-label">Ф.И.О.</label>
                <input type="text" value={state.name} onChange={(e) => update(e)} className="form-control" name="name" />
                <div id="familyHelp" className="form-text">Введите ФИО через пробел (Иванов Иван Иванович)</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Текст заявления</label>
                <textarea value={state.text} onChange={(e) => update(e)} className="form-control" name="text" aria-label="With textarea"></textarea>
                <div id="familyHelp" className="form-text">Введите текст заявления в свободной форме</div>
            </div>
            <div className="d-flex justify-content-between w-100 align-items-center">
                <div className="form-check p-0 w-50">
                        <label className="form-label" htmlFor="exampleCheck1">Выберите дату</label>
                        <input value={state.data} onChange={(e) => update(e)} className="form-control py-2 border-right-0 border" name="data" type="date" />
                </div>
                <div onClick={() => setState({ name: '', text: '', data: '' })} className="mt-4" >
                    <PDFDownloadLink className="btn btn-primary"
                        document={myPdf}
                        fileName="somename.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Loading document...' : 'Скачать заявление!'
                        }
                    </PDFDownloadLink>
                </div>
            </div>

        </form>
    )
}
