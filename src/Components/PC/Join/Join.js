import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Login/Logo'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Join = () => {
    const[clicked, setClick] = useState(false)
  return (
    <div className='flex flex-col justify-center items-center w-[25.5rem] h-[40.9375rem]'>
        <Logo/>
        <div className='flex flex-col justify-center items-center w-[19.9375rem] gap-[1.81rem]'>
            <TextField id="outlined-basic" name='name' label='이름' variant='outlined' size='small' fullWidth />
            <TextField id="outlined-basic" name='email' label='이메일' variant='outlined' size='small' fullWidth />
            <TextField id="outlined-basic" name='password' label='비밀번호' variant='outlined' size='small' fullWidth/>
            <TextField id="outlined-basic" name='password_confirm' label='비밀번호 확인' variant='outlined' size='small' fullWidth />
            <TextField id="outlined-basic" name='phone' label='전화번호' variant='outlined' size='small' fullWidth />
            <div className='flex flex-row justify-center items-center w-full gap-[0.81rem]'>
                <div className='w-[9.5625rem]'>{clicked ? <Button variant="contained" fullWidth onClick={() => setClick(!clicked)}>교사</Button> : <Button variant="outlined" fullWidth onClick={() => setClick(!clicked)}>교사</Button>}</div>
                <div className='w-[9.5625rem]'><Button variant="outlined" fullWidth>학생</Button></div>
            </div>
            <div className='flex flex-row justify-center items-center w-full gap-[0.81rem]'>
                <div className='w-[9.5625rem]'><Button variant="outlined" fullWidth>남</Button></div>
                <div className='w-[9.5625rem]'><Button variant="outlined" fullWidth>여</Button></div>
            </div>
            <button className='w-[19.9375rem] h-[2.5625rem] bg-[#7D8DA7] rounded-[0.4375rem]'>
            <p className='text-[#FFFFFF] text-[1.25rem] font-bold font-[Inter]'>Join</p>
            </button>
        </div>
        <div className='flex flex-row w-[15.1875rem] gap-[0.25rem] mt-[0.81rem]'>
            <p className='text-[#6D7A8F] text-[0.9375rem] font-normal font-[Inter]'>이미 아이디가 있다면...</p>
            <Link to={"/login"} className='text-[#6D7A8F] text-[0.9375rem] font-bold font-[Inter]'>로그인하러가기</Link>
        </div>
    </div>
  )
}

export default Join