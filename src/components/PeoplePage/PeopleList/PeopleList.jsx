import styles from './PeopleList.module.css'

const PeopleList = ({people}) => {
    return (<ul className={styles.list__container}>
        {people.map(({id, name, img}) =>
            <li className={styles.list__item} key={id}>
                <a href='#'></a>
                <img className={styles.person__photo} src={img} alt={name}/>
                <p>{name}</p>
            </li>)}
    </ul>)
}
export default PeopleList;
