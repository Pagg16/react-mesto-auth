import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function EditProfilePopup(props) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  const dataUser = React.useContext(CurrentUserContext);

  // const [inputValues, setInputValues] = React.useState({ name: "", about: "" });
  // const [inputsValidity, setInputsValidity] = React.useState({
  //   name: true,
  //   about: true,
  // });

  // const [inputErrorMessages, setInputErrorMessages] = React.useState({
  //   name: "",
  //   about: "",
  // });

  // function handleInputChange(evt) {
  //   setInputValues({
  //     ...inputValues,
  //     [evt.target.name]: evt.target.value,
  //   });

  //   setInputsValidity({
  //     ...inputsValidity,
  //     [evt.target.name]: evt.target.validity.valid,
  //   });

  //   setInputErrorMessages({
  //     ...inputErrorMessages,
  //     [evt.target.name]: evt.target.validationMessage,
  //   });
  // }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: values.name,
      about: values.about,
    });
    resetForm();
  }

  React.useEffect(() => {
    if (props.isOpen) {
      // setInputValues({ name: dataUser.name, about: dataUser.about });
      setValues({ name: dataUser.name, about: dataUser.about})
    }
  }, [props.isOpen, dataUser, setValues]);

  function clickingCloseButton() {
    props.onClose();
        // setInputsValidity({ name: true, about: true });
    // setInputErrorMessages({ name: "", about: "" });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={clickingCloseButton}
      name={"popup-profile"}
      textButton={props.textButton}
      title={"Редактировать профиль"}
      activeValid={
        isValid.name === true && isValid.about === true
      }
    >
      <input
        value={values.name}
        // onChange={handleInputChange}
        onChange={handleChange}
        type="text"
        id="user-name"
        name="name"
        placeholder="Имя"
        className="popup__filed"
        minLength={2}
        maxLength={40}
        autoComplete="off"
        required
      />
      <span
        className={`error user-name-error ${
          isValid.name ? "" : "popup__error_visible"
        }`}
      >
        {errors.name}
      </span>
      <input
        value={values.about}
        // onChange={handleInputChange}
        onChange={handleChange}
        type="text"
        id="user-job"
        name="about"
        placeholder="Работа"
        className="popup__filed"
        minLength={2}
        maxLength={200}
        autoComplete="off"
        required
      />
      <span
        className={`error user-job-error ${
          isValid.about ? "" : "popup__error_visible"
        }`}
      >
        {errors.about}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
