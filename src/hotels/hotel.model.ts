// // export interface Amenity {
// //   id: number;
// //   guestRoom: number;
// //   bedRoom?: number;
// //   wifiAvailability?: boolean;
// //   parkingAvailability?: boolean;
// //   poolAvailability?: boolean;
// //   airCondition?: boolean;
// //   extraBedFacility?: boolean;
// // }

// // export interface Image {
// //   id: number;
// //   url: string;
// //   thumb_url: string;
// // }

// // export interface Location {
// //   id: number;
// //   lat: number;
// //   lng: number;
// //   formattedAddress: string;
// //   zipcode: string;
// //   city: string;
// //   state_long: string;
// //   state_short: string;
// //   country_long: string;
// //   country_short: string;
// // }

// // export interface Gallery {
// //   id: number;
// //   url: string;
// // }

// // export interface Image2 {
// //   id: number;
// //   url: string;
// // }

// // export interface Category {
// //   id: number;
// //   slug: string;
// //   name: string;
// //   image: Image2;
// // }

// // export interface Hotel {
// //   id: number;
// //   agentId: number;
// //   title: string;
// //   slug: string;
// //   content: string;
// //   status: string;
// //   price: string;
// //   isNegotiable: boolean;
// //   propertyType: string;
// //   condition: string;
// //   rating: number;
// //   ratingCount: number;
// //   contactNumber: string;
// //   termsAndCondition: string;
// //   amenities: Amenity[];
// //   image: Image;
// //   location: Location;
// //   gallery: Gallery[];
// //   categories: Category[];
// // }
// export interface Hotel {
//   id: number;
//   agentId: number;
//   title: string;
//   slug: string;
//   content: string;
//   status: string;
//   price: string;
//   isNegotiable: boolean;
//   propertyType: string;
//   condition: string;
//   rating: number;
//   ratingCount: number;
//   contactNumber: string;
//   termsAndCondition: string;
//   amenities?: AmenitiesEntity[] | null;
//   image: Image;
//   location: Location;
//   gallery?: GalleryEntityOrImage[] | null;
//   categories?: CategoriesEntity[] | null;
// }
// export interface AmenitiesEntity {
//   id: number;
//   guestRoom?: number | null;
//   bedRoom?: number | null;
//   wifiAvailability?: boolean | null;
//   parkingAvailability?: boolean | null;
//   poolAvailability?: boolean | null;
//   airCondition?: boolean | null;
//   extraBedFacility?: boolean | null;
// }
// export interface Image {
//   id: number;
//   url: string;
//   thumb_url: string;
// }
// export interface Location {
//   id: number;
//   lat: number;
//   lng: number;
//   formattedAddress: string;
//   zipcode: string;
//   city: string;
//   state_long: string;
//   state_short: string;
//   country_long: string;
//   country_short: string;
// }
// export interface GalleryEntityOrImage {
//   id: number;
//   url: string;
// }
// export interface CategoriesEntity {
//   id: number;
//   slug: string;
//   name: string;
//   image: GalleryEntityOrImage;
// }
