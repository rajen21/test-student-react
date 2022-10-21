import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import InputBox from '../../components/inputBox';
import { getStudent, studentData } from './store';

const CreateStudent = () => {
    const [err, setErr] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, error, loading } = useSelector(studentData);
    const { id } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            marks: e.target.marks.value,
            result: e.target.result.value
        };

        let url = 'http://localhost:8080/student/';
        let method = 'POST';

        if (id) {
            url += id;
            method = 'PUT'
        }
        try {
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            res && navigate('/')
        } catch (error) {
            setErr(error.message);
        }
    }

    useEffect(() => {
        id && dispatch(getStudent(id));
    }, [id]);

    return (
        <form onSubmit={handleSubmit} className='mt-4'>
            <div className='my-3 d-flex justify-content-center'>
                <InputBox
                    htmlFor="inputName"
                    name="name"
                    id="inputName"
                    label="Name"
                    type="text"
                    isRequired={true}
                    defaultValue={id ? data?.name : ''}
                    placeholder="Name"
                />
            </div>
            <div className='my-3 d-flex justify-content-center'>
                <InputBox
                    htmlFor="inputEmail"
                    name="email"
                    id="inputEmail"
                    label="Email"
                    defaultValue={id ? data?.email : ''}
                    type="email"
                    isRequired={true}
                    placeholder="Email"
                />
            </div>
            <div className='my-3 d-flex justify-content-center'>
                <InputBox
                    htmlFor="inputPhone"
                    name="phone"
                    id="inputPhone"
                    label="Phone"
                    type="number"
                    defaultValue={id ? data?.phone : ''}
                    isRequired={true}
                    placeholder="Phone"
                />
            </div>
            <div className='my-3 d-flex justify-content-center'>
                <InputBox
                    htmlFor="inputMarks"
                    id="inputMarks"
                    name="marks"
                    defaultValue={id ? data?.marks : ''}
                    label="Marks"
                    type="number"
                    min="0"
                    max="500"
                    isRequired={true}
                    placeholder="Marks"
                />
            </div>
            <div className="dropdown mt-3 d-flex justify-content-center">
                <select name="result" id="inputResult" required>
                    {['Pass', 'Fail'].map((elem, ind) => (
                        <option key={ind} selected={id && elem === data?.result}
                        >
                            {elem}
                        </option>
                    ))
                    }
                </select>
            </div>
            <div className='my-3 d-flex justify-content-center'>
                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default CreateStudent;
