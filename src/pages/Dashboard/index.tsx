import React, { useState,useEffect ,FormEvent } from 'react';
import { Link } from 'react-router-dom';
import provider from './../../services/provider';

import { Title, Form, Repositories, Error, Logo } from './styles';
import logoImg  from './../../assets/imgs/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard:React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() =>{
    const storagedRepositories = localStorage.getItem(
      '@Githubtj:repositories',
    );
      if(storagedRepositories) {
        return JSON.parse(storagedRepositories);
      } else {
        return [];
      }
    });

  useEffect(() => {
    localStorage.setItem('@Githubtj:repositories', JSON.stringify(repositories))
  }, [repositories]);

  async function handleAddRepository(
      event:FormEvent<HTMLFormElement>
    ): Promise<void> {
      event.preventDefault();
    try {
      if(!newRepo) {
        setInputError('Digite autor/nome do repositório');
        return;
      }
      const response = await provider.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
      console.log(response.data);
    }catch (err) {
      setInputError('Erro na busca por esse repositório')
    }
  }

  return (
    <>
      <Logo src={logoImg} alt="Githut Explorer"></Logo>
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) =>setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
          <img src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
        <strong>{repository.full_name}</strong>
        <p>{repository.description}</p>
          </div>
          <FiChevronRight size={24}/>
        </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard;
