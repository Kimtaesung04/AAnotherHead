import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './scss/TodoInsert.scss';

const TodoInsert = ( { onInsert } ) => {

    const [ isInputClicked, setIsInputClicked ] = useState(false);
    const [ value, setValue ] = useState('');



    const onChange = useCallback(( e ) => {
        setValue( e.target.value );
    }, []);

    const onSubmit = useCallback(( e ) => {
        onInsert( value );
        setValue( isInputClicked === true ? "" : '할 일을 입력해주세요.' );

        e.preventDefault();

    }, [ onInsert, value ]);    

    return (
        <form className='TodoInsert' onSubmit= { onSubmit }>
            <input 
            onFocus={() => {
                setIsInputClicked( true );
            }}
            onBlur={() => {
                setIsInputClicked( false );
            }}
            placeholder={ isInputClicked === true ? "" : '할 일을 입력해주세요.'}
            value= { value } onChange= { onChange }  />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;