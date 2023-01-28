// //import type { RemoveIndex } from "~/utils/types";
// import dotenv from "dotenv";

// export type RemoveIndex<T> = {
//     [K in keyof T as string extends K
//         ? never
//         : number extends K
//         ? never
//         : K]: T[K];
// };

// // const result = dotenv.config();
// // if (result.error) {
// //     throw result.error;
// // }

// process.env

// export function getServerSafeEnvVariable<
//     K extends keyof RemoveIndex<NodeJS.ProcessEnv>
// >(key: K): Exclude<NodeJS.ProcessEnv[K], undefined> {
//     try {
//         const val/*?+*/: any = process.env[key/*?+*/];
//         if (!val) {
//             throw Error(`Missing env variable: ${key}`);
//         }
//         return val;
//     } catch (_) {
//         throw Error(
//             "You tried to access a server-side environment variable on the client!"
//         );
//     }
// }

// getServerSafeEnvVariable("COSMODB_ENDPOINT") /*?+*/