import {useSelector} from 'react-redux';

const useToken = () => {
  return useSelector((state: any) => state.auth.accessToken);
};

export default useToken;
