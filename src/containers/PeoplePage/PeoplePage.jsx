import styles from './PeoplePage.module.css'
import {getApiResourse} from "../../utils/network";
import {useEffect, useState} from "react";
import {API_PEOPLE} from "../../constants/api";
import {getPeopleId, getPeopleImage} from "../../servises/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";

const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null)
    const getResorse = async (url) => {
        const res = await getApiResourse(url)
        if (res) {
            const PeopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    id, name, img
                }
            })
            setPeople(PeopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }


    }
    useEffect(() => {
        getResorse(API_PEOPLE)

    }, [])
    return (
        <>
            <h1>navigation</h1>
            {people && <PeopleList people={people}/>}


        </>
    )
}

export default withErrorApi(PeoplePage);
