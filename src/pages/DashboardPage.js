import {Page} from '../core/Page';
import {$} from '@core/dom';
import {createRecordsTable} from './dashboard.functions';

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString()
    return $.create('div', 'db').html(/*html*/`
      <div class="db__header">
        <h1>Excel | Панель управления</h1>
      </div>

      <div class="db__new">
        <div class="db__view">
          <a href="#excel/${now}" class="db__create">
            Новая <br> Tаблица
          </a >
        </div>
      </div>

      <div class="db__table db__view">
        ${createRecordsTable()}
      </div>
    `)
  }
}