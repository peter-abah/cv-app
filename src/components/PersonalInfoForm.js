const PersonalInfoForm = (props) => {
  const { name, phone, address, email, description, handleChange } = props;
  return (
    <div className="form_section">
      <h2 className="form__section__title">Personal Information</h2>
      <div>
        <div className="form__field">
          <label className="form__label" htmlFor="name">Name</label>
          <input
            className="form__input"
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="phone">Telephone No</label>
          <input
            className="form__input"
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="address">Address</label>
          <input
            className="form__input"
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={handleChange}
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="email">Email</label>
          <input
            className="form__input"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="description">Describe Yourself</label>
          <textarea
            className="form__input"
            name="description"
            id="description"
            value={description}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;