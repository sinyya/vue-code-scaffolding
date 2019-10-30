import ClientAPI from '../api/index';
const clientAPI = new ClientAPI();
import {store} from './store';

/**
 * 비 순차적 또는 비동기 처리 로직들을 선언
 * setTimeout()이나 서버와의 http 통신 처리 같이 결과를 받아올 타이밍이 예측되지 않는 로직
 *
 */
export const actions = {
    /**
     * 예제
     * asyncIncrement: function (context, payload) {
          return setTimeout(function () {
            context.commit('increment', payload.by);
          }, payload.duration);
        },

     * getServerData: function (context) {
          return axios.get("sample.json").then(function() {
            // ...
          });
        },
     */
    addValue: function (context) {
        return setTimeout(function () {
            context.commit('addValue');
        }, 1000)
    },

    /**
     * 직원 리스트 정보를 요청한다.
     *
     * @param commit
     *
     * @returns {Promise<any> | Q.Promise<any> | * | PromiseLike<any>}
     */
    getEmployeeList({commit}) {
        return clientAPI.getEmployeeList().then(data => {
            commit('setEmployeeList', data)
        })
    },

    /**
     * 특정 직원의 정보를 요청한다.
     *
     * @param commit
     * @param options
     *
     * @returns {Promise<unknown | never>}
     */
    getEmployeeInfo({commit}, options) {
        return clientAPI.getEmployeeInfo(options).then(data => {
            commit('setEmployeeInfo', data)
        }).catch(() => {
            commit('setEmployeeInfo', store.state.employeeList.find(item => {
                return item.id === options.id
            }))
        })
    },
};
