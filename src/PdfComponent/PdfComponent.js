import React from 'react'

export default function PdfComponent() {
    return (
        <form class="m-auto w-50 mt-5">
            <div class="mb-3">
                <label class="form-label">Ф.И.О.</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="familyHelp" class="form-text">Введите ФИО через пробел (Иванов Иван Иванович)</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Текст заявления</label>
                <textarea class="form-control" aria-label="With textarea"></textarea>
                <div id="familyHelp" class="form-text">Введите текст заявления в свободной форме</div>
            </div>
            <div class="mb-3 form-check">
                <div class="input-group">
                    <input class="form-control py-2 border-right-0 border" type="date" />
                </div>
                <label class="form-check-label" for="exampleCheck1">Выберите дату</label>
            </div>
            <button type="submit" class="btn btn-primary">Скачать заявление</button>
        </form>
    )
}
