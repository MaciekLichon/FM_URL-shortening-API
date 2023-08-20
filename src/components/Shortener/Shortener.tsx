import './Shortener.scss';
import Container from '../Container/Container';

import {useState} from 'react'; 

type ILinks = {
  original: string;
  short: string;
}

const Shortener: React.FC = () => {

  const [value, setValue] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [links, setLinks] = useState<ILinks[]>([
    {original: '', short: ''}
  ]);
  const [copied, setCopied] = useState<string>('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    if (value !== '') {
      fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
        .then(res => res.json())
        .then(data => {
          if (data.ok) {
            setErrorMsg('');
            const newLink = {original: data.result.original_link, short: data.result.full_short_link}
            if (links[0].original === '') {
              setLinks([newLink]);
            } else {
              setLinks([...links, newLink])
            }
          } else {
            setErrorMsg('This is not a valid URL');
          }
        });
    } else {
      setErrorMsg('Please add a link');
    }

    setValue('');
  };

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
  };

  return (
    <section className="shortener">
      <Container>
        <form className="shortener__form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            className={`shortener__input ${(errorMsg !== '' && value === '') ? 'shortener__input-error' : ''}`}
            placeholder="Shorten a link here..." 
            value={value} 
            onChange={(e) => setValue(e.target.value)} />
          {(errorMsg !== '' && value === '') && <p className="shortener__error"><i>{errorMsg}</i></p>}
          <button type="submit" className="btn btn-squared shortener__btn">Shorten It!</button>
        </form>

        <div className="shortener__list">
          {links[0].original !== '' && 
            links.map((item, index) => (
              <div key={index} className="shortener__item">
                <div className="shortener__item-text">
                  <p className="shortener__item-original">{item.original}</p>
                  <p className="shortener__item-short">{item.short}</p>
                </div>
                <button 
                  className={`btn btn-squared shortener__item-btn ${copied === item.short ? 'shortener__item-btn-clicked' : ''}`}
                  onClick={() => copy(item.short)}>
                    {copied === item.short ? 'Copied' : 'Copy'}
                  </button>
              </div>
            ))
          }
        </div>
      </Container>
    </section>
  );
};

export default Shortener;