import React, {useState} from 'react';
import TelegramInput from "../Input/TelegramInput";
import TelegramButton from "../Button/TelegramButton";
import './TelegramMiniForm.css';
import TelegramText from "../Text/TelegramText";

const TelegramMiniForm = (props) => {
    const [input, setInput] = useState('')

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }

    const onButtonClick = () => {
        props.onSubmit(input)
    }

    return (
        <div {...props} className={'telegramMiniForm ' + props.className}>
            <TelegramText className={'telegramSubtitle'}>{props.fieldLabel}</TelegramText>

            <TelegramInput
                type="text"
                placeholder={props.fieldHint}
                value={input}
                onChange={onChangeInput}
            />

            <TelegramText className={'telegramHint'}>{props.fieldDescription}</TelegramText>

            <TelegramButton onClick={onButtonClick}>{props.buttonLabel}</TelegramButton>
        </div>
    );
};

export default TelegramMiniForm;