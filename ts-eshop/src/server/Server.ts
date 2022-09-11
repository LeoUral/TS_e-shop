import { log } from 'console';
import { LoginData } from '../components/logIn/FormLogin';
import { TypeDataRegistration } from '../components/logIn/FormRegistration';


class Server {

    key: string = '12345';
    url: string = 'http://localhost:3001';

    // constructor(key: string, url: string) {
    //     this.key = key;
    //     this.url = url;
    // }

    /**
     * Проверка зарегистрированного пользователя
     * @param data Объект {login, password}
     * @returns 
     */
    async sendDataLogin(data: LoginData) {

        console.log(`LoginData:::: `, data);
        console.log(`URL:::: `, this.url);
        console.log(`KEY:::: `, this.key);

        const body = JSON.stringify({
            key: this.key,
            data: data,
        })

        const result = await fetch(`${this.url}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: body
        })

        let resultJson = await result.json()
        console.log(`RESULT:::: `, resultJson); // test

        return resultJson
    }

    /**
     * 
     * @param data Объект {name: string; surname: string; login: string; password: string; phone: string; email: string;}
     * @returns 
     */
    async sendDataRegistration(data: TypeDataRegistration) {

        console.log(`REGISTARTION Data:::: `, data);
        console.log(`URL:::: `, this.url);
        console.log(`KEY:::: `, this.key);

        const body = JSON.stringify({
            key: this.key,
            data: data,
        })

        const result = await fetch(`${this.url}/registration`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: body
        })

        let resultJson = await result.json()
        console.log(`RESULT:::: `, resultJson); // test

        return resultJson
    }
}

let server: Server = new Server()

export default server
