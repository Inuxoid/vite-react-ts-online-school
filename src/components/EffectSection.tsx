import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import {useEffect, useState, useCallback} from "react";
import { User } from '../types.ts'
import useInput from "../hooks/useInput.ts";

function EffectSection() {
    const input = useInput();
    const [modal, setModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const users = await response.json();
        setUsers(users);
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <section>
            <h3>Effects</h3>

            <Button onClick={()=> setModal(true)} style={{marginBottom: '1rem'}} >Открыть информацию</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>lorem ipsum dolor sit amet</p>
                <Button onClick={()=>setModal(false)}>Close modal</Button>
            </Modal>

            {loading && <p>loading...</p>}
            {!loading && (
                <>
                    <input
                        type="text"
                        className='control'
                        {...input}
                    />
                    <ul>
                        {users.filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase()))
                            .map(user => <li key={user.id}>{user.name}</li>)}
                    </ul>
                </>
            )}
        </section>
    )
}

export default EffectSection;