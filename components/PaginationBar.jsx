import {getPostCount} from '../services'
import {useState} from 'react'
const PaginationBar=({page})=>{
    const [totalPage,setTotalPage] = useState();
    const [currentPage, setCurrentPage] = useState({page});
    useEffect(() => {      
          getPostCount.then((result) => {
            setTotalPage(Math.ceil(result/3));
          });       
    }, [page]);
    return (
        <>
        <div className="btn-group">
        <button className="btn">1</button>
        <button className="btn btn-active">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
        </div>
        </>
    )
}