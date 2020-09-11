import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageUploader from 'react-images-upload';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

function Upload(props) {


  const onDrop = (picture) => {
    // this.setState({
    //   pictures: this.state.pictures.concat(picture),
    // });
    console.log(picture)
    var t = pictures.concat(picture)
    setPictures(t)
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 40
    },
    paper: {
      // padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none',
    },
    image: {
      borderRadius: 10
    },
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      backgroundColor: '#1976D2',
      borderRadius: 10,
      width: '50%',
      margin: '0 auto',
      marginTop: 40,
      cursor: 'pointer'
    }
  }));

  const classes = useStyles();

  const [pictures, setPictures] = useState('');
  const [address, setAddress] = useState('');
  const [leader, setLeader] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');


  const tourRegister = () => {
    const isPrevTourExist = JSON.parse(localStorage.getItem('myTours'))
    if (isPrevTourExist) {
      const newData = {
        'address': address,
        'leader': leader,
        'date': date,
        'description': description
      }
      console.log(isPrevTourExist)
      isPrevTourExist.push(newData)
      localStorage.setItem('myTours', JSON.stringify(isPrevTourExist))
    } else {
      const newData = [{
        'address': address,
        'leader': leader,
        'date': date,
        'description': description
      }]
      localStorage.setItem('myTours', [JSON.stringify(newData)])
    }
    props.history.push({ pathname: './home' })
  }

  return (
    <ThemeProvider theme={theme}>

      <div className={classes.root} dir='rtl' style={{ marginTop: 60 }}>
        <Grid container spacing={3}>
          <Paper className={classes.paper} style={{ margin: '0 auto' }}>
            <Grid item xs={12}  >
              <form noValidate autoComplete="off" dir={'rtl'} style={{ display: "flex" }}>
                <input style={{ height: 40 }} placeHolder="مکان تور" type='text' dir='rtl' value={address} onChange={(e) => setAddress(e.target.value)} />
                <input style={{ height: 40, marginRight: 40 }} placeHolder="نام لیدر" type='text' value={leader} onChange={(e) => setLeader(e.target.value)} />
                <InputMask style={{ height: 40, marginRight: 40 }} mask="99/99/9999" value={date} onChange={(e) => setDate(e.target.value)}>{() =>
                  <input style={{ marginRight: 40 }} placeHolder="تاریخ برگزاری" label="تاریخ بر" />
                }
                </InputMask>
                <textarea style={{ height: 40, marginRight: 40 }} type='text' placeHolder="توضیحات تور" multiline rows={4} label="نام لیدر" value={description} onChange={(e) => setDescription(e.target.value)} />
              </form>

            </Grid>
            <Grid item xs={12} style={{ marginTop: 40 }}>
              <ImageUploader
                withIcon={true}
                withLabel={false}
                buttonText='انتخاب عکس'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
                singleImage={true}
              />
            </Grid>
          </Paper>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 50 }}>
          <div onClick={tourRegister} style={{ width: '20%', padding: '5px 20px', backgroundColor: "#3c8bfa", textAlign: 'center', color: '#fff', borderRadius: 10, cursor: 'pointer' }}>
            ثبت تور
          </div>

        </div>
      </div >
    </ThemeProvider>
  );
}

export default Upload;
