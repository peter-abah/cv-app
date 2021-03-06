const PersonalInfoForm = (props) => {
  const {
    name,
    phone,
    address,
    email,
    description,
    errors,
    handleChange,
  } = props;

  return (
    <div id="personal" className="form_section">
      <h2 className="form__section__title">Personal Information</h2>
      <div>
        <div className="form__row">
          <div className="form__field">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input
              className="form__input"
              id="name"
              name="name"
              type="text"
              value={name}
              placeholder="John Doe"
              data-key="personal"
              onChange={handleChange}
            />
            {errors.name && <p className="form__error-msg">{errors.name}</p>}
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="phone">
              Telephone No
            </label>
            <input
              className="form__input"
              type="text"
              name="phone"
              id="phone"
              value={phone}
              placeholder="+234 8004002001"
              data-key="personal"
              onChange={handleChange}
            />
            {errors.phone && <p className="form__error-msg">{errors.phone}</p>}
          </div>
        </div>

        <div className="form__row">
          <div className="form__field">
            <label className="form__label" htmlFor="address">
              Address
            </label>
            <input
              className="form__input"
              type="text"
              name="address"
              id="address"
              value={address}
              placeholder="Your address here"
              data-key="personal"
              onChange={handleChange}
            />
            {errors.address && <p className="form__error-msg">{errors.address}</p>}
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <input
              className="form__input"
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="johndoe@email.com"
              data-key="personal"
              onChange={handleChange}
            />
            {errors.email && <p className="form__error-msg">{errors.email}</p>}
          </div>
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="description">
            Describe Yourself
          </label>
          <textarea
            className="form__input form__textarea"
            name="description"
            id="description"
            value={description}
            placeholder="A brief description about you"
            data-key="personal"
            onChange={handleChange}
          ></textarea>
          {errors.description && (
            <p className="form__error-msg">{errors.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
