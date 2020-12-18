import React, { useState, useEffect } from 'react';
import { toastr } from 'react-redux-toastr';

import { rupiahFormat } from '../../utils/rupiahFormat';
import * as API from '../../API/API';
import { Text, Box, Btn, FeedBack, BntContainer } from '../../styles';

const ListShipping = () => {
  // origin state
  const [provState, setProvState] = useState('');
  const [cityState, setCityState] = useState('');
  const [county, setCounty] = useState([]);
  const [city, setCity] = useState([]);

  //destination state
  const [provStateDest, setProvStateDest] = useState('');
  const [cityStateDest, setCityStateDest] = useState('');
  const [countyDest, setCountyDest] = useState([]);
  const [cityDest, setCityDest] = useState([]);

  //ongkir
  const [weight, setWeight] = useState('');

  //courier
  const [courier, setCourier] = useState('');

  //reults
  const [results, setResults] = useState([]);

  useEffect(() => {
    loadCounty();
    loadCity(provState);

    loadCountyDest();
    loadCityDest(provStateDest);
  }, [provState, provStateDest]);

  const loadCounty = () => {
    API.getProvince()
      .then((c) => setCounty(c.data.rajaongkir.results))
      .catch((error) => {
        console.log(error);
      });
  };

  const loadCity = (provState) => {
    API.getCity(provState)
      .then((c) => setCity(c.data.rajaongkir.results))
      .catch((error) => {
        console.log(error);
      });
  };

  const loadCountyDest = () => {
    API.getProvince()
      .then((c) => setCountyDest(c.data.rajaongkir.results))
      .catch((error) => {
        console.log(error);
      });
  };

  const loadCityDest = (provStateDest) => {
    API.getCity(provStateDest)
      .then((c) => setCityDest(c.data.rajaongkir.results))
      .catch((error) => {
        console.log(error);
      });
  };

  const loadCost = async (cityState, cityStateDest, weight, courier) => {
    const { data } = await API.getCost(
      cityState,
      cityStateDest,
      weight,
      courier
    );
    setResults(data.rajaongkir.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loadCost(cityState, cityStateDest, weight, courier);
    toastr.info('Silahkan Tunggu Sebentar!');

    setProvState('');
    setCityState('');
    setProvStateDest('');
    setCityStateDest('');
    setWeight('');
    setCourier('');
    setCounty([]);
    setCountyDest([]);
    setCity([]);
    setCityDest([]);
  };

  return (
    <div className="container">
      <FeedBack>
        <Text mb={3} fontSize={3} fontWeight={2} textAlign={'center'}>
          Cek Ongkos Kirim
        </Text>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <Text fontSize={2}>Asal Pengiriman</Text>

            <Box>
              <label>Provinsi: </label>
            </Box>
            <Box>
              <select
                className="form-select"
                name="provState"
                onChange={(e) => setProvState(e.target.value)}
              >
                <option>Atur Provinsi</option>
                {county.length > 0 &&
                  county.map((c) => (
                    <option key={c.province_id} value={c.province_id}>
                      {c.province}
                    </option>
                  ))}
              </select>
            </Box>

            <Box mt={2}>
              <label>Kota: </label>
            </Box>
            <Box>
              <select
                className="form-select"
                name="city"
                onChange={(e) => setCityState(e.target.value)}
              >
                <option>Atur Kota</option>
                {city.length > 0 &&
                  city.map((c) => (
                    <option key={c.city_id} value={c.city_id}>
                      {c.city_name}
                    </option>
                  ))}
              </select>
            </Box>
          </div>

          <div className="form-control">
            <Text fontSize={2}>Tujuan Pengiriman</Text>

            <Box>
              <label>Provinsi: </label>
            </Box>
            <Box>
              <select
                className="form-select"
                name="provStateDest"
                onChange={(e) => setProvStateDest(e.target.value)}
              >
                <option>Atur Provinsi</option>
                {countyDest.length > 0 &&
                  countyDest.map((c) => (
                    <option key={c.province_id} value={c.province_id}>
                      {c.province}
                    </option>
                  ))}
              </select>
            </Box>

            <Box mt={2}>
              <label>Kota: </label>
            </Box>
            <Box>
              <select
                className="form-select"
                name="cityStateDest"
                onChange={(e) => setCityStateDest(e.target.value)}
              >
                <option>Atur Kota</option>
                {cityDest.length > 0 &&
                  cityDest.map((c) => (
                    <option key={c.city_id} value={c.city_id}>
                      {c.city_name}
                    </option>
                  ))}
              </select>
            </Box>
          </div>

          <div className="form-control">
            <Text mt={2} fontSize={2}>
              Ongkos Kirim
            </Text>

            <Box>
              <label>Berat Barang (gram) :</label>
            </Box>
            <Box>
              <input
                className="form-control"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                type="number"
              />
            </Box>

            <Box mt={2}>
              <label>Kurir Pengiriman:</label>
            </Box>
            <Box>
              <select
                className="form-select"
                name="courier"
                onChange={(e) => setCourier(e.target.value)}
              >
                <option>Pilih Kurir</option>
                <option value="jne">JNE</option>
                <option value="pos">POS Indonesia</option>
                <option value="tiki">TIKI</option>
              </select>
            </Box>

            <Box mt={3}>
              <BntContainer>
                <Btn
                  size="sm"
                  color="yellow"
                  disabled={!courier && !cityState && !cityStateDest && !weight}
                >
                  Cek Ongkir
                </Btn>
              </BntContainer>
            </Box>
          </div>
        </form>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name Kurir</th>
                <th scope="col">Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              {results &&
                results.map((n, index) => (
                  <tr key={index}>
                    <td>{n.name}</td>
                    {n.costs.map((o, index) => (
                      <div key={index}>
                        <div className="lead">{o.service}</div>
                        <i>{o.description}</i>
                        {o.cost.map((v, index) => (
                          <div key={index}>
                            <u>{v.etd} </u>
                            <strong>{rupiahFormat(v.value)}</strong>
                          </div>
                        ))}
                      </div>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </FeedBack>
    </div>
  );
};

export default ListShipping;
