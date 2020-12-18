import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';

import FormControl from '../Form/FormControl';

import { FormWrapper, Text, Btn, BntContainer } from '../../styles';

//redux
import { useDispatch } from 'react-redux';
import { postAction } from '../../redux/actions/postsAction';

const FormAdd = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postAction(name, email, address, phoneNumber));
    console.log(name, email, address, phoneNumber);
    toastr.info(
      `Data ada telah kami terima, tunggu sebentar!., akan kami alihkan ke Halaman Terima Kasih!`
    );

    setName('');
    setEmail('');
    setAddress('');
    setPhoneNumber('');

    setTimeout(() => {
      history.push('/success');
    }, 3000);
  };

  return (
    <div className="container">
      <div className="form-control">
        <FormWrapper>
          <Text mt={3} mb={3} fontSize={2} fontWeight={3}>
            Masukkan Data Dirimu
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl
              label="Nama"
              value={name}
              placeholder="nama kamu..."
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <FormControl
              label="Email"
              value={email}
              placeholder="email kamu..."
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl
              label="Alamat"
              value={address}
              placeholder="address kamu..."
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />
            <FormControl
              label="Nomor Handphone"
              value={phoneNumber}
              placeholder="nomon handphone kamu..."
              type="number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <BntContainer>
              <Btn
                color="yellow"
                size="sm"
                disabled={!name && !email && !address && !phoneNumber}
              >
                Kirim Dataku
              </Btn>
            </BntContainer>
          </form>
        </FormWrapper>
      </div>
    </div>
  );
};

export default FormAdd;
