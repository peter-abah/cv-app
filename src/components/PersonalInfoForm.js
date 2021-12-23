const PersonalInfoForm = (props) => {
  const { name, phone, address, email, description, handleChange } = props;
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="phone">Telephone No</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="description">Describe Yourself</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default PersonalInfoForm;