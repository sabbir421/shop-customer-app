import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Rating,
  Container,
} from "@mui/material";
import bra1 from "../img/bra.jpg";
import bra2 from "../img/bra2.webp";
import bra3 from "../img/bra3.jpg";
import heroImage from "../img/hero1.webp";

export default function Home() {
  const products = [
    {
      id: 1,
      image: bra1,
      name: "Comfortable Bra",
      price: "$19.99",
      rating: 4,
      description: "Like a cozy hug for your curves—comfy and supportive!",
      affiliateLink: "https://www.amazon.com/your-affiliate-link-1",
    },
    {
      id: 2,
      image: bra2,
      name: "Sporty Bra",
      price: "$24.99",
      rating: 4.5,
      description:
        "Perfect for workouts and Netflix marathons. We don’t judge!",
      affiliateLink: "https://www.amazon.com/your-affiliate-link-2",
    },
    {
      id: 3,
      image: bra3,
      name: "Lace Bra",
      price: "$29.99",
      rating: 5,
      description: "Lace it up! Fancy enough to make you feel like royalty.",
      affiliateLink: "https://www.amazon.com/your-affiliate-link-3",
    },
    {
      id: 4,
      image: bra1,
      name: "Comfortable Bra",
      price: "$19.99",
      rating: 4,
      description: "Because your comfort is non-negotiable!",
      affiliateLink: "https://www.amazon.com/your-affiliate-link-1",
    },
    {
      id: 5,
      image: bra2,
      name: "Sporty Bra",
      price: "$24.99",
      rating: 4.5,
      description:
        "Good for your morning jog or your morning snooze. We won’t tell.",
      affiliateLink: "https://www.amazon.com/your-affiliate-link-2",
    },
    {
      id: 6,
      image: bra3,
      name: "Lace Bra",
      price: "$29.99",
      rating: 5,
      description: "Luxury lingerie that feels as good as it looks.",
      affiliateLink: "https://www.amazon.com/your-affiliate-link-3",
    },
  ];

  return (
    <Box>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bra-tastic Store
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
  sx={{
    height: { xs: "50vh", sm: "60vh", md: "70vh", lg: "80vh" }, // Different heights for various screen sizes
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    backgroundImage: `url(${heroImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center", // Center text on smaller screens
    paddingX: { xs: 2, sm: 3, md: 5 }, // Add padding to make text readable on smaller screens
  }}
>
  <Typography
    variant="h2"
    align="center"
    sx={{
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: { xs: 1, sm: 2 },
      fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" }, // Font size scales with screen size
    }}
  >
    Find Your Perfect Fit, Without the Drama
  </Typography>
  <Typography
    variant="h6"
    align="center"
    sx={{
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: { xs: 1, sm: 2 },
      marginTop: 2,
      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1.75rem" }, // Adjust font size for subtitle
    }}
  >
    Because life's too short for uncomfortable bras!
  </Typography>
</Box>


      {/* Product Cards Section */}
      <Container sx={{ paddingY: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ maxWidth: 345, margin: "0 auto", boxShadow: 3 }}>
                <CardMedia>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    style={{ objectFit: "cover", borderRadius: "4px" }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {product.price}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={product.rating}
                    readOnly
                    sx={{ marginY: 1 }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                    sx={{ fontStyle: "italic" }}
                  >
                    {product.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ marginTop: 2 }}
                  >
                    Buy Now on Amazon
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          padding: 3,
          textAlign: "center",
          marginTop: "auto",
        }}
      >
        <Typography variant="body1">
          &copy; 2024 Bra-tastic Store. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Need support? (The customer service kind, not the bra kind 😉){" "}
          <a
            href="mailto:support@brastore.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            Contact Us
          </a>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Follow us on{" "}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
            Twitter
          </a>{" "}
          |{" "}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
            Facebook
          </a>{" "}
          for more "uplifting" content!
        </Typography>
      </Box>
    </Box>
  );
}
