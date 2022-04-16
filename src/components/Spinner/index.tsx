import "./styles.css";
const Spinner = ({color = "#fff"}:{color?:string}) => <div className="spinner" style={{
    borderTop:`.3em solid ${color}`,
    borderRight:`.3em solid ${color}`,
    borderBottom:`.3em solid ${color}`,
}}>
</div>
export default Spinner