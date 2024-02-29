import styles from './PeoplePage.module.css'
import {getApiResourse} from "../../utils/network";
import {useEffect, useState} from "react";
import {API_PEOPLE} from "../../constants/api";
import {getPeopleId, getPeopleImage} from "../../servises/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";


const PeoplePage = () => {
    const [people, setPeople] = useState(null)
    const getResorse = async (url) => {
        const res = await getApiResourse(url)
        const PeopleList = res.results.map(({name, url}) => {
            const id = getPeopleId(url)
            const img = getPeopleImage(id)
            return {
                id, name, img
            }
        })
        setPeople(PeopleList)

    }
    useEffect(() => {
        getResorse(API_PEOPLE)

    }, [])
    return (<div>
        {people && <PeopleList people={people}/>}

    </div>)
}
export default PeoplePage;
