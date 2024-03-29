import {SWAPI_PEOPLE, HTTP, SWAPI_ROOT, HTTPS,
    GUIDE_IMG_EXTENSION, URL_IMG_PERSON} from "../constants/api";

const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS
    }
    return HTTP
}
const getId = (url, category) => {
    const protocol = checkProtocol(url)
    const id = url
        .replace(HTTP + SWAPI_ROOT + category, '')
        .replace(protocol + SWAPI_ROOT + category)
        .replace(/\//g, '')
        .replace('undefined', '')
    return id

}
export const getPeopleId = url => getId(url, SWAPI_PEOPLE)
export const getPeopleImage = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`