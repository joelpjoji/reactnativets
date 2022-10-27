import {useState, useEffect} from 'react';
import axios from 'axios';
import {URLS} from '../constants';
import {Photo} from '../interfaces/Photo';

const useProfilePhotos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState(null);

  function getProfilePhotos() {
    setIsLoading(true);
    axios
      .get(URLS.PROFILE_PHOTOS)
      .then(response => {
        setIsLoading(false);
        setPhotos(response.data.slice(0, 50));
      })
      .catch(e => {
        setIsLoading(false);
        setError(e);
      });
  }

  useEffect(function () {
    getProfilePhotos();
  }, []);

  return {isLoading, photos, error};
};

export default useProfilePhotos;
