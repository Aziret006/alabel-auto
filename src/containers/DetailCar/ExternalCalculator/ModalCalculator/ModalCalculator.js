import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import axiosApi from "../../../../axiosApi";

const useStyles = makeStyles()((theme) => ({
  modal: {
    boxSizing: "border-box",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    background: "#fff",
    padding: "60px",
    borderRadius: "5px",
    maxHeight: "960px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: "#ded5d5",
      borderRadius: "5px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#F47721",
      borderRadius: "5px",
    },
    [theme.breakpoints.down("xl")]: {
      padding: "30px 26px",
    },
    [theme.breakpoints.down("md")]: {
      width: "96%",
      padding: "20px 16px",
    },
  },
  mainInput: {
    "& input": {
      borderRadius: "3px",
    },
  },
  mainSelect: {
    color: "#231F1E",
    borderRadius: "3px",
  },
  close: {
    position: "absolute",
    right: "60px",
    top: "55px",
    [theme.breakpoints.down("xl")]: {
      top: "26px",
      right: "26px",
    },
    [theme.breakpoints.down("md")]: {
      top: "10px",
      right: "10px",
    },
  },
}));

const ModalCalculator = (props) => {
  const { classes } = useStyles();
  const [calculator, setCalculator] = useState({
    auctions: [],
    locations: [],
    body: [],
    ports: [],
    countries: [],
    fromPorts: [],
    total: props.calculatorCar.total,
    service_auto_canada: props.calculatorCar.service_auto_canada,
    car_cost: props.calculatorCar.car_price,
    auction_fee: props.calculatorCar.auction_fee,
    canada_sales_tax: props.calculatorCar.canada_sales_tax || 0,
    transportation: props.calculatorCar.transportation,
    container_insurance: 0,
    last_insurance: 0,
  });
  const [calculateData, setCalculateData] = useState({
    auction: props.auction,
    city: props.city,
    port_canada: "",
    port_destination: 1,
    country_destination: 1,
    body: 1,
    price: "",
  });
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setCalculateData((prev) => ({
      ...prev,
      price: props.currentBid,
    }));
  }, [props.currentBid]);

  useEffect(() => {
    const getCalculatorData = async () => {
      try {
        const auctions = await axiosApi("/car/auction_list/");
        const body = await axiosApi("/car/body_for_calculator/");
        const countries = await axiosApi("/car/country_destination/");
        const ports = await axiosApi("/car/port_destination/");
        const locations = await axiosApi(
          `/car/city_list/?auction=${props.auction}`
        );

        setCalculator((prev) => ({
          ...prev,
          auctions: auctions?.data || [],
          body: body?.data || [],
          countries: countries?.data || [],
          ports: ports?.data || [],
          locations: locations?.data || [],
        }));
      } catch {}
    };

    getCalculatorData().catch();
  }, [props.auction]);

  useEffect(() => {
    const calculate = async (dataCalculator) => {
      try {
        setLoader(true);
        const { data } = await axiosApi.post(
          "/car/calculator/",
          dataCalculator
        );

        if (data) {
          setCalculator((prev) => ({
            ...prev,
            total: data.total || 0,
            service_auto_canada: data.service_auto_canada || 0,
            car_cost: data.car_price,
            auction_fee: data.auction_fee,
            transportation: data.transportation,
            canada_sales_tax: data.canada_sales_tax || 0,
            last_insurance: data.container_insurance,
          }));
        }
        setLoader(false);
      } catch {
        setLoader(false);
      }
    };

    if (
      calculateData.body &&
      calculateData.port_canada &&
      calculateData.port_destination &&
      calculateData.country_destination &&
      calculateData.price
    ) {
      calculate(calculateData).catch();
    }
  }, [calculateData]);

  const getPorts = useCallback(async () => {
    const zipCode = calculator.locations.filter(
      (item) => item.id === calculateData.city
    )[0].zip_code;

    try {
      const { data } = await axiosApi(
        `/car/port_delivery_list/?auction=${props.auction}&zip_code=${zipCode}&location=${props.city}&body=${calculateData.body}`
      );

      if (data?.length !== 0) {
        setCalculator((prev) => ({
          ...prev,
          fromPorts: data,
        }));

        setCalculateData((prev) => ({
          ...prev,
          port_canada: data[0].id || "",
        }));
      }
    } catch {}
  }, [
    calculator.locations,
    calculateData.city,
    props.auction,
    calculateData.body,
    props.city,
  ]);

  useEffect(() => {
    if (calculator.locations.length !== 0) {
      getPorts().catch();
    }
  }, [calculator.locations, getPorts]);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setCalculateData((prev) => ({ ...prev, [name]: value }));
  };

  const changeSwitch = () => {
    if (calculator.container_insurance === 0) {
      setCalculator((prev) => ({
        ...prev,
        container_insurance: prev.last_insurance,
      }));
    } else {
      setCalculator((prev) => ({ ...prev, container_insurance: 0 }));
    }
  };

  return (
    <Modal open={props.modal} onClose={props.handlerModal}>
      <Box component="form" className={classes.modal}>
        <IconButton className={classes.close} onClick={props.handlerModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30px"
            fill="none"
          >
            <path
              fill="#231F1E"
              d="M1.042 28.958c.416.417.833.625 1.458.625s1.042-.208 1.458-.625L15 17.917 26.04 28.958c.417.417 1.042.625 1.459.625.416 0 1.041-.208 1.458-.625.834-.833.834-2.083 0-2.916L17.917 15 28.957 3.958c.834-.833.834-2.083 0-2.916-.833-.834-2.083-.834-2.916 0L15 12.083 3.958 1.042c-.833-.834-2.083-.834-2.917 0-.833.833-.833 2.083 0 2.916L12.084 15 1.041 26.042c-.833.833-.833 2.083 0 2.916Z"
            />
          </svg>
        </IconButton>
        <Typography
          variant="h3"
          fontWeight="500"
          textTransform="uppercase"
          sx={{
            fontSize: { xs: "24px", md: "38px", xl: "46px" },
            marginBottom: { md: "0", xl: "10px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          calculator
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          fontSize="18px"
          sx={{ gap: { xs: "0", xl: "30px" } }}
        >
          <Grid
            item
            xs={12}
            xl={7}
            container
            sx={{
              height: { xs: "216px", md: "auto" },
              mt: { xs: "16px", md: "30px" },
              px: { xs: "12px", md: "0" },
              overflow: "auto",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                marginY: { xs: "14px", xl: "20px" },
                pr: { xs: "0", md: "18px" },
              }}
            >
              <FormControl fullWidth color="orange">
                <InputLabel
                  id="select-label"
                  sx={{ fontSize: "16px" }}
                  color="orange"
                >
                  Choose an auction
                </InputLabel>
                <Select
                  fullWidth
                  disabled
                  className={classes.mainSelect}
                  labelId="select-label"
                  id="simple-select"
                  value={calculateData.auction}
                  name="auction"
                  label="Choose an auction"
                >
                  {calculator.auctions?.length !== 0 ? (
                    calculator.auctions.map((auction) => (
                      <MenuItem key={`auction${auction.id}`} value={auction.id}>
                        {auction.title}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">---</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ marginY: { xs: "14px", xl: "20px" } }}
            >
              <FormControl fullWidth color="orange">
                <InputLabel
                  id="body-label"
                  sx={{ fontSize: "16px" }}
                  color="orange"
                >
                  Body
                </InputLabel>
                <Select
                  className={classes.mainSelect}
                  labelId="body-label"
                  id="body"
                  value={calculateData.body}
                  name="body"
                  label="Body"
                  onChange={changeHandler}
                >
                  {calculator.body?.length !== 0 ? (
                    calculator.body.map((body) => (
                      <MenuItem key={`body${body.id}`} value={body.id}>
                        {body.title}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">---</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ marginY: { xs: "14px", xl: "20px" } }}>
              <FormControl fullWidth color="orange">
                <InputLabel
                  id="location-label"
                  sx={{ fontSize: "16px" }}
                  color="orange"
                >
                  Location
                </InputLabel>
                <Select
                  disabled
                  className={classes.mainSelect}
                  labelId="location-label"
                  id="location"
                  value={calculateData.city}
                  name="city"
                  label="Location"
                >
                  {calculator.locations?.length !== 0 ? (
                    calculator.locations.map((location) => (
                      <MenuItem
                        key={`location${location.id}`}
                        value={location.id}
                      >
                        {location.location}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">---</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                marginY: { xs: "14px", xl: "20px" },
                pr: { xs: "0", md: "18px" },
              }}
            >
              <TextField
                className={classes.mainInput}
                label="Car price in Canada/USA"
                type="number"
                fullWidth
                color="orange"
                name="price"
                value={calculateData.price}
                onChange={changeHandler}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ marginY: { xs: "14px", xl: "20px" } }}
            >
              <FormControl fullWidth color="orange">
                <InputLabel
                  id="Shippingfromtheport-label"
                  sx={{ fontSize: "16px" }}
                  color="orange"
                >
                  Shipping from the port
                </InputLabel>
                <Select
                  className={classes.mainSelect}
                  labelId="Shippingfromtheport-label"
                  id="Shippingfromtheport"
                  value={calculateData.port_canada}
                  name="port_canada"
                  label="Shipping from the port"
                  onChange={changeHandler}
                >
                  {calculator.fromPorts?.length !== 0 ? (
                    calculator.fromPorts.map((port) => (
                      <MenuItem key={`fromPort${port.id}`} value={port.id}>
                        {port.title}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">---</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                marginY: { xs: "14px", xl: "20px" },
                pr: { xs: "0", md: "18px" },
              }}
            >
              <FormControl fullWidth color="orange">
                <InputLabel
                  id="Destination-label"
                  sx={{ fontSize: "16px" }}
                  color="orange"
                >
                  Destination country
                </InputLabel>
                <Select
                  className={classes.mainSelect}
                  labelId="Destination-label"
                  id="Destination"
                  value={calculateData.country_destination}
                  name="country_destination"
                  label="Destination country"
                  onChange={changeHandler}
                >
                  {calculator.countries?.length !== 0 ? (
                    calculator.countries.map((country) => (
                      <MenuItem key={`country${country.id}`} value={country.id}>
                        {country.title}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">---</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ marginY: { xs: "14px", xl: "20px" } }}
            >
              <FormControl fullWidth color="orange">
                <InputLabel
                  id="Port-label"
                  sx={{ fontSize: "16px" }}
                  color="orange"
                >
                  Port of destination
                </InputLabel>
                <Select
                  className={classes.mainSelect}
                  labelId="Port-label"
                  id="Port"
                  value={calculateData.port_destination}
                  name="port_destination"
                  label="Port of destination"
                  onChange={changeHandler}
                >
                  {calculator.ports?.length !== 0 ? (
                    calculator.ports.map((port) => (
                      <MenuItem key={`port${port.id}`} value={port.id}>
                        {port.title}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">---</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} xl={4} container>
            <Grid
              item
              xs={12}
              fontWeight="500"
              sx={{
                borderRadius: "3px",
                margin: { xs: "14px 0 0", xl: "20px 0 0" },
                p: { xs: "2px 7px", md: "10px 7px" },
              }}
            >
              <Typography
                borderBottom="2px solid #F47721"
                sx={{ fontSize: { xs: "18px", lx: "22px", xl: "24px" } }}
              >
                Purchase and delivery
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              fontWeight="500"
              sx={{
                borderRadius: "3px",
                p: { xs: "2px 7px", md: "10px 7px" },
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  color="#636262"
                  sx={{ fontSize: { xs: "16px", lx: "18px", xl: "20px" } }}
                >
                  Car cost
                </Typography>
                <Typography
                  color="#F47721"
                  sx={{ fontSize: { xs: "18px", lx: "20px", xl: "22px" } }}
                >
                  {loader ? (
                    <CircularProgress color="orange" size={16} />
                  ) : (
                    `$ ${calculator.car_cost}`
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              fontWeight="500"
              sx={{
                borderRadius: "3px",
                p: { xs: "2px 7px", md: "10px 7px" },
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  color="#636262"
                  sx={{ fontSize: { xs: "16px", lx: "18px", xl: "20px" } }}
                >
                  Auction fee
                </Typography>
                <Typography
                  color="#F47721"
                  sx={{ fontSize: { xs: "18px", lx: "20px", xl: "22px" } }}
                >
                  {loader ? (
                    <CircularProgress color="orange" size={16} />
                  ) : (
                    `$ ${calculator.auction_fee}`
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              fontWeight="500"
              sx={{
                borderRadius: "3px",
                p: { xs: "2px 7px", md: "10px 7px" },
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  color="#636262"
                  sx={{ fontSize: { xs: "16px", lx: "18px", xl: "20px" } }}
                >
                  Transportation within Canada
                </Typography>
                <Typography
                  color="#F47721"
                  sx={{ fontSize: { xs: "18px", lx: "20px", xl: "22px" } }}
                >
                  {loader ? (
                    <CircularProgress color="orange" size={16} />
                  ) : (
                    `$ ${calculator.transportation}`
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              fontWeight="500"
              sx={{
                borderRadius: "3px",
                p: { xs: "2px 7px", md: "10px 7px" },
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  color="#636262"
                  sx={{ fontSize: { xs: "16px", lx: "18px", xl: "20px" } }}
                >
                  The cost of our services
                </Typography>
                <Typography
                  color="#F47721"
                  sx={{ fontSize: { xs: "18px", lx: "20px", xl: "22px" } }}
                >
                  {loader ? (
                    <CircularProgress color="orange" size={16} />
                  ) : (
                    `$ ${calculator.service_auto_canada}`
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              fontWeight="500"
              sx={{
                borderRadius: "3px",
                p: { xs: "2px 7px", md: "10px 7px" },
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  color="#636262"
                  sx={{ fontSize: { xs: "16px", lx: "18px", xl: "20px" } }}
                >
                  Sales Tax
                </Typography>
                <Typography
                  color="#F47721"
                  sx={{ fontSize: { xs: "18px", lx: "20px", xl: "22px" } }}
                >
                  {loader ? (
                    <CircularProgress color="orange" size={16} />
                  ) : (
                    `$ ${calculator.canada_sales_tax}`
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              fontWeight="500"
              sx={{
                borderRadius: "3px",
                p: { xs: "2px 7px", md: "10px 7px" },
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  color="#636262"
                  sx={{ fontSize: { xs: "16px", lx: "18px", xl: "20px" } }}
                >
                  <FormControlLabel
                    sx={{
                      display: "block",
                    }}
                    control={
                      <Switch
                        checked={calculator.container_insurance !== 0}
                        onChange={changeSwitch}
                        name="switch"
                        color="orange"
                      />
                    }
                    label="SEC (1.5%)**"
                  />
                </Typography>
                <Typography
                  color="#F47721"
                  sx={{ fontSize: { xs: "18px", lx: "20px", xl: "22px" } }}
                >
                  {loader ? (
                    <CircularProgress color="orange" size={16} />
                  ) : (
                    `$ ${calculator.container_insurance}`
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              fontWeight="500"
              sx={{
                borderRadius: "3px",
                p: { xs: "2px 7px", md: "10px 7px" },
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  fontWeight="500"
                  sx={{ fontSize: { xs: "16px", lx: "18px", xl: "20px" } }}
                >
                  Total amount
                </Typography>
                <Typography
                  color="#F47721"
                  sx={{ fontSize: { xs: "18px", lx: "20px", xl: "22px" } }}
                >
                  {loader ? (
                    <CircularProgress color="orange" size={16} />
                  ) : (
                    `$ ${
                      calculator.container_insurance
                        ? calculator.container_insurance + calculator.total
                        : calculator.total
                    }`
                  )}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalCalculator;
