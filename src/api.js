import axios from 'axios';

import { saveCoinData } from './coinSlice';
import { useDispatch , useSelector} from 'react-redux';

const dispatch = useDispatch();

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '942673c39amsh85700617a91a510p1999f3jsn4343da569c82',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	dispatch(saveCoinData(response.data));
} catch (error) {
	console.error(error);
}