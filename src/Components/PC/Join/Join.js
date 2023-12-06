import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Login/Logo'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Join = () => {
    // const[clicked, setClick] = useState(false)
    const[joinData, setJoinData] = useState({
        name: '',
        id: '',
        pw: '',
        pwcheck: '',
        phonenum: '',
        job: '',
        sex: '',
    })
    const[job] = useState('');
    const[sex] = useState('');

    const handleSubmit = () => {
        setJoinData({...joinData, job: job, sex: sex})
        console.log(joinData)
    }

    return (
        <div className='flex flex-col justify-center items-center w-[25.5rem] h-[40.9375rem]'>
            <Logo/>
            <div className='flex flex-col justify-center items-center w-[19.9375rem] gap-[1.81rem]'>
                <TextField id="outlined-basic" name='name' label='이름' variant='outlined' size='small' fullWidth value={joinData.name} onChange={(e) => setJoinData({...joinData, name: e.target.value})}/>
                <TextField id="outlined-basic" name='email' label='이메일' variant='outlined' size='small' fullWidth value={joinData.id} onChange={(e) => setJoinData({...joinData, id: e.target.value})}/>
                <TextField id="outlined-basic" name='password' type='password' label='비밀번호' variant='outlined' size='small' fullWidth value={joinData.pw} onChange={(e) => setJoinData({...joinData, pw: e.target.value})}/>
                <TextField id="outlined-basic" name='password_confirm' type='password' label='비밀번호 확인' variant='outlined' size='small' fullWidth value={joinData.pwcheck} onChange={(e) => setJoinData({...joinData, pwcheck: e.target.value})}/>
                <TextField id="outlined-basic" name='phone' label='전화번호' variant='outlined' size='small' fullWidth value={joinData.phonenum} onChange={(e) => setJoinData({...joinData, phonenum: e.target.value})}/>
                <div className='flex flex-row justify-center items-center w-full gap-[0.81rem]'>
                    <div className='w-[9.5625rem]'>{joinData.job === 'teacher' ? <Button variant="contained" fullWidth >교사</Button> : <Button variant="outlined" fullWidth onClick={(e) => setJoinData({...joinData, job: 'teacher'})}>교사</Button>}</div>
                    <div className='w-[9.5625rem]'>{joinData.job === 'student' ? <Button variant="contained" fullWidth >학생</Button> : <Button variant="outlined" fullWidth onClick={(e) => setJoinData({...joinData, job: 'student'})}>학생</Button>}</div>
                </div>
                <div className='flex flex-row justify-center items-center w-full gap-[0.81rem]'>
                    <div className='w-[9.5625rem]'>{joinData.sex === 'men' ? <Button variant="contained" fullWidth >남</Button> : <Button variant="outlined" fullWidth onClick={(e) => setJoinData({...joinData, sex: 'men'})}>남</Button>}</div>
                    <div className='w-[9.5625rem]'>{joinData.sex === 'women' ? <Button variant="contained" fullWidth >여</Button> : <Button variant="outlined" fullWidth onClick={(e) => setJoinData({...joinData, sex: 'women'})}>여</Button>}</div>
                </div>
                <button className='w-[19.9375rem] h-[2.5625rem] bg-[#7D8DA7] rounded-[0.4375rem]' onClick={handleSubmit}>
                    <span className='text-[#FFFFFF] text-[1.25rem] font-bold font-[Inter]'>Join</span>
                </button>
            </div>
            <div className='flex flex-row w-[15.1875rem] gap-[0.25rem] mt-[0.81rem]'>
                <span className='text-[#6D7A8F] text-[0.9375rem] font-normal font-[Inter]'>이미 아이디가 있다면...</span>
                <Link to={"/login"} className='text-[#6D7A8F] text-[0.9375rem] font-bold font-[Inter]' onClick={handleSubmit}>로그인하러가기</Link>
            </div>
        </div>
    )
}

export default Join