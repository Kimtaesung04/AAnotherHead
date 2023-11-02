import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './scss/TodoInsert.scss';
import { useSpeechRecognition } from 'react-speech-kit';

const TodoInsert = ( { onInsert } ) => {


    const [ value, setValue ] = useState(" ");

    const onChange = useCallback(( e ) => {
        setValue( e.target.value );
    }, []);

    const onSubmit = useCallback(( e ) => {
        onInsert( value );
        setValue(" ");

        e.preventDefault();

    }, [ onInsert, value ]);

    const [ talkOn, setTalkOn ] = useState('');
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: ( result ) => {
            setValue( result )
        }
    })
    const changePlaceHolder = () => {
        const 
    }

    return (
        <form className='TodoInsert' onSubmit= { onSubmit }>
            <input placeholder= '할 일을 적어주세요'  value= { value } onChange= { onChange } />
            <button onMouseDown= { listen } onMouseUp= { stop } onClick={}>
                ●
            </button>
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;