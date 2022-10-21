import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getStudents, studentsData } from './store';

import ReadOnlyInputBox from '../../components/readOnlyInputBox';

const ShowStudents = () => {
    const [page, setPage] = useState(0);
    const [studData, setStudData] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, error, loading } = useSelector(studentsData);

    useEffect(() => {
        dispatch(getStudents());
    }, []);

    useEffect(() => {
        setStudData(data[page])
    }, [data, page])

    return (
        <div className='mt-4'>
            <div className='d-flex justify-content-center my-2'>
                <ReadOnlyInputBox
                    htmlFor="inputName"
                    id="inputName"
                    label="Name"
                    type="text"
                    defaultValue={studData?.name}
                    disabled
                />
            </div>
            <div className='d-flex justify-content-center my-2'>
                <ReadOnlyInputBox
                    htmlFor="inputEmail"
                    id="inputEmail"
                    label="Email"
                    defaultValue={studData?.email}
                    type="email"
                    disabled
                />
            </div>
            <div className='d-flex justify-content-center my-2'>
                <ReadOnlyInputBox
                    htmlFor="inputPhone"
                    id="inputPhone"
                    label="Phone"
                    defaultValue={studData?.phone}
                    type="text"
                    disabled
                />
            </div>
            <div className='d-flex justify-content-center my-2'>
                <ReadOnlyInputBox
                    htmlFor="inputMarks"
                    id="inputMarks"
                    label="Marks"
                    defaultValue={studData?.marks}
                    type="text"
                    disabled
                />
            </div>
            <div className='d-flex justify-content-center my-2'>
                <ReadOnlyInputBox
                    htmlFor="inputResult"
                    id="inputResult"
                    defaultValue={studData?.result}
                    label="Result"
                    type="text"
                    disabled
                />
            </div>
            <div className='d-flex justify-content-center'>
                <div className='my-2'>
                    <button type="button" className="btn btn-primary"
                        onClick={() => navigate(`/create-student/${studData.id}`)}
                    >
                        Edit
                    </button>
                </div>
            </div>
            <div className='mt-2 d-flex justify-content-center'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {data.map((item, ind) => (
                            <li className={`page-item`} key={ind} onClick={() => setPage(ind)}>
                                <a className={`page-link ${ind === page ? 'disabled bg-light text-primary' : ''}`}>
                                    {ind + 1}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='mt-1'>
                    <button type="button" className="btn btn-primary"
                        onClick={() => navigate('/create-student')}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShowStudents;
