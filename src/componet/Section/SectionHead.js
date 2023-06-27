import classes from './SectionHead.module.css'
const SectionHead = (props) => {
    return (
        <div className={classes.title}>
            <h1>Information Card</h1>
            <p className={classes.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quae pariatur iste at eveniet, ut error eius nobis dolores<br></br>
                reiciendis velit facilis commodi voluptatum amet, dolore 
                consequuntur maiores vitae repellendus cumque.</p>

        </div>
    )
}
export default SectionHead;