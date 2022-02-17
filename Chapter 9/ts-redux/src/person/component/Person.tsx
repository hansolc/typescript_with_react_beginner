import React from 'react';
import { ReduxState } from '../../common/store';
import { actions } from '../state/actions';
import { useSelector, useDispatch } from 'react-redux';
import useTypedSelector from '../../common/useTypedSelector';

interface Props {
    birthday: string;
}

export default function Person({ birthday }: Props){
    // param 1) redux 상탯값, 2) 매개변수로 입력된 함수의 반환값
    const name = useTypedSelector(state => state.person.name);
    const age = useTypedSelector(state => state.person.age);
    const dispatch = useDispatch();

    function onClick() {
        dispatch(actions.setName('mike'));
        dispatch(actions.setAge(23));
    }

    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{birthday}</p>
            <button onClick={onClick}>정보 추가하기</button>
        </div>
    )
}