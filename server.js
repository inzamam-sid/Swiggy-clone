// // import express from "express";
// // import cors from "cors";
// // import fetch from "node-fetch"; // Use 'import' instead of 'require'

// // const app = express();
// // app.use(cors());

// // app.get("/api/restaurants", async (req, res) => {
// //     try {
// //         const response = await fetch(
// //             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// //         );
// //         const data = await response.json();
// //         res.json(data);
// //     } catch (error) {
// //         res.status(500).json({ error: "Failed to fetch data" });
// //     }
// // });

// //app.listen(5000, () => console.log("Server running on port 5000"));






// // app.get("/api/restaurants", async (req, res) => {
// //     try {
// //         const response = await fetch(
// //             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// //         );

// //         if (!response.ok) {
// //             throw new Error(`Swiggy API error: ${response.status} ${response.statusText}`);
// //         }

// //         const data = await response.json();
// //         res.json(data);
// //     } catch (error) {
// //         console.error("Backend Fetch Error:", error.message);
// //         res.status(500).json({ error: "Failed to fetch data", details: error.message });
// //     }
// // });



// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";

// const app = express();
// app.use(cors());

// app.get("/api/restaurants", async (req, res) => {
//     try {
//         const response = await fetch(
//             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
//             {
//                 method: "GET",
//                 headers: {
//                     "User-Agent":
//                         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
//                     "Accept": "application/json",
//                     "Referer": "https://www.swiggy.com/",
//                     "Origin": "https://www.swiggy.com/",
//                 },
//             }
//         );

//         if (!response.ok) {
//             throw new Error(`Swiggy API error: ${response.status} ${response.statusText}`);
//         }

//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error("Backend Fetch Error:", error.message);
//         res.status(500).json({ error: "Failed to fetch data", details: error.message });
//     }
// });

// app.listen(5000, () => console.log("✅ Server running on port 5000"));
