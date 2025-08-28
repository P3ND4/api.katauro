
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model GenericProduct
 * 
 */
export type GenericProduct = $Result.DefaultSelection<Prisma.$GenericProductPayload>
/**
 * Model Categorie
 * 
 */
export type Categorie = $Result.DefaultSelection<Prisma.$CategoriePayload>
/**
 * Model Details
 * 
 */
export type Details = $Result.DefaultSelection<Prisma.$DetailsPayload>
/**
 * Model SpecificProduct
 * 
 */
export type SpecificProduct = $Result.DefaultSelection<Prisma.$SpecificProductPayload>
/**
 * Model Images
 * 
 */
export type Images = $Result.DefaultSelection<Prisma.$ImagesPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model ProductForOrder
 * 
 */
export type ProductForOrder = $Result.DefaultSelection<Prisma.$ProductForOrderPayload>
/**
 * Model Promotion
 * 
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model ProductForPromotion
 * 
 */
export type ProductForPromotion = $Result.DefaultSelection<Prisma.$ProductForPromotionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genericProduct`: Exposes CRUD operations for the **GenericProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GenericProducts
    * const genericProducts = await prisma.genericProduct.findMany()
    * ```
    */
  get genericProduct(): Prisma.GenericProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorie`: Exposes CRUD operations for the **Categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.CategorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.details`: Exposes CRUD operations for the **Details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Details
    * const details = await prisma.details.findMany()
    * ```
    */
  get details(): Prisma.DetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specificProduct`: Exposes CRUD operations for the **SpecificProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpecificProducts
    * const specificProducts = await prisma.specificProduct.findMany()
    * ```
    */
  get specificProduct(): Prisma.SpecificProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.images`: Exposes CRUD operations for the **Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.ImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productForOrder`: Exposes CRUD operations for the **ProductForOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductForOrders
    * const productForOrders = await prisma.productForOrder.findMany()
    * ```
    */
  get productForOrder(): Prisma.ProductForOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productForPromotion`: Exposes CRUD operations for the **ProductForPromotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductForPromotions
    * const productForPromotions = await prisma.productForPromotion.findMany()
    * ```
    */
  get productForPromotion(): Prisma.ProductForPromotionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    GenericProduct: 'GenericProduct',
    Categorie: 'Categorie',
    Details: 'Details',
    SpecificProduct: 'SpecificProduct',
    Images: 'Images',
    Order: 'Order',
    ProductForOrder: 'ProductForOrder',
    Promotion: 'Promotion',
    ProductForPromotion: 'ProductForPromotion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "genericProduct" | "categorie" | "details" | "specificProduct" | "images" | "order" | "productForOrder" | "promotion" | "productForPromotion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      GenericProduct: {
        payload: Prisma.$GenericProductPayload<ExtArgs>
        fields: Prisma.GenericProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenericProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenericProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenericProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenericProductPayload>
          }
          findFirst: {
            args: Prisma.GenericProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenericProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenericProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenericProductPayload>
          }
          findMany: {
            args: Prisma.GenericProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenericProductPayload>[]
          }
          create: {
            args: Prisma.GenericProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenericProductPayload>
          }
          createMany: {
            args: Prisma.GenericProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GenericProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenericProductPayload>
          }
          update: {
            args: Prisma.GenericProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenericProductPayload>
          }
          deleteMany: {
            args: Prisma.GenericProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenericProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GenericProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenericProductPayload>
          }
          aggregate: {
            args: Prisma.GenericProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenericProduct>
          }
          groupBy: {
            args: Prisma.GenericProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenericProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenericProductCountArgs<ExtArgs>
            result: $Utils.Optional<GenericProductCountAggregateOutputType> | number
          }
        }
      }
      Categorie: {
        payload: Prisma.$CategoriePayload<ExtArgs>
        fields: Prisma.CategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findFirst: {
            args: Prisma.CategorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findMany: {
            args: Prisma.CategorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          create: {
            args: Prisma.CategorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          createMany: {
            args: Prisma.CategorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          update: {
            args: Prisma.CategorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          deleteMany: {
            args: Prisma.CategorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          aggregate: {
            args: Prisma.CategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorie>
          }
          groupBy: {
            args: Prisma.CategorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorieCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieCountAggregateOutputType> | number
          }
        }
      }
      Details: {
        payload: Prisma.$DetailsPayload<ExtArgs>
        fields: Prisma.DetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>
          }
          findFirst: {
            args: Prisma.DetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>
          }
          findMany: {
            args: Prisma.DetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>[]
          }
          create: {
            args: Prisma.DetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>
          }
          createMany: {
            args: Prisma.DetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>
          }
          update: {
            args: Prisma.DetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>
          }
          deleteMany: {
            args: Prisma.DetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailsPayload>
          }
          aggregate: {
            args: Prisma.DetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetails>
          }
          groupBy: {
            args: Prisma.DetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailsCountArgs<ExtArgs>
            result: $Utils.Optional<DetailsCountAggregateOutputType> | number
          }
        }
      }
      SpecificProduct: {
        payload: Prisma.$SpecificProductPayload<ExtArgs>
        fields: Prisma.SpecificProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecificProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecificProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecificProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecificProductPayload>
          }
          findFirst: {
            args: Prisma.SpecificProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecificProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecificProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecificProductPayload>
          }
          findMany: {
            args: Prisma.SpecificProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecificProductPayload>[]
          }
          create: {
            args: Prisma.SpecificProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecificProductPayload>
          }
          createMany: {
            args: Prisma.SpecificProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SpecificProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecificProductPayload>
          }
          update: {
            args: Prisma.SpecificProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecificProductPayload>
          }
          deleteMany: {
            args: Prisma.SpecificProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecificProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpecificProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecificProductPayload>
          }
          aggregate: {
            args: Prisma.SpecificProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecificProduct>
          }
          groupBy: {
            args: Prisma.SpecificProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecificProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecificProductCountArgs<ExtArgs>
            result: $Utils.Optional<SpecificProductCountAggregateOutputType> | number
          }
        }
      }
      Images: {
        payload: Prisma.$ImagesPayload<ExtArgs>
        fields: Prisma.ImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findFirst: {
            args: Prisma.ImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findMany: {
            args: Prisma.ImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          create: {
            args: Prisma.ImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          createMany: {
            args: Prisma.ImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          update: {
            args: Prisma.ImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          deleteMany: {
            args: Prisma.ImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.ImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      ProductForOrder: {
        payload: Prisma.$ProductForOrderPayload<ExtArgs>
        fields: Prisma.ProductForOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductForOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductForOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForOrderPayload>
          }
          findFirst: {
            args: Prisma.ProductForOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductForOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForOrderPayload>
          }
          findMany: {
            args: Prisma.ProductForOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForOrderPayload>[]
          }
          create: {
            args: Prisma.ProductForOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForOrderPayload>
          }
          createMany: {
            args: Prisma.ProductForOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductForOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForOrderPayload>
          }
          update: {
            args: Prisma.ProductForOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForOrderPayload>
          }
          deleteMany: {
            args: Prisma.ProductForOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductForOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductForOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForOrderPayload>
          }
          aggregate: {
            args: Prisma.ProductForOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductForOrder>
          }
          groupBy: {
            args: Prisma.ProductForOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductForOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductForOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ProductForOrderCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      ProductForPromotion: {
        payload: Prisma.$ProductForPromotionPayload<ExtArgs>
        fields: Prisma.ProductForPromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductForPromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForPromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductForPromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForPromotionPayload>
          }
          findFirst: {
            args: Prisma.ProductForPromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForPromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductForPromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForPromotionPayload>
          }
          findMany: {
            args: Prisma.ProductForPromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForPromotionPayload>[]
          }
          create: {
            args: Prisma.ProductForPromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForPromotionPayload>
          }
          createMany: {
            args: Prisma.ProductForPromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductForPromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForPromotionPayload>
          }
          update: {
            args: Prisma.ProductForPromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForPromotionPayload>
          }
          deleteMany: {
            args: Prisma.ProductForPromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductForPromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductForPromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductForPromotionPayload>
          }
          aggregate: {
            args: Prisma.ProductForPromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductForPromotion>
          }
          groupBy: {
            args: Prisma.ProductForPromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductForPromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductForPromotionCountArgs<ExtArgs>
            result: $Utils.Optional<ProductForPromotionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    genericProduct?: GenericProductOmit
    categorie?: CategorieOmit
    details?: DetailsOmit
    specificProduct?: SpecificProductOmit
    images?: ImagesOmit
    order?: OrderOmit
    productForOrder?: ProductForOrderOmit
    promotion?: PromotionOmit
    productForPromotion?: ProductForPromotionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type GenericProductCountOutputType
   */

  export type GenericProductCountOutputType = {
    variants: number
    details: number
  }

  export type GenericProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | GenericProductCountOutputTypeCountVariantsArgs
    details?: boolean | GenericProductCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * GenericProductCountOutputType without action
   */
  export type GenericProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenericProductCountOutputType
     */
    select?: GenericProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenericProductCountOutputType without action
   */
  export type GenericProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecificProductWhereInput
  }

  /**
   * GenericProductCountOutputType without action
   */
  export type GenericProductCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailsWhereInput
  }


  /**
   * Count Type CategorieCountOutputType
   */

  export type CategorieCountOutputType = {
    productos: number
  }

  export type CategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategorieCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieCountOutputType
     */
    select?: CategorieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenericProductWhereInput
  }


  /**
   * Count Type SpecificProductCountOutputType
   */

  export type SpecificProductCountOutputType = {
    order: number
    promotions: number
    images: number
  }

  export type SpecificProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | SpecificProductCountOutputTypeCountOrderArgs
    promotions?: boolean | SpecificProductCountOutputTypeCountPromotionsArgs
    images?: boolean | SpecificProductCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * SpecificProductCountOutputType without action
   */
  export type SpecificProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificProductCountOutputType
     */
    select?: SpecificProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecificProductCountOutputType without action
   */
  export type SpecificProductCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductForOrderWhereInput
  }

  /**
   * SpecificProductCountOutputType without action
   */
  export type SpecificProductCountOutputTypeCountPromotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductForPromotionWhereInput
  }

  /**
   * SpecificProductCountOutputType without action
   */
  export type SpecificProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    products: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | OrderCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductForOrderWhereInput
  }


  /**
   * Count Type PromotionCountOutputType
   */

  export type PromotionCountOutputType = {
    products: number
  }

  export type PromotionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | PromotionCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * PromotionCountOutputType without action
   */
  export type PromotionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCountOutputType
     */
    select?: PromotionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromotionCountOutputType without action
   */
  export type PromotionCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductForPromotionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    image?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model GenericProduct
   */

  export type AggregateGenericProduct = {
    _count: GenericProductCountAggregateOutputType | null
    _min: GenericProductMinAggregateOutputType | null
    _max: GenericProductMaxAggregateOutputType | null
  }

  export type GenericProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    subtitle: string | null
    categorieId: string | null
  }

  export type GenericProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    subtitle: string | null
    categorieId: string | null
  }

  export type GenericProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    subtitle: number
    categorieId: number
    _all: number
  }


  export type GenericProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subtitle?: true
    categorieId?: true
  }

  export type GenericProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subtitle?: true
    categorieId?: true
  }

  export type GenericProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subtitle?: true
    categorieId?: true
    _all?: true
  }

  export type GenericProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenericProduct to aggregate.
     */
    where?: GenericProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenericProducts to fetch.
     */
    orderBy?: GenericProductOrderByWithRelationInput | GenericProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenericProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenericProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenericProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GenericProducts
    **/
    _count?: true | GenericProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenericProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenericProductMaxAggregateInputType
  }

  export type GetGenericProductAggregateType<T extends GenericProductAggregateArgs> = {
        [P in keyof T & keyof AggregateGenericProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenericProduct[P]>
      : GetScalarType<T[P], AggregateGenericProduct[P]>
  }




  export type GenericProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenericProductWhereInput
    orderBy?: GenericProductOrderByWithAggregationInput | GenericProductOrderByWithAggregationInput[]
    by: GenericProductScalarFieldEnum[] | GenericProductScalarFieldEnum
    having?: GenericProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenericProductCountAggregateInputType | true
    _min?: GenericProductMinAggregateInputType
    _max?: GenericProductMaxAggregateInputType
  }

  export type GenericProductGroupByOutputType = {
    id: string
    name: string
    description: string
    subtitle: string
    categorieId: string
    _count: GenericProductCountAggregateOutputType | null
    _min: GenericProductMinAggregateOutputType | null
    _max: GenericProductMaxAggregateOutputType | null
  }

  type GetGenericProductGroupByPayload<T extends GenericProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenericProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenericProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenericProductGroupByOutputType[P]>
            : GetScalarType<T[P], GenericProductGroupByOutputType[P]>
        }
      >
    >


  export type GenericProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    subtitle?: boolean
    categorieId?: boolean
    variants?: boolean | GenericProduct$variantsArgs<ExtArgs>
    details?: boolean | GenericProduct$detailsArgs<ExtArgs>
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    _count?: boolean | GenericProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genericProduct"]>



  export type GenericProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    subtitle?: boolean
    categorieId?: boolean
  }

  export type GenericProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "subtitle" | "categorieId", ExtArgs["result"]["genericProduct"]>
  export type GenericProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | GenericProduct$variantsArgs<ExtArgs>
    details?: boolean | GenericProduct$detailsArgs<ExtArgs>
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    _count?: boolean | GenericProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GenericProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GenericProduct"
    objects: {
      variants: Prisma.$SpecificProductPayload<ExtArgs>[]
      details: Prisma.$DetailsPayload<ExtArgs>[]
      categorie: Prisma.$CategoriePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      subtitle: string
      categorieId: string
    }, ExtArgs["result"]["genericProduct"]>
    composites: {}
  }

  type GenericProductGetPayload<S extends boolean | null | undefined | GenericProductDefaultArgs> = $Result.GetResult<Prisma.$GenericProductPayload, S>

  type GenericProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenericProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenericProductCountAggregateInputType | true
    }

  export interface GenericProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GenericProduct'], meta: { name: 'GenericProduct' } }
    /**
     * Find zero or one GenericProduct that matches the filter.
     * @param {GenericProductFindUniqueArgs} args - Arguments to find a GenericProduct
     * @example
     * // Get one GenericProduct
     * const genericProduct = await prisma.genericProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenericProductFindUniqueArgs>(args: SelectSubset<T, GenericProductFindUniqueArgs<ExtArgs>>): Prisma__GenericProductClient<$Result.GetResult<Prisma.$GenericProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GenericProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenericProductFindUniqueOrThrowArgs} args - Arguments to find a GenericProduct
     * @example
     * // Get one GenericProduct
     * const genericProduct = await prisma.genericProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenericProductFindUniqueOrThrowArgs>(args: SelectSubset<T, GenericProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenericProductClient<$Result.GetResult<Prisma.$GenericProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenericProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenericProductFindFirstArgs} args - Arguments to find a GenericProduct
     * @example
     * // Get one GenericProduct
     * const genericProduct = await prisma.genericProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenericProductFindFirstArgs>(args?: SelectSubset<T, GenericProductFindFirstArgs<ExtArgs>>): Prisma__GenericProductClient<$Result.GetResult<Prisma.$GenericProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenericProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenericProductFindFirstOrThrowArgs} args - Arguments to find a GenericProduct
     * @example
     * // Get one GenericProduct
     * const genericProduct = await prisma.genericProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenericProductFindFirstOrThrowArgs>(args?: SelectSubset<T, GenericProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenericProductClient<$Result.GetResult<Prisma.$GenericProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GenericProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenericProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GenericProducts
     * const genericProducts = await prisma.genericProduct.findMany()
     * 
     * // Get first 10 GenericProducts
     * const genericProducts = await prisma.genericProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genericProductWithIdOnly = await prisma.genericProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenericProductFindManyArgs>(args?: SelectSubset<T, GenericProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenericProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GenericProduct.
     * @param {GenericProductCreateArgs} args - Arguments to create a GenericProduct.
     * @example
     * // Create one GenericProduct
     * const GenericProduct = await prisma.genericProduct.create({
     *   data: {
     *     // ... data to create a GenericProduct
     *   }
     * })
     * 
     */
    create<T extends GenericProductCreateArgs>(args: SelectSubset<T, GenericProductCreateArgs<ExtArgs>>): Prisma__GenericProductClient<$Result.GetResult<Prisma.$GenericProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GenericProducts.
     * @param {GenericProductCreateManyArgs} args - Arguments to create many GenericProducts.
     * @example
     * // Create many GenericProducts
     * const genericProduct = await prisma.genericProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenericProductCreateManyArgs>(args?: SelectSubset<T, GenericProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GenericProduct.
     * @param {GenericProductDeleteArgs} args - Arguments to delete one GenericProduct.
     * @example
     * // Delete one GenericProduct
     * const GenericProduct = await prisma.genericProduct.delete({
     *   where: {
     *     // ... filter to delete one GenericProduct
     *   }
     * })
     * 
     */
    delete<T extends GenericProductDeleteArgs>(args: SelectSubset<T, GenericProductDeleteArgs<ExtArgs>>): Prisma__GenericProductClient<$Result.GetResult<Prisma.$GenericProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GenericProduct.
     * @param {GenericProductUpdateArgs} args - Arguments to update one GenericProduct.
     * @example
     * // Update one GenericProduct
     * const genericProduct = await prisma.genericProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenericProductUpdateArgs>(args: SelectSubset<T, GenericProductUpdateArgs<ExtArgs>>): Prisma__GenericProductClient<$Result.GetResult<Prisma.$GenericProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GenericProducts.
     * @param {GenericProductDeleteManyArgs} args - Arguments to filter GenericProducts to delete.
     * @example
     * // Delete a few GenericProducts
     * const { count } = await prisma.genericProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenericProductDeleteManyArgs>(args?: SelectSubset<T, GenericProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenericProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenericProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GenericProducts
     * const genericProduct = await prisma.genericProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenericProductUpdateManyArgs>(args: SelectSubset<T, GenericProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GenericProduct.
     * @param {GenericProductUpsertArgs} args - Arguments to update or create a GenericProduct.
     * @example
     * // Update or create a GenericProduct
     * const genericProduct = await prisma.genericProduct.upsert({
     *   create: {
     *     // ... data to create a GenericProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GenericProduct we want to update
     *   }
     * })
     */
    upsert<T extends GenericProductUpsertArgs>(args: SelectSubset<T, GenericProductUpsertArgs<ExtArgs>>): Prisma__GenericProductClient<$Result.GetResult<Prisma.$GenericProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GenericProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenericProductCountArgs} args - Arguments to filter GenericProducts to count.
     * @example
     * // Count the number of GenericProducts
     * const count = await prisma.genericProduct.count({
     *   where: {
     *     // ... the filter for the GenericProducts we want to count
     *   }
     * })
    **/
    count<T extends GenericProductCountArgs>(
      args?: Subset<T, GenericProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenericProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GenericProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenericProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenericProductAggregateArgs>(args: Subset<T, GenericProductAggregateArgs>): Prisma.PrismaPromise<GetGenericProductAggregateType<T>>

    /**
     * Group by GenericProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenericProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenericProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenericProductGroupByArgs['orderBy'] }
        : { orderBy?: GenericProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenericProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenericProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GenericProduct model
   */
  readonly fields: GenericProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GenericProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenericProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variants<T extends GenericProduct$variantsArgs<ExtArgs> = {}>(args?: Subset<T, GenericProduct$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecificProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    details<T extends GenericProduct$detailsArgs<ExtArgs> = {}>(args?: Subset<T, GenericProduct$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorie<T extends CategorieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategorieDefaultArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GenericProduct model
   */
  interface GenericProductFieldRefs {
    readonly id: FieldRef<"GenericProduct", 'String'>
    readonly name: FieldRef<"GenericProduct", 'String'>
    readonly description: FieldRef<"GenericProduct", 'String'>
    readonly subtitle: FieldRef<"GenericProduct", 'String'>
    readonly categorieId: FieldRef<"GenericProduct", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GenericProduct findUnique
   */
  export type GenericProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenericProduct
     */
    select?: GenericProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenericProduct
     */
    omit?: GenericProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenericProductInclude<ExtArgs> | null
    /**
     * Filter, which GenericProduct to fetch.
     */
    where: GenericProductWhereUniqueInput
  }

  /**
   * GenericProduct findUniqueOrThrow
   */
  export type GenericProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenericProduct
     */
    select?: GenericProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenericProduct
     */
    omit?: GenericProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenericProductInclude<ExtArgs> | null
    /**
     * Filter, which GenericProduct to fetch.
     */
    where: GenericProductWhereUniqueInput
  }

  /**
   * GenericProduct findFirst
   */
  export type GenericProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenericProduct
     */
    select?: GenericProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenericProduct
     */
    omit?: GenericProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenericProductInclude<ExtArgs> | null
    /**
     * Filter, which GenericProduct to fetch.
     */
    where?: GenericProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenericProducts to fetch.
     */
    orderBy?: GenericProductOrderByWithRelationInput | GenericProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenericProducts.
     */
    cursor?: GenericProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenericProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenericProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenericProducts.
     */
    distinct?: GenericProductScalarFieldEnum | GenericProductScalarFieldEnum[]
  }

  /**
   * GenericProduct findFirstOrThrow
   */
  export type GenericProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenericProduct
     */
    select?: GenericProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenericProduct
     */
    omit?: GenericProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenericProductInclude<ExtArgs> | null
    /**
     * Filter, which GenericProduct to fetch.
     */
    where?: GenericProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenericProducts to fetch.
     */
    orderBy?: GenericProductOrderByWithRelationInput | GenericProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenericProducts.
     */
    cursor?: GenericProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenericProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenericProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenericProducts.
     */
    distinct?: GenericProductScalarFieldEnum | GenericProductScalarFieldEnum[]
  }

  /**
   * GenericProduct findMany
   */
  export type GenericProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenericProduct
     */
    select?: GenericProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenericProduct
     */
    omit?: GenericProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenericProductInclude<ExtArgs> | null
    /**
     * Filter, which GenericProducts to fetch.
     */
    where?: GenericProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenericProducts to fetch.
     */
    orderBy?: GenericProductOrderByWithRelationInput | GenericProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GenericProducts.
     */
    cursor?: GenericProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenericProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenericProducts.
     */
    skip?: number
    distinct?: GenericProductScalarFieldEnum | GenericProductScalarFieldEnum[]
  }

  /**
   * GenericProduct create
   */
  export type GenericProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenericProduct
     */
    select?: GenericProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenericProduct
     */
    omit?: GenericProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenericProductInclude<ExtArgs> | null
    /**
     * The data needed to create a GenericProduct.
     */
    data: XOR<GenericProductCreateInput, GenericProductUncheckedCreateInput>
  }

  /**
   * GenericProduct createMany
   */
  export type GenericProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GenericProducts.
     */
    data: GenericProductCreateManyInput | GenericProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GenericProduct update
   */
  export type GenericProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenericProduct
     */
    select?: GenericProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenericProduct
     */
    omit?: GenericProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenericProductInclude<ExtArgs> | null
    /**
     * The data needed to update a GenericProduct.
     */
    data: XOR<GenericProductUpdateInput, GenericProductUncheckedUpdateInput>
    /**
     * Choose, which GenericProduct to update.
     */
    where: GenericProductWhereUniqueInput
  }

  /**
   * GenericProduct updateMany
   */
  export type GenericProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GenericProducts.
     */
    data: XOR<GenericProductUpdateManyMutationInput, GenericProductUncheckedUpdateManyInput>
    /**
     * Filter which GenericProducts to update
     */
    where?: GenericProductWhereInput
    /**
     * Limit how many GenericProducts to update.
     */
    limit?: number
  }

  /**
   * GenericProduct upsert
   */
  export type GenericProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenericProduct
     */
    select?: GenericProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenericProduct
     */
    omit?: GenericProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenericProductInclude<ExtArgs> | null
    /**
     * The filter to search for the GenericProduct to update in case it exists.
     */
    where: GenericProductWhereUniqueInput
    /**
     * In case the GenericProduct found by the `where` argument doesn't exist, create a new GenericProduct with this data.
     */
    create: XOR<GenericProductCreateInput, GenericProductUncheckedCreateInput>
    /**
     * In case the GenericProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenericProductUpdateInput, GenericProductUncheckedUpdateInput>
  }

  /**
   * GenericProduct delete
   */
  export type GenericProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenericProduct
     */
    select?: GenericProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenericProduct
     */
    omit?: GenericProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenericProductInclude<ExtArgs> | null
    /**
     * Filter which GenericProduct to delete.
     */
    where: GenericProductWhereUniqueInput
  }

  /**
   * GenericProduct deleteMany
   */
  export type GenericProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenericProducts to delete
     */
    where?: GenericProductWhereInput
    /**
     * Limit how many GenericProducts to delete.
     */
    limit?: number
  }

  /**
   * GenericProduct.variants
   */
  export type GenericProduct$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificProduct
     */
    select?: SpecificProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecificProduct
     */
    omit?: SpecificProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecificProductInclude<ExtArgs> | null
    where?: SpecificProductWhereInput
    orderBy?: SpecificProductOrderByWithRelationInput | SpecificProductOrderByWithRelationInput[]
    cursor?: SpecificProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecificProductScalarFieldEnum | SpecificProductScalarFieldEnum[]
  }

  /**
   * GenericProduct.details
   */
  export type GenericProduct$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    where?: DetailsWhereInput
    orderBy?: DetailsOrderByWithRelationInput | DetailsOrderByWithRelationInput[]
    cursor?: DetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailsScalarFieldEnum | DetailsScalarFieldEnum[]
  }

  /**
   * GenericProduct without action
   */
  export type GenericProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenericProduct
     */
    select?: GenericProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenericProduct
     */
    omit?: GenericProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenericProductInclude<ExtArgs> | null
  }


  /**
   * Model Categorie
   */

  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieMinAggregateOutputType = {
    id: string | null
    nombre: string | null
  }

  export type CategorieMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
  }

  export type CategorieCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CategorieMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategorieMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategorieCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorie to aggregate.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type CategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieWhereInput
    orderBy?: CategorieOrderByWithAggregationInput | CategorieOrderByWithAggregationInput[]
    by: CategorieScalarFieldEnum[] | CategorieScalarFieldEnum
    having?: CategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }

  export type CategorieGroupByOutputType = {
    id: string
    nombre: string
    _count: CategorieCountAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends CategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type CategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    productos?: boolean | Categorie$productosArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie"]>



  export type CategorieSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CategorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["categorie"]>
  export type CategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Categorie$productosArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorie"
    objects: {
      productos: Prisma.$GenericProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
    }, ExtArgs["result"]["categorie"]>
    composites: {}
  }

  type CategorieGetPayload<S extends boolean | null | undefined | CategorieDefaultArgs> = $Result.GetResult<Prisma.$CategoriePayload, S>

  type CategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieCountAggregateInputType | true
    }

  export interface CategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorie'], meta: { name: 'Categorie' } }
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {CategorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieFindUniqueArgs>(args: SelectSubset<T, CategorieFindUniqueArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieFindFirstArgs>(args?: SelectSubset<T, CategorieFindFirstArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorieWithIdOnly = await prisma.categorie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategorieFindManyArgs>(args?: SelectSubset<T, CategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorie.
     * @param {CategorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
     */
    create<T extends CategorieCreateArgs>(args: SelectSubset<T, CategorieCreateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategorieCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorieCreateManyArgs>(args?: SelectSubset<T, CategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categorie.
     * @param {CategorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
     */
    delete<T extends CategorieDeleteArgs>(args: SelectSubset<T, CategorieDeleteArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorie.
     * @param {CategorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorieUpdateArgs>(args: SelectSubset<T, CategorieUpdateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorieDeleteManyArgs>(args?: SelectSubset<T, CategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorieUpdateManyArgs>(args: SelectSubset<T, CategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorie.
     * @param {CategorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
     */
    upsert<T extends CategorieUpsertArgs>(args: SelectSubset<T, CategorieUpsertArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategorieCountArgs>(
      args?: Subset<T, CategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieGroupByArgs['orderBy'] }
        : { orderBy?: CategorieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorie model
   */
  readonly fields: CategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Categorie$productosArgs<ExtArgs> = {}>(args?: Subset<T, Categorie$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenericProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categorie model
   */
  interface CategorieFieldRefs {
    readonly id: FieldRef<"Categorie", 'String'>
    readonly nombre: FieldRef<"Categorie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categorie findUnique
   */
  export type CategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findUniqueOrThrow
   */
  export type CategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findFirst
   */
  export type CategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findFirstOrThrow
   */
  export type CategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findMany
   */
  export type CategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie create
   */
  export type CategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorie.
     */
    data: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
  }

  /**
   * Categorie createMany
   */
  export type CategorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorie update
   */
  export type CategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorie.
     */
    data: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
    /**
     * Choose, which Categorie to update.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie updateMany
   */
  export type CategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie upsert
   */
  export type CategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorie to update in case it exists.
     */
    where: CategorieWhereUniqueInput
    /**
     * In case the Categorie found by the `where` argument doesn't exist, create a new Categorie with this data.
     */
    create: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
    /**
     * In case the Categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
  }

  /**
   * Categorie delete
   */
  export type CategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter which Categorie to delete.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie deleteMany
   */
  export type CategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categorie.productos
   */
  export type Categorie$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenericProduct
     */
    select?: GenericProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenericProduct
     */
    omit?: GenericProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenericProductInclude<ExtArgs> | null
    where?: GenericProductWhereInput
    orderBy?: GenericProductOrderByWithRelationInput | GenericProductOrderByWithRelationInput[]
    cursor?: GenericProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenericProductScalarFieldEnum | GenericProductScalarFieldEnum[]
  }

  /**
   * Categorie without action
   */
  export type CategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
  }


  /**
   * Model Details
   */

  export type AggregateDetails = {
    _count: DetailsCountAggregateOutputType | null
    _min: DetailsMinAggregateOutputType | null
    _max: DetailsMaxAggregateOutputType | null
  }

  export type DetailsMinAggregateOutputType = {
    id: string | null
    idProd: string | null
    text: string | null
  }

  export type DetailsMaxAggregateOutputType = {
    id: string | null
    idProd: string | null
    text: string | null
  }

  export type DetailsCountAggregateOutputType = {
    id: number
    idProd: number
    text: number
    _all: number
  }


  export type DetailsMinAggregateInputType = {
    id?: true
    idProd?: true
    text?: true
  }

  export type DetailsMaxAggregateInputType = {
    id?: true
    idProd?: true
    text?: true
  }

  export type DetailsCountAggregateInputType = {
    id?: true
    idProd?: true
    text?: true
    _all?: true
  }

  export type DetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Details to aggregate.
     */
    where?: DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Details to fetch.
     */
    orderBy?: DetailsOrderByWithRelationInput | DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Details
    **/
    _count?: true | DetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailsMaxAggregateInputType
  }

  export type GetDetailsAggregateType<T extends DetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetails[P]>
      : GetScalarType<T[P], AggregateDetails[P]>
  }




  export type DetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailsWhereInput
    orderBy?: DetailsOrderByWithAggregationInput | DetailsOrderByWithAggregationInput[]
    by: DetailsScalarFieldEnum[] | DetailsScalarFieldEnum
    having?: DetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailsCountAggregateInputType | true
    _min?: DetailsMinAggregateInputType
    _max?: DetailsMaxAggregateInputType
  }

  export type DetailsGroupByOutputType = {
    id: string
    idProd: string
    text: string
    _count: DetailsCountAggregateOutputType | null
    _min: DetailsMinAggregateOutputType | null
    _max: DetailsMaxAggregateOutputType | null
  }

  type GetDetailsGroupByPayload<T extends DetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailsGroupByOutputType[P]>
            : GetScalarType<T[P], DetailsGroupByOutputType[P]>
        }
      >
    >


  export type DetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idProd?: boolean
    text?: boolean
    prod?: boolean | GenericProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["details"]>



  export type DetailsSelectScalar = {
    id?: boolean
    idProd?: boolean
    text?: boolean
  }

  export type DetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idProd" | "text", ExtArgs["result"]["details"]>
  export type DetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prod?: boolean | GenericProductDefaultArgs<ExtArgs>
  }

  export type $DetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Details"
    objects: {
      prod: Prisma.$GenericProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idProd: string
      text: string
    }, ExtArgs["result"]["details"]>
    composites: {}
  }

  type DetailsGetPayload<S extends boolean | null | undefined | DetailsDefaultArgs> = $Result.GetResult<Prisma.$DetailsPayload, S>

  type DetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailsCountAggregateInputType | true
    }

  export interface DetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Details'], meta: { name: 'Details' } }
    /**
     * Find zero or one Details that matches the filter.
     * @param {DetailsFindUniqueArgs} args - Arguments to find a Details
     * @example
     * // Get one Details
     * const details = await prisma.details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailsFindUniqueArgs>(args: SelectSubset<T, DetailsFindUniqueArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailsFindUniqueOrThrowArgs} args - Arguments to find a Details
     * @example
     * // Get one Details
     * const details = await prisma.details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsFindFirstArgs} args - Arguments to find a Details
     * @example
     * // Get one Details
     * const details = await prisma.details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailsFindFirstArgs>(args?: SelectSubset<T, DetailsFindFirstArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsFindFirstOrThrowArgs} args - Arguments to find a Details
     * @example
     * // Get one Details
     * const details = await prisma.details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Details
     * const details = await prisma.details.findMany()
     * 
     * // Get first 10 Details
     * const details = await prisma.details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailsWithIdOnly = await prisma.details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetailsFindManyArgs>(args?: SelectSubset<T, DetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Details.
     * @param {DetailsCreateArgs} args - Arguments to create a Details.
     * @example
     * // Create one Details
     * const Details = await prisma.details.create({
     *   data: {
     *     // ... data to create a Details
     *   }
     * })
     * 
     */
    create<T extends DetailsCreateArgs>(args: SelectSubset<T, DetailsCreateArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Details.
     * @param {DetailsCreateManyArgs} args - Arguments to create many Details.
     * @example
     * // Create many Details
     * const details = await prisma.details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailsCreateManyArgs>(args?: SelectSubset<T, DetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Details.
     * @param {DetailsDeleteArgs} args - Arguments to delete one Details.
     * @example
     * // Delete one Details
     * const Details = await prisma.details.delete({
     *   where: {
     *     // ... filter to delete one Details
     *   }
     * })
     * 
     */
    delete<T extends DetailsDeleteArgs>(args: SelectSubset<T, DetailsDeleteArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Details.
     * @param {DetailsUpdateArgs} args - Arguments to update one Details.
     * @example
     * // Update one Details
     * const details = await prisma.details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailsUpdateArgs>(args: SelectSubset<T, DetailsUpdateArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Details.
     * @param {DetailsDeleteManyArgs} args - Arguments to filter Details to delete.
     * @example
     * // Delete a few Details
     * const { count } = await prisma.details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailsDeleteManyArgs>(args?: SelectSubset<T, DetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Details
     * const details = await prisma.details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailsUpdateManyArgs>(args: SelectSubset<T, DetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Details.
     * @param {DetailsUpsertArgs} args - Arguments to update or create a Details.
     * @example
     * // Update or create a Details
     * const details = await prisma.details.upsert({
     *   create: {
     *     // ... data to create a Details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Details we want to update
     *   }
     * })
     */
    upsert<T extends DetailsUpsertArgs>(args: SelectSubset<T, DetailsUpsertArgs<ExtArgs>>): Prisma__DetailsClient<$Result.GetResult<Prisma.$DetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsCountArgs} args - Arguments to filter Details to count.
     * @example
     * // Count the number of Details
     * const count = await prisma.details.count({
     *   where: {
     *     // ... the filter for the Details we want to count
     *   }
     * })
    **/
    count<T extends DetailsCountArgs>(
      args?: Subset<T, DetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetailsAggregateArgs>(args: Subset<T, DetailsAggregateArgs>): Prisma.PrismaPromise<GetDetailsAggregateType<T>>

    /**
     * Group by Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailsGroupByArgs['orderBy'] }
        : { orderBy?: DetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Details model
   */
  readonly fields: DetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prod<T extends GenericProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenericProductDefaultArgs<ExtArgs>>): Prisma__GenericProductClient<$Result.GetResult<Prisma.$GenericProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Details model
   */
  interface DetailsFieldRefs {
    readonly id: FieldRef<"Details", 'String'>
    readonly idProd: FieldRef<"Details", 'String'>
    readonly text: FieldRef<"Details", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Details findUnique
   */
  export type DetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Details to fetch.
     */
    where: DetailsWhereUniqueInput
  }

  /**
   * Details findUniqueOrThrow
   */
  export type DetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Details to fetch.
     */
    where: DetailsWhereUniqueInput
  }

  /**
   * Details findFirst
   */
  export type DetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Details to fetch.
     */
    where?: DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Details to fetch.
     */
    orderBy?: DetailsOrderByWithRelationInput | DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Details.
     */
    cursor?: DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Details.
     */
    distinct?: DetailsScalarFieldEnum | DetailsScalarFieldEnum[]
  }

  /**
   * Details findFirstOrThrow
   */
  export type DetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Details to fetch.
     */
    where?: DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Details to fetch.
     */
    orderBy?: DetailsOrderByWithRelationInput | DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Details.
     */
    cursor?: DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Details.
     */
    distinct?: DetailsScalarFieldEnum | DetailsScalarFieldEnum[]
  }

  /**
   * Details findMany
   */
  export type DetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Details to fetch.
     */
    where?: DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Details to fetch.
     */
    orderBy?: DetailsOrderByWithRelationInput | DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Details.
     */
    cursor?: DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Details.
     */
    skip?: number
    distinct?: DetailsScalarFieldEnum | DetailsScalarFieldEnum[]
  }

  /**
   * Details create
   */
  export type DetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a Details.
     */
    data: XOR<DetailsCreateInput, DetailsUncheckedCreateInput>
  }

  /**
   * Details createMany
   */
  export type DetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Details.
     */
    data: DetailsCreateManyInput | DetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Details update
   */
  export type DetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a Details.
     */
    data: XOR<DetailsUpdateInput, DetailsUncheckedUpdateInput>
    /**
     * Choose, which Details to update.
     */
    where: DetailsWhereUniqueInput
  }

  /**
   * Details updateMany
   */
  export type DetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Details.
     */
    data: XOR<DetailsUpdateManyMutationInput, DetailsUncheckedUpdateManyInput>
    /**
     * Filter which Details to update
     */
    where?: DetailsWhereInput
    /**
     * Limit how many Details to update.
     */
    limit?: number
  }

  /**
   * Details upsert
   */
  export type DetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the Details to update in case it exists.
     */
    where: DetailsWhereUniqueInput
    /**
     * In case the Details found by the `where` argument doesn't exist, create a new Details with this data.
     */
    create: XOR<DetailsCreateInput, DetailsUncheckedCreateInput>
    /**
     * In case the Details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailsUpdateInput, DetailsUncheckedUpdateInput>
  }

  /**
   * Details delete
   */
  export type DetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
    /**
     * Filter which Details to delete.
     */
    where: DetailsWhereUniqueInput
  }

  /**
   * Details deleteMany
   */
  export type DetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Details to delete
     */
    where?: DetailsWhereInput
    /**
     * Limit how many Details to delete.
     */
    limit?: number
  }

  /**
   * Details without action
   */
  export type DetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Details
     */
    select?: DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Details
     */
    omit?: DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailsInclude<ExtArgs> | null
  }


  /**
   * Model SpecificProduct
   */

  export type AggregateSpecificProduct = {
    _count: SpecificProductCountAggregateOutputType | null
    _avg: SpecificProductAvgAggregateOutputType | null
    _sum: SpecificProductSumAggregateOutputType | null
    _min: SpecificProductMinAggregateOutputType | null
    _max: SpecificProductMaxAggregateOutputType | null
  }

  export type SpecificProductAvgAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type SpecificProductSumAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type SpecificProductMinAggregateOutputType = {
    genericId: string | null
    id: string | null
    image: string | null
    price: number | null
    color: string | null
    variantName: string | null
    stock: number | null
  }

  export type SpecificProductMaxAggregateOutputType = {
    genericId: string | null
    id: string | null
    image: string | null
    price: number | null
    color: string | null
    variantName: string | null
    stock: number | null
  }

  export type SpecificProductCountAggregateOutputType = {
    genericId: number
    id: number
    image: number
    price: number
    color: number
    variantName: number
    stock: number
    _all: number
  }


  export type SpecificProductAvgAggregateInputType = {
    price?: true
    stock?: true
  }

  export type SpecificProductSumAggregateInputType = {
    price?: true
    stock?: true
  }

  export type SpecificProductMinAggregateInputType = {
    genericId?: true
    id?: true
    image?: true
    price?: true
    color?: true
    variantName?: true
    stock?: true
  }

  export type SpecificProductMaxAggregateInputType = {
    genericId?: true
    id?: true
    image?: true
    price?: true
    color?: true
    variantName?: true
    stock?: true
  }

  export type SpecificProductCountAggregateInputType = {
    genericId?: true
    id?: true
    image?: true
    price?: true
    color?: true
    variantName?: true
    stock?: true
    _all?: true
  }

  export type SpecificProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecificProduct to aggregate.
     */
    where?: SpecificProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecificProducts to fetch.
     */
    orderBy?: SpecificProductOrderByWithRelationInput | SpecificProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecificProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecificProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecificProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpecificProducts
    **/
    _count?: true | SpecificProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecificProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecificProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecificProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecificProductMaxAggregateInputType
  }

  export type GetSpecificProductAggregateType<T extends SpecificProductAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecificProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecificProduct[P]>
      : GetScalarType<T[P], AggregateSpecificProduct[P]>
  }




  export type SpecificProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecificProductWhereInput
    orderBy?: SpecificProductOrderByWithAggregationInput | SpecificProductOrderByWithAggregationInput[]
    by: SpecificProductScalarFieldEnum[] | SpecificProductScalarFieldEnum
    having?: SpecificProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecificProductCountAggregateInputType | true
    _avg?: SpecificProductAvgAggregateInputType
    _sum?: SpecificProductSumAggregateInputType
    _min?: SpecificProductMinAggregateInputType
    _max?: SpecificProductMaxAggregateInputType
  }

  export type SpecificProductGroupByOutputType = {
    genericId: string
    id: string
    image: string | null
    price: number
    color: string
    variantName: string
    stock: number
    _count: SpecificProductCountAggregateOutputType | null
    _avg: SpecificProductAvgAggregateOutputType | null
    _sum: SpecificProductSumAggregateOutputType | null
    _min: SpecificProductMinAggregateOutputType | null
    _max: SpecificProductMaxAggregateOutputType | null
  }

  type GetSpecificProductGroupByPayload<T extends SpecificProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecificProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecificProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecificProductGroupByOutputType[P]>
            : GetScalarType<T[P], SpecificProductGroupByOutputType[P]>
        }
      >
    >


  export type SpecificProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genericId?: boolean
    id?: boolean
    image?: boolean
    price?: boolean
    color?: boolean
    variantName?: boolean
    stock?: boolean
    order?: boolean | SpecificProduct$orderArgs<ExtArgs>
    promotions?: boolean | SpecificProduct$promotionsArgs<ExtArgs>
    genericProd?: boolean | GenericProductDefaultArgs<ExtArgs>
    images?: boolean | SpecificProduct$imagesArgs<ExtArgs>
    _count?: boolean | SpecificProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specificProduct"]>



  export type SpecificProductSelectScalar = {
    genericId?: boolean
    id?: boolean
    image?: boolean
    price?: boolean
    color?: boolean
    variantName?: boolean
    stock?: boolean
  }

  export type SpecificProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"genericId" | "id" | "image" | "price" | "color" | "variantName" | "stock", ExtArgs["result"]["specificProduct"]>
  export type SpecificProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | SpecificProduct$orderArgs<ExtArgs>
    promotions?: boolean | SpecificProduct$promotionsArgs<ExtArgs>
    genericProd?: boolean | GenericProductDefaultArgs<ExtArgs>
    images?: boolean | SpecificProduct$imagesArgs<ExtArgs>
    _count?: boolean | SpecificProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SpecificProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpecificProduct"
    objects: {
      order: Prisma.$ProductForOrderPayload<ExtArgs>[]
      promotions: Prisma.$ProductForPromotionPayload<ExtArgs>[]
      genericProd: Prisma.$GenericProductPayload<ExtArgs>
      images: Prisma.$ImagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      genericId: string
      id: string
      image: string | null
      price: number
      color: string
      variantName: string
      stock: number
    }, ExtArgs["result"]["specificProduct"]>
    composites: {}
  }

  type SpecificProductGetPayload<S extends boolean | null | undefined | SpecificProductDefaultArgs> = $Result.GetResult<Prisma.$SpecificProductPayload, S>

  type SpecificProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecificProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecificProductCountAggregateInputType | true
    }

  export interface SpecificProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpecificProduct'], meta: { name: 'SpecificProduct' } }
    /**
     * Find zero or one SpecificProduct that matches the filter.
     * @param {SpecificProductFindUniqueArgs} args - Arguments to find a SpecificProduct
     * @example
     * // Get one SpecificProduct
     * const specificProduct = await prisma.specificProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecificProductFindUniqueArgs>(args: SelectSubset<T, SpecificProductFindUniqueArgs<ExtArgs>>): Prisma__SpecificProductClient<$Result.GetResult<Prisma.$SpecificProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpecificProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecificProductFindUniqueOrThrowArgs} args - Arguments to find a SpecificProduct
     * @example
     * // Get one SpecificProduct
     * const specificProduct = await prisma.specificProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecificProductFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecificProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecificProductClient<$Result.GetResult<Prisma.$SpecificProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecificProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificProductFindFirstArgs} args - Arguments to find a SpecificProduct
     * @example
     * // Get one SpecificProduct
     * const specificProduct = await prisma.specificProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecificProductFindFirstArgs>(args?: SelectSubset<T, SpecificProductFindFirstArgs<ExtArgs>>): Prisma__SpecificProductClient<$Result.GetResult<Prisma.$SpecificProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecificProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificProductFindFirstOrThrowArgs} args - Arguments to find a SpecificProduct
     * @example
     * // Get one SpecificProduct
     * const specificProduct = await prisma.specificProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecificProductFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecificProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecificProductClient<$Result.GetResult<Prisma.$SpecificProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpecificProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpecificProducts
     * const specificProducts = await prisma.specificProduct.findMany()
     * 
     * // Get first 10 SpecificProducts
     * const specificProducts = await prisma.specificProduct.findMany({ take: 10 })
     * 
     * // Only select the `genericId`
     * const specificProductWithGenericIdOnly = await prisma.specificProduct.findMany({ select: { genericId: true } })
     * 
     */
    findMany<T extends SpecificProductFindManyArgs>(args?: SelectSubset<T, SpecificProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecificProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpecificProduct.
     * @param {SpecificProductCreateArgs} args - Arguments to create a SpecificProduct.
     * @example
     * // Create one SpecificProduct
     * const SpecificProduct = await prisma.specificProduct.create({
     *   data: {
     *     // ... data to create a SpecificProduct
     *   }
     * })
     * 
     */
    create<T extends SpecificProductCreateArgs>(args: SelectSubset<T, SpecificProductCreateArgs<ExtArgs>>): Prisma__SpecificProductClient<$Result.GetResult<Prisma.$SpecificProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpecificProducts.
     * @param {SpecificProductCreateManyArgs} args - Arguments to create many SpecificProducts.
     * @example
     * // Create many SpecificProducts
     * const specificProduct = await prisma.specificProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecificProductCreateManyArgs>(args?: SelectSubset<T, SpecificProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SpecificProduct.
     * @param {SpecificProductDeleteArgs} args - Arguments to delete one SpecificProduct.
     * @example
     * // Delete one SpecificProduct
     * const SpecificProduct = await prisma.specificProduct.delete({
     *   where: {
     *     // ... filter to delete one SpecificProduct
     *   }
     * })
     * 
     */
    delete<T extends SpecificProductDeleteArgs>(args: SelectSubset<T, SpecificProductDeleteArgs<ExtArgs>>): Prisma__SpecificProductClient<$Result.GetResult<Prisma.$SpecificProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpecificProduct.
     * @param {SpecificProductUpdateArgs} args - Arguments to update one SpecificProduct.
     * @example
     * // Update one SpecificProduct
     * const specificProduct = await prisma.specificProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecificProductUpdateArgs>(args: SelectSubset<T, SpecificProductUpdateArgs<ExtArgs>>): Prisma__SpecificProductClient<$Result.GetResult<Prisma.$SpecificProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpecificProducts.
     * @param {SpecificProductDeleteManyArgs} args - Arguments to filter SpecificProducts to delete.
     * @example
     * // Delete a few SpecificProducts
     * const { count } = await prisma.specificProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecificProductDeleteManyArgs>(args?: SelectSubset<T, SpecificProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecificProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpecificProducts
     * const specificProduct = await prisma.specificProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecificProductUpdateManyArgs>(args: SelectSubset<T, SpecificProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpecificProduct.
     * @param {SpecificProductUpsertArgs} args - Arguments to update or create a SpecificProduct.
     * @example
     * // Update or create a SpecificProduct
     * const specificProduct = await prisma.specificProduct.upsert({
     *   create: {
     *     // ... data to create a SpecificProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpecificProduct we want to update
     *   }
     * })
     */
    upsert<T extends SpecificProductUpsertArgs>(args: SelectSubset<T, SpecificProductUpsertArgs<ExtArgs>>): Prisma__SpecificProductClient<$Result.GetResult<Prisma.$SpecificProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpecificProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificProductCountArgs} args - Arguments to filter SpecificProducts to count.
     * @example
     * // Count the number of SpecificProducts
     * const count = await prisma.specificProduct.count({
     *   where: {
     *     // ... the filter for the SpecificProducts we want to count
     *   }
     * })
    **/
    count<T extends SpecificProductCountArgs>(
      args?: Subset<T, SpecificProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecificProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpecificProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecificProductAggregateArgs>(args: Subset<T, SpecificProductAggregateArgs>): Prisma.PrismaPromise<GetSpecificProductAggregateType<T>>

    /**
     * Group by SpecificProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecificProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecificProductGroupByArgs['orderBy'] }
        : { orderBy?: SpecificProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecificProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecificProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpecificProduct model
   */
  readonly fields: SpecificProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpecificProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecificProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends SpecificProduct$orderArgs<ExtArgs> = {}>(args?: Subset<T, SpecificProduct$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductForOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    promotions<T extends SpecificProduct$promotionsArgs<ExtArgs> = {}>(args?: Subset<T, SpecificProduct$promotionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductForPromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genericProd<T extends GenericProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenericProductDefaultArgs<ExtArgs>>): Prisma__GenericProductClient<$Result.GetResult<Prisma.$GenericProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends SpecificProduct$imagesArgs<ExtArgs> = {}>(args?: Subset<T, SpecificProduct$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpecificProduct model
   */
  interface SpecificProductFieldRefs {
    readonly genericId: FieldRef<"SpecificProduct", 'String'>
    readonly id: FieldRef<"SpecificProduct", 'String'>
    readonly image: FieldRef<"SpecificProduct", 'String'>
    readonly price: FieldRef<"SpecificProduct", 'Float'>
    readonly color: FieldRef<"SpecificProduct", 'String'>
    readonly variantName: FieldRef<"SpecificProduct", 'String'>
    readonly stock: FieldRef<"SpecificProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SpecificProduct findUnique
   */
  export type SpecificProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificProduct
     */
    select?: SpecificProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecificProduct
     */
    omit?: SpecificProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecificProductInclude<ExtArgs> | null
    /**
     * Filter, which SpecificProduct to fetch.
     */
    where: SpecificProductWhereUniqueInput
  }

  /**
   * SpecificProduct findUniqueOrThrow
   */
  export type SpecificProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificProduct
     */
    select?: SpecificProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecificProduct
     */
    omit?: SpecificProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecificProductInclude<ExtArgs> | null
    /**
     * Filter, which SpecificProduct to fetch.
     */
    where: SpecificProductWhereUniqueInput
  }

  /**
   * SpecificProduct findFirst
   */
  export type SpecificProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificProduct
     */
    select?: SpecificProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecificProduct
     */
    omit?: SpecificProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecificProductInclude<ExtArgs> | null
    /**
     * Filter, which SpecificProduct to fetch.
     */
    where?: SpecificProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecificProducts to fetch.
     */
    orderBy?: SpecificProductOrderByWithRelationInput | SpecificProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecificProducts.
     */
    cursor?: SpecificProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecificProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecificProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecificProducts.
     */
    distinct?: SpecificProductScalarFieldEnum | SpecificProductScalarFieldEnum[]
  }

  /**
   * SpecificProduct findFirstOrThrow
   */
  export type SpecificProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificProduct
     */
    select?: SpecificProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecificProduct
     */
    omit?: SpecificProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecificProductInclude<ExtArgs> | null
    /**
     * Filter, which SpecificProduct to fetch.
     */
    where?: SpecificProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecificProducts to fetch.
     */
    orderBy?: SpecificProductOrderByWithRelationInput | SpecificProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecificProducts.
     */
    cursor?: SpecificProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecificProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecificProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecificProducts.
     */
    distinct?: SpecificProductScalarFieldEnum | SpecificProductScalarFieldEnum[]
  }

  /**
   * SpecificProduct findMany
   */
  export type SpecificProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificProduct
     */
    select?: SpecificProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecificProduct
     */
    omit?: SpecificProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecificProductInclude<ExtArgs> | null
    /**
     * Filter, which SpecificProducts to fetch.
     */
    where?: SpecificProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecificProducts to fetch.
     */
    orderBy?: SpecificProductOrderByWithRelationInput | SpecificProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpecificProducts.
     */
    cursor?: SpecificProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecificProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecificProducts.
     */
    skip?: number
    distinct?: SpecificProductScalarFieldEnum | SpecificProductScalarFieldEnum[]
  }

  /**
   * SpecificProduct create
   */
  export type SpecificProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificProduct
     */
    select?: SpecificProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecificProduct
     */
    omit?: SpecificProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecificProductInclude<ExtArgs> | null
    /**
     * The data needed to create a SpecificProduct.
     */
    data: XOR<SpecificProductCreateInput, SpecificProductUncheckedCreateInput>
  }

  /**
   * SpecificProduct createMany
   */
  export type SpecificProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpecificProducts.
     */
    data: SpecificProductCreateManyInput | SpecificProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecificProduct update
   */
  export type SpecificProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificProduct
     */
    select?: SpecificProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecificProduct
     */
    omit?: SpecificProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecificProductInclude<ExtArgs> | null
    /**
     * The data needed to update a SpecificProduct.
     */
    data: XOR<SpecificProductUpdateInput, SpecificProductUncheckedUpdateInput>
    /**
     * Choose, which SpecificProduct to update.
     */
    where: SpecificProductWhereUniqueInput
  }

  /**
   * SpecificProduct updateMany
   */
  export type SpecificProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpecificProducts.
     */
    data: XOR<SpecificProductUpdateManyMutationInput, SpecificProductUncheckedUpdateManyInput>
    /**
     * Filter which SpecificProducts to update
     */
    where?: SpecificProductWhereInput
    /**
     * Limit how many SpecificProducts to update.
     */
    limit?: number
  }

  /**
   * SpecificProduct upsert
   */
  export type SpecificProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificProduct
     */
    select?: SpecificProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecificProduct
     */
    omit?: SpecificProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecificProductInclude<ExtArgs> | null
    /**
     * The filter to search for the SpecificProduct to update in case it exists.
     */
    where: SpecificProductWhereUniqueInput
    /**
     * In case the SpecificProduct found by the `where` argument doesn't exist, create a new SpecificProduct with this data.
     */
    create: XOR<SpecificProductCreateInput, SpecificProductUncheckedCreateInput>
    /**
     * In case the SpecificProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecificProductUpdateInput, SpecificProductUncheckedUpdateInput>
  }

  /**
   * SpecificProduct delete
   */
  export type SpecificProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificProduct
     */
    select?: SpecificProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecificProduct
     */
    omit?: SpecificProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecificProductInclude<ExtArgs> | null
    /**
     * Filter which SpecificProduct to delete.
     */
    where: SpecificProductWhereUniqueInput
  }

  /**
   * SpecificProduct deleteMany
   */
  export type SpecificProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecificProducts to delete
     */
    where?: SpecificProductWhereInput
    /**
     * Limit how many SpecificProducts to delete.
     */
    limit?: number
  }

  /**
   * SpecificProduct.order
   */
  export type SpecificProduct$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForOrder
     */
    select?: ProductForOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForOrder
     */
    omit?: ProductForOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForOrderInclude<ExtArgs> | null
    where?: ProductForOrderWhereInput
    orderBy?: ProductForOrderOrderByWithRelationInput | ProductForOrderOrderByWithRelationInput[]
    cursor?: ProductForOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductForOrderScalarFieldEnum | ProductForOrderScalarFieldEnum[]
  }

  /**
   * SpecificProduct.promotions
   */
  export type SpecificProduct$promotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForPromotion
     */
    select?: ProductForPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForPromotion
     */
    omit?: ProductForPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForPromotionInclude<ExtArgs> | null
    where?: ProductForPromotionWhereInput
    orderBy?: ProductForPromotionOrderByWithRelationInput | ProductForPromotionOrderByWithRelationInput[]
    cursor?: ProductForPromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductForPromotionScalarFieldEnum | ProductForPromotionScalarFieldEnum[]
  }

  /**
   * SpecificProduct.images
   */
  export type SpecificProduct$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    cursor?: ImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * SpecificProduct without action
   */
  export type SpecificProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificProduct
     */
    select?: SpecificProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecificProduct
     */
    omit?: SpecificProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecificProductInclude<ExtArgs> | null
  }


  /**
   * Model Images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesMinAggregateOutputType = {
    id: string | null
    link: string | null
    prodId: string | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: string | null
    link: string | null
    prodId: string | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    link: number
    prodId: number
    _all: number
  }


  export type ImagesMinAggregateInputType = {
    id?: true
    link?: true
    prodId?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    link?: true
    prodId?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    link?: true
    prodId?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to aggregate.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type ImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithAggregationInput | ImagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    id: string
    link: string
    prodId: string
    _count: ImagesCountAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends ImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type ImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    prodId?: boolean
    product?: boolean | SpecificProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>



  export type ImagesSelectScalar = {
    id?: boolean
    link?: boolean
    prodId?: boolean
  }

  export type ImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "link" | "prodId", ExtArgs["result"]["images"]>
  export type ImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | SpecificProductDefaultArgs<ExtArgs>
  }

  export type $ImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Images"
    objects: {
      product: Prisma.$SpecificProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      link: string
      prodId: string
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type ImagesGetPayload<S extends boolean | null | undefined | ImagesDefaultArgs> = $Result.GetResult<Prisma.$ImagesPayload, S>

  type ImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface ImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Images'], meta: { name: 'Images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {ImagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagesFindUniqueArgs>(args: SelectSubset<T, ImagesFindUniqueArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagesFindFirstArgs>(args?: SelectSubset<T, ImagesFindFirstArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagesFindManyArgs>(args?: SelectSubset<T, ImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Images.
     * @param {ImagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends ImagesCreateArgs>(args: SelectSubset<T, ImagesCreateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagesCreateManyArgs>(args?: SelectSubset<T, ImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Images.
     * @param {ImagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends ImagesDeleteArgs>(args: SelectSubset<T, ImagesDeleteArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Images.
     * @param {ImagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagesUpdateArgs>(args: SelectSubset<T, ImagesUpdateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagesDeleteManyArgs>(args?: SelectSubset<T, ImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagesUpdateManyArgs>(args: SelectSubset<T, ImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Images.
     * @param {ImagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends ImagesUpsertArgs>(args: SelectSubset<T, ImagesUpsertArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImagesCountArgs>(
      args?: Subset<T, ImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Images model
   */
  readonly fields: ImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends SpecificProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecificProductDefaultArgs<ExtArgs>>): Prisma__SpecificProductClient<$Result.GetResult<Prisma.$SpecificProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Images model
   */
  interface ImagesFieldRefs {
    readonly id: FieldRef<"Images", 'String'>
    readonly link: FieldRef<"Images", 'String'>
    readonly prodId: FieldRef<"Images", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Images findUnique
   */
  export type ImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findUniqueOrThrow
   */
  export type ImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findFirst
   */
  export type ImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findFirstOrThrow
   */
  export type ImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findMany
   */
  export type ImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images create
   */
  export type ImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Images.
     */
    data: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
  }

  /**
   * Images createMany
   */
  export type ImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Images update
   */
  export type ImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Images.
     */
    data: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
    /**
     * Choose, which Images to update.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images updateMany
   */
  export type ImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Images upsert
   */
  export type ImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Images to update in case it exists.
     */
    where: ImagesWhereUniqueInput
    /**
     * In case the Images found by the `where` argument doesn't exist, create a new Images with this data.
     */
    create: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
    /**
     * In case the Images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
  }

  /**
   * Images delete
   */
  export type ImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter which Images to delete.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images deleteMany
   */
  export type ImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Images without action
   */
  export type ImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    products?: boolean | Order$productsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    products?: boolean | Order$productsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      products: Prisma.$ProductForOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends Order$productsArgs<ExtArgs> = {}>(args?: Subset<T, Order$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductForOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.products
   */
  export type Order$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForOrder
     */
    select?: ProductForOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForOrder
     */
    omit?: ProductForOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForOrderInclude<ExtArgs> | null
    where?: ProductForOrderWhereInput
    orderBy?: ProductForOrderOrderByWithRelationInput | ProductForOrderOrderByWithRelationInput[]
    cursor?: ProductForOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductForOrderScalarFieldEnum | ProductForOrderScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model ProductForOrder
   */

  export type AggregateProductForOrder = {
    _count: ProductForOrderCountAggregateOutputType | null
    _avg: ProductForOrderAvgAggregateOutputType | null
    _sum: ProductForOrderSumAggregateOutputType | null
    _min: ProductForOrderMinAggregateOutputType | null
    _max: ProductForOrderMaxAggregateOutputType | null
  }

  export type ProductForOrderAvgAggregateOutputType = {
    count: number | null
  }

  export type ProductForOrderSumAggregateOutputType = {
    count: number | null
  }

  export type ProductForOrderMinAggregateOutputType = {
    orderId: string | null
    productId: string | null
    count: number | null
  }

  export type ProductForOrderMaxAggregateOutputType = {
    orderId: string | null
    productId: string | null
    count: number | null
  }

  export type ProductForOrderCountAggregateOutputType = {
    orderId: number
    productId: number
    count: number
    _all: number
  }


  export type ProductForOrderAvgAggregateInputType = {
    count?: true
  }

  export type ProductForOrderSumAggregateInputType = {
    count?: true
  }

  export type ProductForOrderMinAggregateInputType = {
    orderId?: true
    productId?: true
    count?: true
  }

  export type ProductForOrderMaxAggregateInputType = {
    orderId?: true
    productId?: true
    count?: true
  }

  export type ProductForOrderCountAggregateInputType = {
    orderId?: true
    productId?: true
    count?: true
    _all?: true
  }

  export type ProductForOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductForOrder to aggregate.
     */
    where?: ProductForOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductForOrders to fetch.
     */
    orderBy?: ProductForOrderOrderByWithRelationInput | ProductForOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductForOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductForOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductForOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductForOrders
    **/
    _count?: true | ProductForOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductForOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductForOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductForOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductForOrderMaxAggregateInputType
  }

  export type GetProductForOrderAggregateType<T extends ProductForOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateProductForOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductForOrder[P]>
      : GetScalarType<T[P], AggregateProductForOrder[P]>
  }




  export type ProductForOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductForOrderWhereInput
    orderBy?: ProductForOrderOrderByWithAggregationInput | ProductForOrderOrderByWithAggregationInput[]
    by: ProductForOrderScalarFieldEnum[] | ProductForOrderScalarFieldEnum
    having?: ProductForOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductForOrderCountAggregateInputType | true
    _avg?: ProductForOrderAvgAggregateInputType
    _sum?: ProductForOrderSumAggregateInputType
    _min?: ProductForOrderMinAggregateInputType
    _max?: ProductForOrderMaxAggregateInputType
  }

  export type ProductForOrderGroupByOutputType = {
    orderId: string
    productId: string
    count: number
    _count: ProductForOrderCountAggregateOutputType | null
    _avg: ProductForOrderAvgAggregateOutputType | null
    _sum: ProductForOrderSumAggregateOutputType | null
    _min: ProductForOrderMinAggregateOutputType | null
    _max: ProductForOrderMaxAggregateOutputType | null
  }

  type GetProductForOrderGroupByPayload<T extends ProductForOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductForOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductForOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductForOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ProductForOrderGroupByOutputType[P]>
        }
      >
    >


  export type ProductForOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    productId?: boolean
    count?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | SpecificProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productForOrder"]>



  export type ProductForOrderSelectScalar = {
    orderId?: boolean
    productId?: boolean
    count?: boolean
  }

  export type ProductForOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderId" | "productId" | "count", ExtArgs["result"]["productForOrder"]>
  export type ProductForOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | SpecificProductDefaultArgs<ExtArgs>
  }

  export type $ProductForOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductForOrder"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$SpecificProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: string
      productId: string
      count: number
    }, ExtArgs["result"]["productForOrder"]>
    composites: {}
  }

  type ProductForOrderGetPayload<S extends boolean | null | undefined | ProductForOrderDefaultArgs> = $Result.GetResult<Prisma.$ProductForOrderPayload, S>

  type ProductForOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductForOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductForOrderCountAggregateInputType | true
    }

  export interface ProductForOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductForOrder'], meta: { name: 'ProductForOrder' } }
    /**
     * Find zero or one ProductForOrder that matches the filter.
     * @param {ProductForOrderFindUniqueArgs} args - Arguments to find a ProductForOrder
     * @example
     * // Get one ProductForOrder
     * const productForOrder = await prisma.productForOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductForOrderFindUniqueArgs>(args: SelectSubset<T, ProductForOrderFindUniqueArgs<ExtArgs>>): Prisma__ProductForOrderClient<$Result.GetResult<Prisma.$ProductForOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductForOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductForOrderFindUniqueOrThrowArgs} args - Arguments to find a ProductForOrder
     * @example
     * // Get one ProductForOrder
     * const productForOrder = await prisma.productForOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductForOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductForOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductForOrderClient<$Result.GetResult<Prisma.$ProductForOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductForOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForOrderFindFirstArgs} args - Arguments to find a ProductForOrder
     * @example
     * // Get one ProductForOrder
     * const productForOrder = await prisma.productForOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductForOrderFindFirstArgs>(args?: SelectSubset<T, ProductForOrderFindFirstArgs<ExtArgs>>): Prisma__ProductForOrderClient<$Result.GetResult<Prisma.$ProductForOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductForOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForOrderFindFirstOrThrowArgs} args - Arguments to find a ProductForOrder
     * @example
     * // Get one ProductForOrder
     * const productForOrder = await prisma.productForOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductForOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductForOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductForOrderClient<$Result.GetResult<Prisma.$ProductForOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductForOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductForOrders
     * const productForOrders = await prisma.productForOrder.findMany()
     * 
     * // Get first 10 ProductForOrders
     * const productForOrders = await prisma.productForOrder.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const productForOrderWithOrderIdOnly = await prisma.productForOrder.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends ProductForOrderFindManyArgs>(args?: SelectSubset<T, ProductForOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductForOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductForOrder.
     * @param {ProductForOrderCreateArgs} args - Arguments to create a ProductForOrder.
     * @example
     * // Create one ProductForOrder
     * const ProductForOrder = await prisma.productForOrder.create({
     *   data: {
     *     // ... data to create a ProductForOrder
     *   }
     * })
     * 
     */
    create<T extends ProductForOrderCreateArgs>(args: SelectSubset<T, ProductForOrderCreateArgs<ExtArgs>>): Prisma__ProductForOrderClient<$Result.GetResult<Prisma.$ProductForOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductForOrders.
     * @param {ProductForOrderCreateManyArgs} args - Arguments to create many ProductForOrders.
     * @example
     * // Create many ProductForOrders
     * const productForOrder = await prisma.productForOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductForOrderCreateManyArgs>(args?: SelectSubset<T, ProductForOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductForOrder.
     * @param {ProductForOrderDeleteArgs} args - Arguments to delete one ProductForOrder.
     * @example
     * // Delete one ProductForOrder
     * const ProductForOrder = await prisma.productForOrder.delete({
     *   where: {
     *     // ... filter to delete one ProductForOrder
     *   }
     * })
     * 
     */
    delete<T extends ProductForOrderDeleteArgs>(args: SelectSubset<T, ProductForOrderDeleteArgs<ExtArgs>>): Prisma__ProductForOrderClient<$Result.GetResult<Prisma.$ProductForOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductForOrder.
     * @param {ProductForOrderUpdateArgs} args - Arguments to update one ProductForOrder.
     * @example
     * // Update one ProductForOrder
     * const productForOrder = await prisma.productForOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductForOrderUpdateArgs>(args: SelectSubset<T, ProductForOrderUpdateArgs<ExtArgs>>): Prisma__ProductForOrderClient<$Result.GetResult<Prisma.$ProductForOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductForOrders.
     * @param {ProductForOrderDeleteManyArgs} args - Arguments to filter ProductForOrders to delete.
     * @example
     * // Delete a few ProductForOrders
     * const { count } = await prisma.productForOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductForOrderDeleteManyArgs>(args?: SelectSubset<T, ProductForOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductForOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductForOrders
     * const productForOrder = await prisma.productForOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductForOrderUpdateManyArgs>(args: SelectSubset<T, ProductForOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductForOrder.
     * @param {ProductForOrderUpsertArgs} args - Arguments to update or create a ProductForOrder.
     * @example
     * // Update or create a ProductForOrder
     * const productForOrder = await prisma.productForOrder.upsert({
     *   create: {
     *     // ... data to create a ProductForOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductForOrder we want to update
     *   }
     * })
     */
    upsert<T extends ProductForOrderUpsertArgs>(args: SelectSubset<T, ProductForOrderUpsertArgs<ExtArgs>>): Prisma__ProductForOrderClient<$Result.GetResult<Prisma.$ProductForOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductForOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForOrderCountArgs} args - Arguments to filter ProductForOrders to count.
     * @example
     * // Count the number of ProductForOrders
     * const count = await prisma.productForOrder.count({
     *   where: {
     *     // ... the filter for the ProductForOrders we want to count
     *   }
     * })
    **/
    count<T extends ProductForOrderCountArgs>(
      args?: Subset<T, ProductForOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductForOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductForOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductForOrderAggregateArgs>(args: Subset<T, ProductForOrderAggregateArgs>): Prisma.PrismaPromise<GetProductForOrderAggregateType<T>>

    /**
     * Group by ProductForOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductForOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductForOrderGroupByArgs['orderBy'] }
        : { orderBy?: ProductForOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductForOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductForOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductForOrder model
   */
  readonly fields: ProductForOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductForOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductForOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends SpecificProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecificProductDefaultArgs<ExtArgs>>): Prisma__SpecificProductClient<$Result.GetResult<Prisma.$SpecificProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductForOrder model
   */
  interface ProductForOrderFieldRefs {
    readonly orderId: FieldRef<"ProductForOrder", 'String'>
    readonly productId: FieldRef<"ProductForOrder", 'String'>
    readonly count: FieldRef<"ProductForOrder", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductForOrder findUnique
   */
  export type ProductForOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForOrder
     */
    select?: ProductForOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForOrder
     */
    omit?: ProductForOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductForOrder to fetch.
     */
    where: ProductForOrderWhereUniqueInput
  }

  /**
   * ProductForOrder findUniqueOrThrow
   */
  export type ProductForOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForOrder
     */
    select?: ProductForOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForOrder
     */
    omit?: ProductForOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductForOrder to fetch.
     */
    where: ProductForOrderWhereUniqueInput
  }

  /**
   * ProductForOrder findFirst
   */
  export type ProductForOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForOrder
     */
    select?: ProductForOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForOrder
     */
    omit?: ProductForOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductForOrder to fetch.
     */
    where?: ProductForOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductForOrders to fetch.
     */
    orderBy?: ProductForOrderOrderByWithRelationInput | ProductForOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductForOrders.
     */
    cursor?: ProductForOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductForOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductForOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductForOrders.
     */
    distinct?: ProductForOrderScalarFieldEnum | ProductForOrderScalarFieldEnum[]
  }

  /**
   * ProductForOrder findFirstOrThrow
   */
  export type ProductForOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForOrder
     */
    select?: ProductForOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForOrder
     */
    omit?: ProductForOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductForOrder to fetch.
     */
    where?: ProductForOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductForOrders to fetch.
     */
    orderBy?: ProductForOrderOrderByWithRelationInput | ProductForOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductForOrders.
     */
    cursor?: ProductForOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductForOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductForOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductForOrders.
     */
    distinct?: ProductForOrderScalarFieldEnum | ProductForOrderScalarFieldEnum[]
  }

  /**
   * ProductForOrder findMany
   */
  export type ProductForOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForOrder
     */
    select?: ProductForOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForOrder
     */
    omit?: ProductForOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductForOrders to fetch.
     */
    where?: ProductForOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductForOrders to fetch.
     */
    orderBy?: ProductForOrderOrderByWithRelationInput | ProductForOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductForOrders.
     */
    cursor?: ProductForOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductForOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductForOrders.
     */
    skip?: number
    distinct?: ProductForOrderScalarFieldEnum | ProductForOrderScalarFieldEnum[]
  }

  /**
   * ProductForOrder create
   */
  export type ProductForOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForOrder
     */
    select?: ProductForOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForOrder
     */
    omit?: ProductForOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductForOrder.
     */
    data: XOR<ProductForOrderCreateInput, ProductForOrderUncheckedCreateInput>
  }

  /**
   * ProductForOrder createMany
   */
  export type ProductForOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductForOrders.
     */
    data: ProductForOrderCreateManyInput | ProductForOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductForOrder update
   */
  export type ProductForOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForOrder
     */
    select?: ProductForOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForOrder
     */
    omit?: ProductForOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductForOrder.
     */
    data: XOR<ProductForOrderUpdateInput, ProductForOrderUncheckedUpdateInput>
    /**
     * Choose, which ProductForOrder to update.
     */
    where: ProductForOrderWhereUniqueInput
  }

  /**
   * ProductForOrder updateMany
   */
  export type ProductForOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductForOrders.
     */
    data: XOR<ProductForOrderUpdateManyMutationInput, ProductForOrderUncheckedUpdateManyInput>
    /**
     * Filter which ProductForOrders to update
     */
    where?: ProductForOrderWhereInput
    /**
     * Limit how many ProductForOrders to update.
     */
    limit?: number
  }

  /**
   * ProductForOrder upsert
   */
  export type ProductForOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForOrder
     */
    select?: ProductForOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForOrder
     */
    omit?: ProductForOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductForOrder to update in case it exists.
     */
    where: ProductForOrderWhereUniqueInput
    /**
     * In case the ProductForOrder found by the `where` argument doesn't exist, create a new ProductForOrder with this data.
     */
    create: XOR<ProductForOrderCreateInput, ProductForOrderUncheckedCreateInput>
    /**
     * In case the ProductForOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductForOrderUpdateInput, ProductForOrderUncheckedUpdateInput>
  }

  /**
   * ProductForOrder delete
   */
  export type ProductForOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForOrder
     */
    select?: ProductForOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForOrder
     */
    omit?: ProductForOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForOrderInclude<ExtArgs> | null
    /**
     * Filter which ProductForOrder to delete.
     */
    where: ProductForOrderWhereUniqueInput
  }

  /**
   * ProductForOrder deleteMany
   */
  export type ProductForOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductForOrders to delete
     */
    where?: ProductForOrderWhereInput
    /**
     * Limit how many ProductForOrders to delete.
     */
    limit?: number
  }

  /**
   * ProductForOrder without action
   */
  export type ProductForOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForOrder
     */
    select?: ProductForOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForOrder
     */
    omit?: ProductForOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForOrderInclude<ExtArgs> | null
  }


  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionMinAggregateOutputType = {
    promo_id: string | null
    code: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
  }

  export type PromotionMaxAggregateOutputType = {
    promo_id: string | null
    code: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
  }

  export type PromotionCountAggregateOutputType = {
    promo_id: number
    code: number
    startDate: number
    endDate: number
    isActive: number
    _all: number
  }


  export type PromotionMinAggregateInputType = {
    promo_id?: true
    code?: true
    startDate?: true
    endDate?: true
    isActive?: true
  }

  export type PromotionMaxAggregateInputType = {
    promo_id?: true
    code?: true
    startDate?: true
    endDate?: true
    isActive?: true
  }

  export type PromotionCountAggregateInputType = {
    promo_id?: true
    code?: true
    startDate?: true
    endDate?: true
    isActive?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithAggregationInput | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    promo_id: string
    code: string
    startDate: Date
    endDate: Date
    isActive: boolean
    _count: PromotionCountAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type PromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    promo_id?: boolean
    code?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    products?: boolean | Promotion$productsArgs<ExtArgs>
    _count?: boolean | PromotionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>



  export type PromotionSelectScalar = {
    promo_id?: boolean
    code?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
  }

  export type PromotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"promo_id" | "code" | "startDate" | "endDate" | "isActive", ExtArgs["result"]["promotion"]>
  export type PromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Promotion$productsArgs<ExtArgs>
    _count?: boolean | PromotionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotion"
    objects: {
      products: Prisma.$ProductForPromotionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      promo_id: string
      code: string
      startDate: Date
      endDate: Date
      isActive: boolean
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }

  type PromotionGetPayload<S extends boolean | null | undefined | PromotionDefaultArgs> = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotion'], meta: { name: 'Promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionFindUniqueArgs>(args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionFindFirstArgs>(args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `promo_id`
     * const promotionWithPromo_idOnly = await prisma.promotion.findMany({ select: { promo_id: true } })
     * 
     */
    findMany<T extends PromotionFindManyArgs>(args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
     */
    create<T extends PromotionCreateArgs>(args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promotions.
     * @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotionCreateManyArgs>(args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
     */
    delete<T extends PromotionDeleteArgs>(args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotionUpdateArgs>(args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotionDeleteManyArgs>(args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotionUpdateManyArgs>(args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
     */
    upsert<T extends PromotionUpsertArgs>(args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotion model
   */
  readonly fields: PromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Promotion$productsArgs<ExtArgs> = {}>(args?: Subset<T, Promotion$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductForPromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promotion model
   */
  interface PromotionFieldRefs {
    readonly promo_id: FieldRef<"Promotion", 'String'>
    readonly code: FieldRef<"Promotion", 'String'>
    readonly startDate: FieldRef<"Promotion", 'DateTime'>
    readonly endDate: FieldRef<"Promotion", 'DateTime'>
    readonly isActive: FieldRef<"Promotion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion create
   */
  export type PromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }

  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to update.
     */
    limit?: number
  }

  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }

  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to delete.
     */
    limit?: number
  }

  /**
   * Promotion.products
   */
  export type Promotion$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForPromotion
     */
    select?: ProductForPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForPromotion
     */
    omit?: ProductForPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForPromotionInclude<ExtArgs> | null
    where?: ProductForPromotionWhereInput
    orderBy?: ProductForPromotionOrderByWithRelationInput | ProductForPromotionOrderByWithRelationInput[]
    cursor?: ProductForPromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductForPromotionScalarFieldEnum | ProductForPromotionScalarFieldEnum[]
  }

  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
  }


  /**
   * Model ProductForPromotion
   */

  export type AggregateProductForPromotion = {
    _count: ProductForPromotionCountAggregateOutputType | null
    _min: ProductForPromotionMinAggregateOutputType | null
    _max: ProductForPromotionMaxAggregateOutputType | null
  }

  export type ProductForPromotionMinAggregateOutputType = {
    productId: string | null
    promotionId: string | null
  }

  export type ProductForPromotionMaxAggregateOutputType = {
    productId: string | null
    promotionId: string | null
  }

  export type ProductForPromotionCountAggregateOutputType = {
    productId: number
    promotionId: number
    _all: number
  }


  export type ProductForPromotionMinAggregateInputType = {
    productId?: true
    promotionId?: true
  }

  export type ProductForPromotionMaxAggregateInputType = {
    productId?: true
    promotionId?: true
  }

  export type ProductForPromotionCountAggregateInputType = {
    productId?: true
    promotionId?: true
    _all?: true
  }

  export type ProductForPromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductForPromotion to aggregate.
     */
    where?: ProductForPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductForPromotions to fetch.
     */
    orderBy?: ProductForPromotionOrderByWithRelationInput | ProductForPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductForPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductForPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductForPromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductForPromotions
    **/
    _count?: true | ProductForPromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductForPromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductForPromotionMaxAggregateInputType
  }

  export type GetProductForPromotionAggregateType<T extends ProductForPromotionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductForPromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductForPromotion[P]>
      : GetScalarType<T[P], AggregateProductForPromotion[P]>
  }




  export type ProductForPromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductForPromotionWhereInput
    orderBy?: ProductForPromotionOrderByWithAggregationInput | ProductForPromotionOrderByWithAggregationInput[]
    by: ProductForPromotionScalarFieldEnum[] | ProductForPromotionScalarFieldEnum
    having?: ProductForPromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductForPromotionCountAggregateInputType | true
    _min?: ProductForPromotionMinAggregateInputType
    _max?: ProductForPromotionMaxAggregateInputType
  }

  export type ProductForPromotionGroupByOutputType = {
    productId: string
    promotionId: string
    _count: ProductForPromotionCountAggregateOutputType | null
    _min: ProductForPromotionMinAggregateOutputType | null
    _max: ProductForPromotionMaxAggregateOutputType | null
  }

  type GetProductForPromotionGroupByPayload<T extends ProductForPromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductForPromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductForPromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductForPromotionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductForPromotionGroupByOutputType[P]>
        }
      >
    >


  export type ProductForPromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    promotionId?: boolean
    product?: boolean | SpecificProductDefaultArgs<ExtArgs>
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productForPromotion"]>



  export type ProductForPromotionSelectScalar = {
    productId?: boolean
    promotionId?: boolean
  }

  export type ProductForPromotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "promotionId", ExtArgs["result"]["productForPromotion"]>
  export type ProductForPromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | SpecificProductDefaultArgs<ExtArgs>
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }

  export type $ProductForPromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductForPromotion"
    objects: {
      product: Prisma.$SpecificProductPayload<ExtArgs>
      promotion: Prisma.$PromotionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: string
      promotionId: string
    }, ExtArgs["result"]["productForPromotion"]>
    composites: {}
  }

  type ProductForPromotionGetPayload<S extends boolean | null | undefined | ProductForPromotionDefaultArgs> = $Result.GetResult<Prisma.$ProductForPromotionPayload, S>

  type ProductForPromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductForPromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductForPromotionCountAggregateInputType | true
    }

  export interface ProductForPromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductForPromotion'], meta: { name: 'ProductForPromotion' } }
    /**
     * Find zero or one ProductForPromotion that matches the filter.
     * @param {ProductForPromotionFindUniqueArgs} args - Arguments to find a ProductForPromotion
     * @example
     * // Get one ProductForPromotion
     * const productForPromotion = await prisma.productForPromotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductForPromotionFindUniqueArgs>(args: SelectSubset<T, ProductForPromotionFindUniqueArgs<ExtArgs>>): Prisma__ProductForPromotionClient<$Result.GetResult<Prisma.$ProductForPromotionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductForPromotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductForPromotionFindUniqueOrThrowArgs} args - Arguments to find a ProductForPromotion
     * @example
     * // Get one ProductForPromotion
     * const productForPromotion = await prisma.productForPromotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductForPromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductForPromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductForPromotionClient<$Result.GetResult<Prisma.$ProductForPromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductForPromotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForPromotionFindFirstArgs} args - Arguments to find a ProductForPromotion
     * @example
     * // Get one ProductForPromotion
     * const productForPromotion = await prisma.productForPromotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductForPromotionFindFirstArgs>(args?: SelectSubset<T, ProductForPromotionFindFirstArgs<ExtArgs>>): Prisma__ProductForPromotionClient<$Result.GetResult<Prisma.$ProductForPromotionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductForPromotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForPromotionFindFirstOrThrowArgs} args - Arguments to find a ProductForPromotion
     * @example
     * // Get one ProductForPromotion
     * const productForPromotion = await prisma.productForPromotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductForPromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductForPromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductForPromotionClient<$Result.GetResult<Prisma.$ProductForPromotionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductForPromotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForPromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductForPromotions
     * const productForPromotions = await prisma.productForPromotion.findMany()
     * 
     * // Get first 10 ProductForPromotions
     * const productForPromotions = await prisma.productForPromotion.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productForPromotionWithProductIdOnly = await prisma.productForPromotion.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductForPromotionFindManyArgs>(args?: SelectSubset<T, ProductForPromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductForPromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductForPromotion.
     * @param {ProductForPromotionCreateArgs} args - Arguments to create a ProductForPromotion.
     * @example
     * // Create one ProductForPromotion
     * const ProductForPromotion = await prisma.productForPromotion.create({
     *   data: {
     *     // ... data to create a ProductForPromotion
     *   }
     * })
     * 
     */
    create<T extends ProductForPromotionCreateArgs>(args: SelectSubset<T, ProductForPromotionCreateArgs<ExtArgs>>): Prisma__ProductForPromotionClient<$Result.GetResult<Prisma.$ProductForPromotionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductForPromotions.
     * @param {ProductForPromotionCreateManyArgs} args - Arguments to create many ProductForPromotions.
     * @example
     * // Create many ProductForPromotions
     * const productForPromotion = await prisma.productForPromotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductForPromotionCreateManyArgs>(args?: SelectSubset<T, ProductForPromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductForPromotion.
     * @param {ProductForPromotionDeleteArgs} args - Arguments to delete one ProductForPromotion.
     * @example
     * // Delete one ProductForPromotion
     * const ProductForPromotion = await prisma.productForPromotion.delete({
     *   where: {
     *     // ... filter to delete one ProductForPromotion
     *   }
     * })
     * 
     */
    delete<T extends ProductForPromotionDeleteArgs>(args: SelectSubset<T, ProductForPromotionDeleteArgs<ExtArgs>>): Prisma__ProductForPromotionClient<$Result.GetResult<Prisma.$ProductForPromotionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductForPromotion.
     * @param {ProductForPromotionUpdateArgs} args - Arguments to update one ProductForPromotion.
     * @example
     * // Update one ProductForPromotion
     * const productForPromotion = await prisma.productForPromotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductForPromotionUpdateArgs>(args: SelectSubset<T, ProductForPromotionUpdateArgs<ExtArgs>>): Prisma__ProductForPromotionClient<$Result.GetResult<Prisma.$ProductForPromotionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductForPromotions.
     * @param {ProductForPromotionDeleteManyArgs} args - Arguments to filter ProductForPromotions to delete.
     * @example
     * // Delete a few ProductForPromotions
     * const { count } = await prisma.productForPromotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductForPromotionDeleteManyArgs>(args?: SelectSubset<T, ProductForPromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductForPromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForPromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductForPromotions
     * const productForPromotion = await prisma.productForPromotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductForPromotionUpdateManyArgs>(args: SelectSubset<T, ProductForPromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductForPromotion.
     * @param {ProductForPromotionUpsertArgs} args - Arguments to update or create a ProductForPromotion.
     * @example
     * // Update or create a ProductForPromotion
     * const productForPromotion = await prisma.productForPromotion.upsert({
     *   create: {
     *     // ... data to create a ProductForPromotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductForPromotion we want to update
     *   }
     * })
     */
    upsert<T extends ProductForPromotionUpsertArgs>(args: SelectSubset<T, ProductForPromotionUpsertArgs<ExtArgs>>): Prisma__ProductForPromotionClient<$Result.GetResult<Prisma.$ProductForPromotionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductForPromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForPromotionCountArgs} args - Arguments to filter ProductForPromotions to count.
     * @example
     * // Count the number of ProductForPromotions
     * const count = await prisma.productForPromotion.count({
     *   where: {
     *     // ... the filter for the ProductForPromotions we want to count
     *   }
     * })
    **/
    count<T extends ProductForPromotionCountArgs>(
      args?: Subset<T, ProductForPromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductForPromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductForPromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForPromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductForPromotionAggregateArgs>(args: Subset<T, ProductForPromotionAggregateArgs>): Prisma.PrismaPromise<GetProductForPromotionAggregateType<T>>

    /**
     * Group by ProductForPromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductForPromotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductForPromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductForPromotionGroupByArgs['orderBy'] }
        : { orderBy?: ProductForPromotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductForPromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductForPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductForPromotion model
   */
  readonly fields: ProductForPromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductForPromotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductForPromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends SpecificProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecificProductDefaultArgs<ExtArgs>>): Prisma__SpecificProductClient<$Result.GetResult<Prisma.$SpecificProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    promotion<T extends PromotionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromotionDefaultArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductForPromotion model
   */
  interface ProductForPromotionFieldRefs {
    readonly productId: FieldRef<"ProductForPromotion", 'String'>
    readonly promotionId: FieldRef<"ProductForPromotion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductForPromotion findUnique
   */
  export type ProductForPromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForPromotion
     */
    select?: ProductForPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForPromotion
     */
    omit?: ProductForPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductForPromotion to fetch.
     */
    where: ProductForPromotionWhereUniqueInput
  }

  /**
   * ProductForPromotion findUniqueOrThrow
   */
  export type ProductForPromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForPromotion
     */
    select?: ProductForPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForPromotion
     */
    omit?: ProductForPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductForPromotion to fetch.
     */
    where: ProductForPromotionWhereUniqueInput
  }

  /**
   * ProductForPromotion findFirst
   */
  export type ProductForPromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForPromotion
     */
    select?: ProductForPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForPromotion
     */
    omit?: ProductForPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductForPromotion to fetch.
     */
    where?: ProductForPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductForPromotions to fetch.
     */
    orderBy?: ProductForPromotionOrderByWithRelationInput | ProductForPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductForPromotions.
     */
    cursor?: ProductForPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductForPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductForPromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductForPromotions.
     */
    distinct?: ProductForPromotionScalarFieldEnum | ProductForPromotionScalarFieldEnum[]
  }

  /**
   * ProductForPromotion findFirstOrThrow
   */
  export type ProductForPromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForPromotion
     */
    select?: ProductForPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForPromotion
     */
    omit?: ProductForPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductForPromotion to fetch.
     */
    where?: ProductForPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductForPromotions to fetch.
     */
    orderBy?: ProductForPromotionOrderByWithRelationInput | ProductForPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductForPromotions.
     */
    cursor?: ProductForPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductForPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductForPromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductForPromotions.
     */
    distinct?: ProductForPromotionScalarFieldEnum | ProductForPromotionScalarFieldEnum[]
  }

  /**
   * ProductForPromotion findMany
   */
  export type ProductForPromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForPromotion
     */
    select?: ProductForPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForPromotion
     */
    omit?: ProductForPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductForPromotions to fetch.
     */
    where?: ProductForPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductForPromotions to fetch.
     */
    orderBy?: ProductForPromotionOrderByWithRelationInput | ProductForPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductForPromotions.
     */
    cursor?: ProductForPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductForPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductForPromotions.
     */
    skip?: number
    distinct?: ProductForPromotionScalarFieldEnum | ProductForPromotionScalarFieldEnum[]
  }

  /**
   * ProductForPromotion create
   */
  export type ProductForPromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForPromotion
     */
    select?: ProductForPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForPromotion
     */
    omit?: ProductForPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForPromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductForPromotion.
     */
    data: XOR<ProductForPromotionCreateInput, ProductForPromotionUncheckedCreateInput>
  }

  /**
   * ProductForPromotion createMany
   */
  export type ProductForPromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductForPromotions.
     */
    data: ProductForPromotionCreateManyInput | ProductForPromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductForPromotion update
   */
  export type ProductForPromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForPromotion
     */
    select?: ProductForPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForPromotion
     */
    omit?: ProductForPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForPromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductForPromotion.
     */
    data: XOR<ProductForPromotionUpdateInput, ProductForPromotionUncheckedUpdateInput>
    /**
     * Choose, which ProductForPromotion to update.
     */
    where: ProductForPromotionWhereUniqueInput
  }

  /**
   * ProductForPromotion updateMany
   */
  export type ProductForPromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductForPromotions.
     */
    data: XOR<ProductForPromotionUpdateManyMutationInput, ProductForPromotionUncheckedUpdateManyInput>
    /**
     * Filter which ProductForPromotions to update
     */
    where?: ProductForPromotionWhereInput
    /**
     * Limit how many ProductForPromotions to update.
     */
    limit?: number
  }

  /**
   * ProductForPromotion upsert
   */
  export type ProductForPromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForPromotion
     */
    select?: ProductForPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForPromotion
     */
    omit?: ProductForPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForPromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductForPromotion to update in case it exists.
     */
    where: ProductForPromotionWhereUniqueInput
    /**
     * In case the ProductForPromotion found by the `where` argument doesn't exist, create a new ProductForPromotion with this data.
     */
    create: XOR<ProductForPromotionCreateInput, ProductForPromotionUncheckedCreateInput>
    /**
     * In case the ProductForPromotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductForPromotionUpdateInput, ProductForPromotionUncheckedUpdateInput>
  }

  /**
   * ProductForPromotion delete
   */
  export type ProductForPromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForPromotion
     */
    select?: ProductForPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForPromotion
     */
    omit?: ProductForPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForPromotionInclude<ExtArgs> | null
    /**
     * Filter which ProductForPromotion to delete.
     */
    where: ProductForPromotionWhereUniqueInput
  }

  /**
   * ProductForPromotion deleteMany
   */
  export type ProductForPromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductForPromotions to delete
     */
    where?: ProductForPromotionWhereInput
    /**
     * Limit how many ProductForPromotions to delete.
     */
    limit?: number
  }

  /**
   * ProductForPromotion without action
   */
  export type ProductForPromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductForPromotion
     */
    select?: ProductForPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductForPromotion
     */
    omit?: ProductForPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductForPromotionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GenericProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    subtitle: 'subtitle',
    categorieId: 'categorieId'
  };

  export type GenericProductScalarFieldEnum = (typeof GenericProductScalarFieldEnum)[keyof typeof GenericProductScalarFieldEnum]


  export const CategorieScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const DetailsScalarFieldEnum: {
    id: 'id',
    idProd: 'idProd',
    text: 'text'
  };

  export type DetailsScalarFieldEnum = (typeof DetailsScalarFieldEnum)[keyof typeof DetailsScalarFieldEnum]


  export const SpecificProductScalarFieldEnum: {
    genericId: 'genericId',
    id: 'id',
    image: 'image',
    price: 'price',
    color: 'color',
    variantName: 'variantName',
    stock: 'stock'
  };

  export type SpecificProductScalarFieldEnum = (typeof SpecificProductScalarFieldEnum)[keyof typeof SpecificProductScalarFieldEnum]


  export const ImagesScalarFieldEnum: {
    id: 'id',
    link: 'link',
    prodId: 'prodId'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ProductForOrderScalarFieldEnum: {
    orderId: 'orderId',
    productId: 'productId',
    count: 'count'
  };

  export type ProductForOrderScalarFieldEnum = (typeof ProductForOrderScalarFieldEnum)[keyof typeof ProductForOrderScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    promo_id: 'promo_id',
    code: 'code',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const ProductForPromotionScalarFieldEnum: {
    productId: 'productId',
    promotionId: 'promotionId'
  };

  export type ProductForPromotionScalarFieldEnum = (typeof ProductForPromotionScalarFieldEnum)[keyof typeof ProductForPromotionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    image: 'image'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const GenericProductOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    subtitle: 'subtitle',
    categorieId: 'categorieId'
  };

  export type GenericProductOrderByRelevanceFieldEnum = (typeof GenericProductOrderByRelevanceFieldEnum)[keyof typeof GenericProductOrderByRelevanceFieldEnum]


  export const CategorieOrderByRelevanceFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CategorieOrderByRelevanceFieldEnum = (typeof CategorieOrderByRelevanceFieldEnum)[keyof typeof CategorieOrderByRelevanceFieldEnum]


  export const DetailsOrderByRelevanceFieldEnum: {
    id: 'id',
    idProd: 'idProd',
    text: 'text'
  };

  export type DetailsOrderByRelevanceFieldEnum = (typeof DetailsOrderByRelevanceFieldEnum)[keyof typeof DetailsOrderByRelevanceFieldEnum]


  export const SpecificProductOrderByRelevanceFieldEnum: {
    genericId: 'genericId',
    id: 'id',
    image: 'image',
    color: 'color',
    variantName: 'variantName'
  };

  export type SpecificProductOrderByRelevanceFieldEnum = (typeof SpecificProductOrderByRelevanceFieldEnum)[keyof typeof SpecificProductOrderByRelevanceFieldEnum]


  export const ImagesOrderByRelevanceFieldEnum: {
    id: 'id',
    link: 'link',
    prodId: 'prodId'
  };

  export type ImagesOrderByRelevanceFieldEnum = (typeof ImagesOrderByRelevanceFieldEnum)[keyof typeof ImagesOrderByRelevanceFieldEnum]


  export const OrderOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum]


  export const ProductForOrderOrderByRelevanceFieldEnum: {
    orderId: 'orderId',
    productId: 'productId'
  };

  export type ProductForOrderOrderByRelevanceFieldEnum = (typeof ProductForOrderOrderByRelevanceFieldEnum)[keyof typeof ProductForOrderOrderByRelevanceFieldEnum]


  export const PromotionOrderByRelevanceFieldEnum: {
    promo_id: 'promo_id',
    code: 'code'
  };

  export type PromotionOrderByRelevanceFieldEnum = (typeof PromotionOrderByRelevanceFieldEnum)[keyof typeof PromotionOrderByRelevanceFieldEnum]


  export const ProductForPromotionOrderByRelevanceFieldEnum: {
    productId: 'productId',
    promotionId: 'promotionId'
  };

  export type ProductForPromotionOrderByRelevanceFieldEnum = (typeof ProductForPromotionOrderByRelevanceFieldEnum)[keyof typeof ProductForPromotionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    orders?: OrderOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    orders?: OrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type GenericProductWhereInput = {
    AND?: GenericProductWhereInput | GenericProductWhereInput[]
    OR?: GenericProductWhereInput[]
    NOT?: GenericProductWhereInput | GenericProductWhereInput[]
    id?: StringFilter<"GenericProduct"> | string
    name?: StringFilter<"GenericProduct"> | string
    description?: StringFilter<"GenericProduct"> | string
    subtitle?: StringFilter<"GenericProduct"> | string
    categorieId?: StringFilter<"GenericProduct"> | string
    variants?: SpecificProductListRelationFilter
    details?: DetailsListRelationFilter
    categorie?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
  }

  export type GenericProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subtitle?: SortOrder
    categorieId?: SortOrder
    variants?: SpecificProductOrderByRelationAggregateInput
    details?: DetailsOrderByRelationAggregateInput
    categorie?: CategorieOrderByWithRelationInput
    _relevance?: GenericProductOrderByRelevanceInput
  }

  export type GenericProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GenericProductWhereInput | GenericProductWhereInput[]
    OR?: GenericProductWhereInput[]
    NOT?: GenericProductWhereInput | GenericProductWhereInput[]
    name?: StringFilter<"GenericProduct"> | string
    description?: StringFilter<"GenericProduct"> | string
    subtitle?: StringFilter<"GenericProduct"> | string
    categorieId?: StringFilter<"GenericProduct"> | string
    variants?: SpecificProductListRelationFilter
    details?: DetailsListRelationFilter
    categorie?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
  }, "id">

  export type GenericProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subtitle?: SortOrder
    categorieId?: SortOrder
    _count?: GenericProductCountOrderByAggregateInput
    _max?: GenericProductMaxOrderByAggregateInput
    _min?: GenericProductMinOrderByAggregateInput
  }

  export type GenericProductScalarWhereWithAggregatesInput = {
    AND?: GenericProductScalarWhereWithAggregatesInput | GenericProductScalarWhereWithAggregatesInput[]
    OR?: GenericProductScalarWhereWithAggregatesInput[]
    NOT?: GenericProductScalarWhereWithAggregatesInput | GenericProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GenericProduct"> | string
    name?: StringWithAggregatesFilter<"GenericProduct"> | string
    description?: StringWithAggregatesFilter<"GenericProduct"> | string
    subtitle?: StringWithAggregatesFilter<"GenericProduct"> | string
    categorieId?: StringWithAggregatesFilter<"GenericProduct"> | string
  }

  export type CategorieWhereInput = {
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    id?: StringFilter<"Categorie"> | string
    nombre?: StringFilter<"Categorie"> | string
    productos?: GenericProductListRelationFilter
  }

  export type CategorieOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    productos?: GenericProductOrderByRelationAggregateInput
    _relevance?: CategorieOrderByRelevanceInput
  }

  export type CategorieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    nombre?: StringFilter<"Categorie"> | string
    productos?: GenericProductListRelationFilter
  }, "id">

  export type CategorieOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CategorieCountOrderByAggregateInput
    _max?: CategorieMaxOrderByAggregateInput
    _min?: CategorieMinOrderByAggregateInput
  }

  export type CategorieScalarWhereWithAggregatesInput = {
    AND?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    OR?: CategorieScalarWhereWithAggregatesInput[]
    NOT?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categorie"> | string
    nombre?: StringWithAggregatesFilter<"Categorie"> | string
  }

  export type DetailsWhereInput = {
    AND?: DetailsWhereInput | DetailsWhereInput[]
    OR?: DetailsWhereInput[]
    NOT?: DetailsWhereInput | DetailsWhereInput[]
    id?: StringFilter<"Details"> | string
    idProd?: StringFilter<"Details"> | string
    text?: StringFilter<"Details"> | string
    prod?: XOR<GenericProductScalarRelationFilter, GenericProductWhereInput>
  }

  export type DetailsOrderByWithRelationInput = {
    id?: SortOrder
    idProd?: SortOrder
    text?: SortOrder
    prod?: GenericProductOrderByWithRelationInput
    _relevance?: DetailsOrderByRelevanceInput
  }

  export type DetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DetailsWhereInput | DetailsWhereInput[]
    OR?: DetailsWhereInput[]
    NOT?: DetailsWhereInput | DetailsWhereInput[]
    idProd?: StringFilter<"Details"> | string
    text?: StringFilter<"Details"> | string
    prod?: XOR<GenericProductScalarRelationFilter, GenericProductWhereInput>
  }, "id">

  export type DetailsOrderByWithAggregationInput = {
    id?: SortOrder
    idProd?: SortOrder
    text?: SortOrder
    _count?: DetailsCountOrderByAggregateInput
    _max?: DetailsMaxOrderByAggregateInput
    _min?: DetailsMinOrderByAggregateInput
  }

  export type DetailsScalarWhereWithAggregatesInput = {
    AND?: DetailsScalarWhereWithAggregatesInput | DetailsScalarWhereWithAggregatesInput[]
    OR?: DetailsScalarWhereWithAggregatesInput[]
    NOT?: DetailsScalarWhereWithAggregatesInput | DetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Details"> | string
    idProd?: StringWithAggregatesFilter<"Details"> | string
    text?: StringWithAggregatesFilter<"Details"> | string
  }

  export type SpecificProductWhereInput = {
    AND?: SpecificProductWhereInput | SpecificProductWhereInput[]
    OR?: SpecificProductWhereInput[]
    NOT?: SpecificProductWhereInput | SpecificProductWhereInput[]
    genericId?: StringFilter<"SpecificProduct"> | string
    id?: StringFilter<"SpecificProduct"> | string
    image?: StringNullableFilter<"SpecificProduct"> | string | null
    price?: FloatFilter<"SpecificProduct"> | number
    color?: StringFilter<"SpecificProduct"> | string
    variantName?: StringFilter<"SpecificProduct"> | string
    stock?: IntFilter<"SpecificProduct"> | number
    order?: ProductForOrderListRelationFilter
    promotions?: ProductForPromotionListRelationFilter
    genericProd?: XOR<GenericProductScalarRelationFilter, GenericProductWhereInput>
    images?: ImagesListRelationFilter
  }

  export type SpecificProductOrderByWithRelationInput = {
    genericId?: SortOrder
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    color?: SortOrder
    variantName?: SortOrder
    stock?: SortOrder
    order?: ProductForOrderOrderByRelationAggregateInput
    promotions?: ProductForPromotionOrderByRelationAggregateInput
    genericProd?: GenericProductOrderByWithRelationInput
    images?: ImagesOrderByRelationAggregateInput
    _relevance?: SpecificProductOrderByRelevanceInput
  }

  export type SpecificProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpecificProductWhereInput | SpecificProductWhereInput[]
    OR?: SpecificProductWhereInput[]
    NOT?: SpecificProductWhereInput | SpecificProductWhereInput[]
    genericId?: StringFilter<"SpecificProduct"> | string
    image?: StringNullableFilter<"SpecificProduct"> | string | null
    price?: FloatFilter<"SpecificProduct"> | number
    color?: StringFilter<"SpecificProduct"> | string
    variantName?: StringFilter<"SpecificProduct"> | string
    stock?: IntFilter<"SpecificProduct"> | number
    order?: ProductForOrderListRelationFilter
    promotions?: ProductForPromotionListRelationFilter
    genericProd?: XOR<GenericProductScalarRelationFilter, GenericProductWhereInput>
    images?: ImagesListRelationFilter
  }, "id">

  export type SpecificProductOrderByWithAggregationInput = {
    genericId?: SortOrder
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    color?: SortOrder
    variantName?: SortOrder
    stock?: SortOrder
    _count?: SpecificProductCountOrderByAggregateInput
    _avg?: SpecificProductAvgOrderByAggregateInput
    _max?: SpecificProductMaxOrderByAggregateInput
    _min?: SpecificProductMinOrderByAggregateInput
    _sum?: SpecificProductSumOrderByAggregateInput
  }

  export type SpecificProductScalarWhereWithAggregatesInput = {
    AND?: SpecificProductScalarWhereWithAggregatesInput | SpecificProductScalarWhereWithAggregatesInput[]
    OR?: SpecificProductScalarWhereWithAggregatesInput[]
    NOT?: SpecificProductScalarWhereWithAggregatesInput | SpecificProductScalarWhereWithAggregatesInput[]
    genericId?: StringWithAggregatesFilter<"SpecificProduct"> | string
    id?: StringWithAggregatesFilter<"SpecificProduct"> | string
    image?: StringNullableWithAggregatesFilter<"SpecificProduct"> | string | null
    price?: FloatWithAggregatesFilter<"SpecificProduct"> | number
    color?: StringWithAggregatesFilter<"SpecificProduct"> | string
    variantName?: StringWithAggregatesFilter<"SpecificProduct"> | string
    stock?: IntWithAggregatesFilter<"SpecificProduct"> | number
  }

  export type ImagesWhereInput = {
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    id?: StringFilter<"Images"> | string
    link?: StringFilter<"Images"> | string
    prodId?: StringFilter<"Images"> | string
    product?: XOR<SpecificProductScalarRelationFilter, SpecificProductWhereInput>
  }

  export type ImagesOrderByWithRelationInput = {
    id?: SortOrder
    link?: SortOrder
    prodId?: SortOrder
    product?: SpecificProductOrderByWithRelationInput
    _relevance?: ImagesOrderByRelevanceInput
  }

  export type ImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    link?: StringFilter<"Images"> | string
    prodId?: StringFilter<"Images"> | string
    product?: XOR<SpecificProductScalarRelationFilter, SpecificProductWhereInput>
  }, "id">

  export type ImagesOrderByWithAggregationInput = {
    id?: SortOrder
    link?: SortOrder
    prodId?: SortOrder
    _count?: ImagesCountOrderByAggregateInput
    _max?: ImagesMaxOrderByAggregateInput
    _min?: ImagesMinOrderByAggregateInput
  }

  export type ImagesScalarWhereWithAggregatesInput = {
    AND?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    OR?: ImagesScalarWhereWithAggregatesInput[]
    NOT?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Images"> | string
    link?: StringWithAggregatesFilter<"Images"> | string
    prodId?: StringWithAggregatesFilter<"Images"> | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    products?: ProductForOrderListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    products?: ProductForOrderOrderByRelationAggregateInput
    _relevance?: OrderOrderByRelevanceInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    products?: ProductForOrderListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type ProductForOrderWhereInput = {
    AND?: ProductForOrderWhereInput | ProductForOrderWhereInput[]
    OR?: ProductForOrderWhereInput[]
    NOT?: ProductForOrderWhereInput | ProductForOrderWhereInput[]
    orderId?: StringFilter<"ProductForOrder"> | string
    productId?: StringFilter<"ProductForOrder"> | string
    count?: IntFilter<"ProductForOrder"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<SpecificProductScalarRelationFilter, SpecificProductWhereInput>
  }

  export type ProductForOrderOrderByWithRelationInput = {
    orderId?: SortOrder
    productId?: SortOrder
    count?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: SpecificProductOrderByWithRelationInput
    _relevance?: ProductForOrderOrderByRelevanceInput
  }

  export type ProductForOrderWhereUniqueInput = Prisma.AtLeast<{
    orderId_productId?: ProductForOrderOrderIdProductIdCompoundUniqueInput
    AND?: ProductForOrderWhereInput | ProductForOrderWhereInput[]
    OR?: ProductForOrderWhereInput[]
    NOT?: ProductForOrderWhereInput | ProductForOrderWhereInput[]
    orderId?: StringFilter<"ProductForOrder"> | string
    productId?: StringFilter<"ProductForOrder"> | string
    count?: IntFilter<"ProductForOrder"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<SpecificProductScalarRelationFilter, SpecificProductWhereInput>
  }, "orderId_productId">

  export type ProductForOrderOrderByWithAggregationInput = {
    orderId?: SortOrder
    productId?: SortOrder
    count?: SortOrder
    _count?: ProductForOrderCountOrderByAggregateInput
    _avg?: ProductForOrderAvgOrderByAggregateInput
    _max?: ProductForOrderMaxOrderByAggregateInput
    _min?: ProductForOrderMinOrderByAggregateInput
    _sum?: ProductForOrderSumOrderByAggregateInput
  }

  export type ProductForOrderScalarWhereWithAggregatesInput = {
    AND?: ProductForOrderScalarWhereWithAggregatesInput | ProductForOrderScalarWhereWithAggregatesInput[]
    OR?: ProductForOrderScalarWhereWithAggregatesInput[]
    NOT?: ProductForOrderScalarWhereWithAggregatesInput | ProductForOrderScalarWhereWithAggregatesInput[]
    orderId?: StringWithAggregatesFilter<"ProductForOrder"> | string
    productId?: StringWithAggregatesFilter<"ProductForOrder"> | string
    count?: IntWithAggregatesFilter<"ProductForOrder"> | number
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    promo_id?: StringFilter<"Promotion"> | string
    code?: StringFilter<"Promotion"> | string
    startDate?: DateTimeFilter<"Promotion"> | Date | string
    endDate?: DateTimeFilter<"Promotion"> | Date | string
    isActive?: BoolFilter<"Promotion"> | boolean
    products?: ProductForPromotionListRelationFilter
  }

  export type PromotionOrderByWithRelationInput = {
    promo_id?: SortOrder
    code?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    products?: ProductForPromotionOrderByRelationAggregateInput
    _relevance?: PromotionOrderByRelevanceInput
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<{
    promo_id?: string
    code?: string
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    startDate?: DateTimeFilter<"Promotion"> | Date | string
    endDate?: DateTimeFilter<"Promotion"> | Date | string
    isActive?: BoolFilter<"Promotion"> | boolean
    products?: ProductForPromotionListRelationFilter
  }, "promo_id" | "code">

  export type PromotionOrderByWithAggregationInput = {
    promo_id?: SortOrder
    code?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    promo_id?: StringWithAggregatesFilter<"Promotion"> | string
    code?: StringWithAggregatesFilter<"Promotion"> | string
    startDate?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Promotion"> | boolean
  }

  export type ProductForPromotionWhereInput = {
    AND?: ProductForPromotionWhereInput | ProductForPromotionWhereInput[]
    OR?: ProductForPromotionWhereInput[]
    NOT?: ProductForPromotionWhereInput | ProductForPromotionWhereInput[]
    productId?: StringFilter<"ProductForPromotion"> | string
    promotionId?: StringFilter<"ProductForPromotion"> | string
    product?: XOR<SpecificProductScalarRelationFilter, SpecificProductWhereInput>
    promotion?: XOR<PromotionScalarRelationFilter, PromotionWhereInput>
  }

  export type ProductForPromotionOrderByWithRelationInput = {
    productId?: SortOrder
    promotionId?: SortOrder
    product?: SpecificProductOrderByWithRelationInput
    promotion?: PromotionOrderByWithRelationInput
    _relevance?: ProductForPromotionOrderByRelevanceInput
  }

  export type ProductForPromotionWhereUniqueInput = Prisma.AtLeast<{
    productId_promotionId?: ProductForPromotionProductIdPromotionIdCompoundUniqueInput
    AND?: ProductForPromotionWhereInput | ProductForPromotionWhereInput[]
    OR?: ProductForPromotionWhereInput[]
    NOT?: ProductForPromotionWhereInput | ProductForPromotionWhereInput[]
    productId?: StringFilter<"ProductForPromotion"> | string
    promotionId?: StringFilter<"ProductForPromotion"> | string
    product?: XOR<SpecificProductScalarRelationFilter, SpecificProductWhereInput>
    promotion?: XOR<PromotionScalarRelationFilter, PromotionWhereInput>
  }, "productId_promotionId">

  export type ProductForPromotionOrderByWithAggregationInput = {
    productId?: SortOrder
    promotionId?: SortOrder
    _count?: ProductForPromotionCountOrderByAggregateInput
    _max?: ProductForPromotionMaxOrderByAggregateInput
    _min?: ProductForPromotionMinOrderByAggregateInput
  }

  export type ProductForPromotionScalarWhereWithAggregatesInput = {
    AND?: ProductForPromotionScalarWhereWithAggregatesInput | ProductForPromotionScalarWhereWithAggregatesInput[]
    OR?: ProductForPromotionScalarWhereWithAggregatesInput[]
    NOT?: ProductForPromotionScalarWhereWithAggregatesInput | ProductForPromotionScalarWhereWithAggregatesInput[]
    productId?: StringWithAggregatesFilter<"ProductForPromotion"> | string
    promotionId?: StringWithAggregatesFilter<"ProductForPromotion"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    image?: string | null
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    image?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenericProductCreateInput = {
    id?: string
    name: string
    description: string
    subtitle: string
    variants?: SpecificProductCreateNestedManyWithoutGenericProdInput
    details?: DetailsCreateNestedManyWithoutProdInput
    categorie: CategorieCreateNestedOneWithoutProductosInput
  }

  export type GenericProductUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    subtitle: string
    categorieId: string
    variants?: SpecificProductUncheckedCreateNestedManyWithoutGenericProdInput
    details?: DetailsUncheckedCreateNestedManyWithoutProdInput
  }

  export type GenericProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    variants?: SpecificProductUpdateManyWithoutGenericProdNestedInput
    details?: DetailsUpdateManyWithoutProdNestedInput
    categorie?: CategorieUpdateOneRequiredWithoutProductosNestedInput
  }

  export type GenericProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    categorieId?: StringFieldUpdateOperationsInput | string
    variants?: SpecificProductUncheckedUpdateManyWithoutGenericProdNestedInput
    details?: DetailsUncheckedUpdateManyWithoutProdNestedInput
  }

  export type GenericProductCreateManyInput = {
    id?: string
    name: string
    description: string
    subtitle: string
    categorieId: string
  }

  export type GenericProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
  }

  export type GenericProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    categorieId?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieCreateInput = {
    id?: string
    nombre: string
    productos?: GenericProductCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUncheckedCreateInput = {
    id?: string
    nombre: string
    productos?: GenericProductUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: GenericProductUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: GenericProductUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieCreateManyInput = {
    id?: string
    nombre: string
  }

  export type CategorieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DetailsCreateInput = {
    id?: string
    text: string
    prod: GenericProductCreateNestedOneWithoutDetailsInput
  }

  export type DetailsUncheckedCreateInput = {
    id?: string
    idProd: string
    text: string
  }

  export type DetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    prod?: GenericProductUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type DetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idProd?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DetailsCreateManyInput = {
    id?: string
    idProd: string
    text: string
  }

  export type DetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idProd?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type SpecificProductCreateInput = {
    id?: string
    image?: string | null
    price: number
    color?: string
    variantName: string
    stock: number
    order?: ProductForOrderCreateNestedManyWithoutProductInput
    promotions?: ProductForPromotionCreateNestedManyWithoutProductInput
    genericProd: GenericProductCreateNestedOneWithoutVariantsInput
    images?: ImagesCreateNestedManyWithoutProductInput
  }

  export type SpecificProductUncheckedCreateInput = {
    genericId: string
    id?: string
    image?: string | null
    price: number
    color?: string
    variantName: string
    stock: number
    order?: ProductForOrderUncheckedCreateNestedManyWithoutProductInput
    promotions?: ProductForPromotionUncheckedCreateNestedManyWithoutProductInput
    images?: ImagesUncheckedCreateNestedManyWithoutProductInput
  }

  export type SpecificProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    order?: ProductForOrderUpdateManyWithoutProductNestedInput
    promotions?: ProductForPromotionUpdateManyWithoutProductNestedInput
    genericProd?: GenericProductUpdateOneRequiredWithoutVariantsNestedInput
    images?: ImagesUpdateManyWithoutProductNestedInput
  }

  export type SpecificProductUncheckedUpdateInput = {
    genericId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    order?: ProductForOrderUncheckedUpdateManyWithoutProductNestedInput
    promotions?: ProductForPromotionUncheckedUpdateManyWithoutProductNestedInput
    images?: ImagesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SpecificProductCreateManyInput = {
    genericId: string
    id?: string
    image?: string | null
    price: number
    color?: string
    variantName: string
    stock: number
  }

  export type SpecificProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type SpecificProductUncheckedUpdateManyInput = {
    genericId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type ImagesCreateInput = {
    id?: string
    link: string
    product: SpecificProductCreateNestedOneWithoutImagesInput
  }

  export type ImagesUncheckedCreateInput = {
    id?: string
    link: string
    prodId: string
  }

  export type ImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    product?: SpecificProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    prodId?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesCreateManyInput = {
    id?: string
    link: string
    prodId: string
  }

  export type ImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    prodId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    products?: ProductForOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    products?: ProductForOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    products?: ProductForOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductForOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductForOrderCreateInput = {
    count?: number
    order: OrderCreateNestedOneWithoutProductsInput
    product: SpecificProductCreateNestedOneWithoutOrderInput
  }

  export type ProductForOrderUncheckedCreateInput = {
    orderId: string
    productId: string
    count?: number
  }

  export type ProductForOrderUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutProductsNestedInput
    product?: SpecificProductUpdateOneRequiredWithoutOrderNestedInput
  }

  export type ProductForOrderUncheckedUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ProductForOrderCreateManyInput = {
    orderId: string
    productId: string
    count?: number
  }

  export type ProductForOrderUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ProductForOrderUncheckedUpdateManyInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type PromotionCreateInput = {
    promo_id?: string
    code: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    products?: ProductForPromotionCreateNestedManyWithoutPromotionInput
  }

  export type PromotionUncheckedCreateInput = {
    promo_id?: string
    code: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    products?: ProductForPromotionUncheckedCreateNestedManyWithoutPromotionInput
  }

  export type PromotionUpdateInput = {
    promo_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductForPromotionUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionUncheckedUpdateInput = {
    promo_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductForPromotionUncheckedUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionCreateManyInput = {
    promo_id?: string
    code: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
  }

  export type PromotionUpdateManyMutationInput = {
    promo_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PromotionUncheckedUpdateManyInput = {
    promo_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductForPromotionCreateInput = {
    product: SpecificProductCreateNestedOneWithoutPromotionsInput
    promotion: PromotionCreateNestedOneWithoutProductsInput
  }

  export type ProductForPromotionUncheckedCreateInput = {
    productId: string
    promotionId: string
  }

  export type ProductForPromotionUpdateInput = {
    product?: SpecificProductUpdateOneRequiredWithoutPromotionsNestedInput
    promotion?: PromotionUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductForPromotionUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    promotionId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductForPromotionCreateManyInput = {
    productId: string
    promotionId: string
  }

  export type ProductForPromotionUpdateManyMutationInput = {

  }

  export type ProductForPromotionUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    promotionId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SpecificProductListRelationFilter = {
    every?: SpecificProductWhereInput
    some?: SpecificProductWhereInput
    none?: SpecificProductWhereInput
  }

  export type DetailsListRelationFilter = {
    every?: DetailsWhereInput
    some?: DetailsWhereInput
    none?: DetailsWhereInput
  }

  export type CategorieScalarRelationFilter = {
    is?: CategorieWhereInput
    isNot?: CategorieWhereInput
  }

  export type SpecificProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenericProductOrderByRelevanceInput = {
    fields: GenericProductOrderByRelevanceFieldEnum | GenericProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GenericProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subtitle?: SortOrder
    categorieId?: SortOrder
  }

  export type GenericProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subtitle?: SortOrder
    categorieId?: SortOrder
  }

  export type GenericProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subtitle?: SortOrder
    categorieId?: SortOrder
  }

  export type GenericProductListRelationFilter = {
    every?: GenericProductWhereInput
    some?: GenericProductWhereInput
    none?: GenericProductWhereInput
  }

  export type GenericProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategorieOrderByRelevanceInput = {
    fields: CategorieOrderByRelevanceFieldEnum | CategorieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategorieCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategorieMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategorieMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type GenericProductScalarRelationFilter = {
    is?: GenericProductWhereInput
    isNot?: GenericProductWhereInput
  }

  export type DetailsOrderByRelevanceInput = {
    fields: DetailsOrderByRelevanceFieldEnum | DetailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DetailsCountOrderByAggregateInput = {
    id?: SortOrder
    idProd?: SortOrder
    text?: SortOrder
  }

  export type DetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    idProd?: SortOrder
    text?: SortOrder
  }

  export type DetailsMinOrderByAggregateInput = {
    id?: SortOrder
    idProd?: SortOrder
    text?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductForOrderListRelationFilter = {
    every?: ProductForOrderWhereInput
    some?: ProductForOrderWhereInput
    none?: ProductForOrderWhereInput
  }

  export type ProductForPromotionListRelationFilter = {
    every?: ProductForPromotionWhereInput
    some?: ProductForPromotionWhereInput
    none?: ProductForPromotionWhereInput
  }

  export type ImagesListRelationFilter = {
    every?: ImagesWhereInput
    some?: ImagesWhereInput
    none?: ImagesWhereInput
  }

  export type ProductForOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductForPromotionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecificProductOrderByRelevanceInput = {
    fields: SpecificProductOrderByRelevanceFieldEnum | SpecificProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SpecificProductCountOrderByAggregateInput = {
    genericId?: SortOrder
    id?: SortOrder
    image?: SortOrder
    price?: SortOrder
    color?: SortOrder
    variantName?: SortOrder
    stock?: SortOrder
  }

  export type SpecificProductAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type SpecificProductMaxOrderByAggregateInput = {
    genericId?: SortOrder
    id?: SortOrder
    image?: SortOrder
    price?: SortOrder
    color?: SortOrder
    variantName?: SortOrder
    stock?: SortOrder
  }

  export type SpecificProductMinOrderByAggregateInput = {
    genericId?: SortOrder
    id?: SortOrder
    image?: SortOrder
    price?: SortOrder
    color?: SortOrder
    variantName?: SortOrder
    stock?: SortOrder
  }

  export type SpecificProductSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SpecificProductScalarRelationFilter = {
    is?: SpecificProductWhereInput
    isNot?: SpecificProductWhereInput
  }

  export type ImagesOrderByRelevanceInput = {
    fields: ImagesOrderByRelevanceFieldEnum | ImagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImagesCountOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    prodId?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    prodId?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    prodId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ProductForOrderOrderByRelevanceInput = {
    fields: ProductForOrderOrderByRelevanceFieldEnum | ProductForOrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductForOrderOrderIdProductIdCompoundUniqueInput = {
    orderId: string
    productId: string
  }

  export type ProductForOrderCountOrderByAggregateInput = {
    orderId?: SortOrder
    productId?: SortOrder
    count?: SortOrder
  }

  export type ProductForOrderAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type ProductForOrderMaxOrderByAggregateInput = {
    orderId?: SortOrder
    productId?: SortOrder
    count?: SortOrder
  }

  export type ProductForOrderMinOrderByAggregateInput = {
    orderId?: SortOrder
    productId?: SortOrder
    count?: SortOrder
  }

  export type ProductForOrderSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PromotionOrderByRelevanceInput = {
    fields: PromotionOrderByRelevanceFieldEnum | PromotionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PromotionCountOrderByAggregateInput = {
    promo_id?: SortOrder
    code?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    promo_id?: SortOrder
    code?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    promo_id?: SortOrder
    code?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PromotionScalarRelationFilter = {
    is?: PromotionWhereInput
    isNot?: PromotionWhereInput
  }

  export type ProductForPromotionOrderByRelevanceInput = {
    fields: ProductForPromotionOrderByRelevanceFieldEnum | ProductForPromotionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductForPromotionProductIdPromotionIdCompoundUniqueInput = {
    productId: string
    promotionId: string
  }

  export type ProductForPromotionCountOrderByAggregateInput = {
    productId?: SortOrder
    promotionId?: SortOrder
  }

  export type ProductForPromotionMaxOrderByAggregateInput = {
    productId?: SortOrder
    promotionId?: SortOrder
  }

  export type ProductForPromotionMinOrderByAggregateInput = {
    productId?: SortOrder
    promotionId?: SortOrder
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type SpecificProductCreateNestedManyWithoutGenericProdInput = {
    create?: XOR<SpecificProductCreateWithoutGenericProdInput, SpecificProductUncheckedCreateWithoutGenericProdInput> | SpecificProductCreateWithoutGenericProdInput[] | SpecificProductUncheckedCreateWithoutGenericProdInput[]
    connectOrCreate?: SpecificProductCreateOrConnectWithoutGenericProdInput | SpecificProductCreateOrConnectWithoutGenericProdInput[]
    createMany?: SpecificProductCreateManyGenericProdInputEnvelope
    connect?: SpecificProductWhereUniqueInput | SpecificProductWhereUniqueInput[]
  }

  export type DetailsCreateNestedManyWithoutProdInput = {
    create?: XOR<DetailsCreateWithoutProdInput, DetailsUncheckedCreateWithoutProdInput> | DetailsCreateWithoutProdInput[] | DetailsUncheckedCreateWithoutProdInput[]
    connectOrCreate?: DetailsCreateOrConnectWithoutProdInput | DetailsCreateOrConnectWithoutProdInput[]
    createMany?: DetailsCreateManyProdInputEnvelope
    connect?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
  }

  export type CategorieCreateNestedOneWithoutProductosInput = {
    create?: XOR<CategorieCreateWithoutProductosInput, CategorieUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutProductosInput
    connect?: CategorieWhereUniqueInput
  }

  export type SpecificProductUncheckedCreateNestedManyWithoutGenericProdInput = {
    create?: XOR<SpecificProductCreateWithoutGenericProdInput, SpecificProductUncheckedCreateWithoutGenericProdInput> | SpecificProductCreateWithoutGenericProdInput[] | SpecificProductUncheckedCreateWithoutGenericProdInput[]
    connectOrCreate?: SpecificProductCreateOrConnectWithoutGenericProdInput | SpecificProductCreateOrConnectWithoutGenericProdInput[]
    createMany?: SpecificProductCreateManyGenericProdInputEnvelope
    connect?: SpecificProductWhereUniqueInput | SpecificProductWhereUniqueInput[]
  }

  export type DetailsUncheckedCreateNestedManyWithoutProdInput = {
    create?: XOR<DetailsCreateWithoutProdInput, DetailsUncheckedCreateWithoutProdInput> | DetailsCreateWithoutProdInput[] | DetailsUncheckedCreateWithoutProdInput[]
    connectOrCreate?: DetailsCreateOrConnectWithoutProdInput | DetailsCreateOrConnectWithoutProdInput[]
    createMany?: DetailsCreateManyProdInputEnvelope
    connect?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
  }

  export type SpecificProductUpdateManyWithoutGenericProdNestedInput = {
    create?: XOR<SpecificProductCreateWithoutGenericProdInput, SpecificProductUncheckedCreateWithoutGenericProdInput> | SpecificProductCreateWithoutGenericProdInput[] | SpecificProductUncheckedCreateWithoutGenericProdInput[]
    connectOrCreate?: SpecificProductCreateOrConnectWithoutGenericProdInput | SpecificProductCreateOrConnectWithoutGenericProdInput[]
    upsert?: SpecificProductUpsertWithWhereUniqueWithoutGenericProdInput | SpecificProductUpsertWithWhereUniqueWithoutGenericProdInput[]
    createMany?: SpecificProductCreateManyGenericProdInputEnvelope
    set?: SpecificProductWhereUniqueInput | SpecificProductWhereUniqueInput[]
    disconnect?: SpecificProductWhereUniqueInput | SpecificProductWhereUniqueInput[]
    delete?: SpecificProductWhereUniqueInput | SpecificProductWhereUniqueInput[]
    connect?: SpecificProductWhereUniqueInput | SpecificProductWhereUniqueInput[]
    update?: SpecificProductUpdateWithWhereUniqueWithoutGenericProdInput | SpecificProductUpdateWithWhereUniqueWithoutGenericProdInput[]
    updateMany?: SpecificProductUpdateManyWithWhereWithoutGenericProdInput | SpecificProductUpdateManyWithWhereWithoutGenericProdInput[]
    deleteMany?: SpecificProductScalarWhereInput | SpecificProductScalarWhereInput[]
  }

  export type DetailsUpdateManyWithoutProdNestedInput = {
    create?: XOR<DetailsCreateWithoutProdInput, DetailsUncheckedCreateWithoutProdInput> | DetailsCreateWithoutProdInput[] | DetailsUncheckedCreateWithoutProdInput[]
    connectOrCreate?: DetailsCreateOrConnectWithoutProdInput | DetailsCreateOrConnectWithoutProdInput[]
    upsert?: DetailsUpsertWithWhereUniqueWithoutProdInput | DetailsUpsertWithWhereUniqueWithoutProdInput[]
    createMany?: DetailsCreateManyProdInputEnvelope
    set?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    disconnect?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    delete?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    connect?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    update?: DetailsUpdateWithWhereUniqueWithoutProdInput | DetailsUpdateWithWhereUniqueWithoutProdInput[]
    updateMany?: DetailsUpdateManyWithWhereWithoutProdInput | DetailsUpdateManyWithWhereWithoutProdInput[]
    deleteMany?: DetailsScalarWhereInput | DetailsScalarWhereInput[]
  }

  export type CategorieUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<CategorieCreateWithoutProductosInput, CategorieUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutProductosInput
    upsert?: CategorieUpsertWithoutProductosInput
    connect?: CategorieWhereUniqueInput
    update?: XOR<XOR<CategorieUpdateToOneWithWhereWithoutProductosInput, CategorieUpdateWithoutProductosInput>, CategorieUncheckedUpdateWithoutProductosInput>
  }

  export type SpecificProductUncheckedUpdateManyWithoutGenericProdNestedInput = {
    create?: XOR<SpecificProductCreateWithoutGenericProdInput, SpecificProductUncheckedCreateWithoutGenericProdInput> | SpecificProductCreateWithoutGenericProdInput[] | SpecificProductUncheckedCreateWithoutGenericProdInput[]
    connectOrCreate?: SpecificProductCreateOrConnectWithoutGenericProdInput | SpecificProductCreateOrConnectWithoutGenericProdInput[]
    upsert?: SpecificProductUpsertWithWhereUniqueWithoutGenericProdInput | SpecificProductUpsertWithWhereUniqueWithoutGenericProdInput[]
    createMany?: SpecificProductCreateManyGenericProdInputEnvelope
    set?: SpecificProductWhereUniqueInput | SpecificProductWhereUniqueInput[]
    disconnect?: SpecificProductWhereUniqueInput | SpecificProductWhereUniqueInput[]
    delete?: SpecificProductWhereUniqueInput | SpecificProductWhereUniqueInput[]
    connect?: SpecificProductWhereUniqueInput | SpecificProductWhereUniqueInput[]
    update?: SpecificProductUpdateWithWhereUniqueWithoutGenericProdInput | SpecificProductUpdateWithWhereUniqueWithoutGenericProdInput[]
    updateMany?: SpecificProductUpdateManyWithWhereWithoutGenericProdInput | SpecificProductUpdateManyWithWhereWithoutGenericProdInput[]
    deleteMany?: SpecificProductScalarWhereInput | SpecificProductScalarWhereInput[]
  }

  export type DetailsUncheckedUpdateManyWithoutProdNestedInput = {
    create?: XOR<DetailsCreateWithoutProdInput, DetailsUncheckedCreateWithoutProdInput> | DetailsCreateWithoutProdInput[] | DetailsUncheckedCreateWithoutProdInput[]
    connectOrCreate?: DetailsCreateOrConnectWithoutProdInput | DetailsCreateOrConnectWithoutProdInput[]
    upsert?: DetailsUpsertWithWhereUniqueWithoutProdInput | DetailsUpsertWithWhereUniqueWithoutProdInput[]
    createMany?: DetailsCreateManyProdInputEnvelope
    set?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    disconnect?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    delete?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    connect?: DetailsWhereUniqueInput | DetailsWhereUniqueInput[]
    update?: DetailsUpdateWithWhereUniqueWithoutProdInput | DetailsUpdateWithWhereUniqueWithoutProdInput[]
    updateMany?: DetailsUpdateManyWithWhereWithoutProdInput | DetailsUpdateManyWithWhereWithoutProdInput[]
    deleteMany?: DetailsScalarWhereInput | DetailsScalarWhereInput[]
  }

  export type GenericProductCreateNestedManyWithoutCategorieInput = {
    create?: XOR<GenericProductCreateWithoutCategorieInput, GenericProductUncheckedCreateWithoutCategorieInput> | GenericProductCreateWithoutCategorieInput[] | GenericProductUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: GenericProductCreateOrConnectWithoutCategorieInput | GenericProductCreateOrConnectWithoutCategorieInput[]
    createMany?: GenericProductCreateManyCategorieInputEnvelope
    connect?: GenericProductWhereUniqueInput | GenericProductWhereUniqueInput[]
  }

  export type GenericProductUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<GenericProductCreateWithoutCategorieInput, GenericProductUncheckedCreateWithoutCategorieInput> | GenericProductCreateWithoutCategorieInput[] | GenericProductUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: GenericProductCreateOrConnectWithoutCategorieInput | GenericProductCreateOrConnectWithoutCategorieInput[]
    createMany?: GenericProductCreateManyCategorieInputEnvelope
    connect?: GenericProductWhereUniqueInput | GenericProductWhereUniqueInput[]
  }

  export type GenericProductUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<GenericProductCreateWithoutCategorieInput, GenericProductUncheckedCreateWithoutCategorieInput> | GenericProductCreateWithoutCategorieInput[] | GenericProductUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: GenericProductCreateOrConnectWithoutCategorieInput | GenericProductCreateOrConnectWithoutCategorieInput[]
    upsert?: GenericProductUpsertWithWhereUniqueWithoutCategorieInput | GenericProductUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: GenericProductCreateManyCategorieInputEnvelope
    set?: GenericProductWhereUniqueInput | GenericProductWhereUniqueInput[]
    disconnect?: GenericProductWhereUniqueInput | GenericProductWhereUniqueInput[]
    delete?: GenericProductWhereUniqueInput | GenericProductWhereUniqueInput[]
    connect?: GenericProductWhereUniqueInput | GenericProductWhereUniqueInput[]
    update?: GenericProductUpdateWithWhereUniqueWithoutCategorieInput | GenericProductUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: GenericProductUpdateManyWithWhereWithoutCategorieInput | GenericProductUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: GenericProductScalarWhereInput | GenericProductScalarWhereInput[]
  }

  export type GenericProductUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<GenericProductCreateWithoutCategorieInput, GenericProductUncheckedCreateWithoutCategorieInput> | GenericProductCreateWithoutCategorieInput[] | GenericProductUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: GenericProductCreateOrConnectWithoutCategorieInput | GenericProductCreateOrConnectWithoutCategorieInput[]
    upsert?: GenericProductUpsertWithWhereUniqueWithoutCategorieInput | GenericProductUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: GenericProductCreateManyCategorieInputEnvelope
    set?: GenericProductWhereUniqueInput | GenericProductWhereUniqueInput[]
    disconnect?: GenericProductWhereUniqueInput | GenericProductWhereUniqueInput[]
    delete?: GenericProductWhereUniqueInput | GenericProductWhereUniqueInput[]
    connect?: GenericProductWhereUniqueInput | GenericProductWhereUniqueInput[]
    update?: GenericProductUpdateWithWhereUniqueWithoutCategorieInput | GenericProductUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: GenericProductUpdateManyWithWhereWithoutCategorieInput | GenericProductUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: GenericProductScalarWhereInput | GenericProductScalarWhereInput[]
  }

  export type GenericProductCreateNestedOneWithoutDetailsInput = {
    create?: XOR<GenericProductCreateWithoutDetailsInput, GenericProductUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: GenericProductCreateOrConnectWithoutDetailsInput
    connect?: GenericProductWhereUniqueInput
  }

  export type GenericProductUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<GenericProductCreateWithoutDetailsInput, GenericProductUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: GenericProductCreateOrConnectWithoutDetailsInput
    upsert?: GenericProductUpsertWithoutDetailsInput
    connect?: GenericProductWhereUniqueInput
    update?: XOR<XOR<GenericProductUpdateToOneWithWhereWithoutDetailsInput, GenericProductUpdateWithoutDetailsInput>, GenericProductUncheckedUpdateWithoutDetailsInput>
  }

  export type ProductForOrderCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductForOrderCreateWithoutProductInput, ProductForOrderUncheckedCreateWithoutProductInput> | ProductForOrderCreateWithoutProductInput[] | ProductForOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductForOrderCreateOrConnectWithoutProductInput | ProductForOrderCreateOrConnectWithoutProductInput[]
    createMany?: ProductForOrderCreateManyProductInputEnvelope
    connect?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
  }

  export type ProductForPromotionCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductForPromotionCreateWithoutProductInput, ProductForPromotionUncheckedCreateWithoutProductInput> | ProductForPromotionCreateWithoutProductInput[] | ProductForPromotionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductForPromotionCreateOrConnectWithoutProductInput | ProductForPromotionCreateOrConnectWithoutProductInput[]
    createMany?: ProductForPromotionCreateManyProductInputEnvelope
    connect?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
  }

  export type GenericProductCreateNestedOneWithoutVariantsInput = {
    create?: XOR<GenericProductCreateWithoutVariantsInput, GenericProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: GenericProductCreateOrConnectWithoutVariantsInput
    connect?: GenericProductWhereUniqueInput
  }

  export type ImagesCreateNestedManyWithoutProductInput = {
    create?: XOR<ImagesCreateWithoutProductInput, ImagesUncheckedCreateWithoutProductInput> | ImagesCreateWithoutProductInput[] | ImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutProductInput | ImagesCreateOrConnectWithoutProductInput[]
    createMany?: ImagesCreateManyProductInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type ProductForOrderUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductForOrderCreateWithoutProductInput, ProductForOrderUncheckedCreateWithoutProductInput> | ProductForOrderCreateWithoutProductInput[] | ProductForOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductForOrderCreateOrConnectWithoutProductInput | ProductForOrderCreateOrConnectWithoutProductInput[]
    createMany?: ProductForOrderCreateManyProductInputEnvelope
    connect?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
  }

  export type ProductForPromotionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductForPromotionCreateWithoutProductInput, ProductForPromotionUncheckedCreateWithoutProductInput> | ProductForPromotionCreateWithoutProductInput[] | ProductForPromotionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductForPromotionCreateOrConnectWithoutProductInput | ProductForPromotionCreateOrConnectWithoutProductInput[]
    createMany?: ProductForPromotionCreateManyProductInputEnvelope
    connect?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
  }

  export type ImagesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ImagesCreateWithoutProductInput, ImagesUncheckedCreateWithoutProductInput> | ImagesCreateWithoutProductInput[] | ImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutProductInput | ImagesCreateOrConnectWithoutProductInput[]
    createMany?: ImagesCreateManyProductInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductForOrderUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductForOrderCreateWithoutProductInput, ProductForOrderUncheckedCreateWithoutProductInput> | ProductForOrderCreateWithoutProductInput[] | ProductForOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductForOrderCreateOrConnectWithoutProductInput | ProductForOrderCreateOrConnectWithoutProductInput[]
    upsert?: ProductForOrderUpsertWithWhereUniqueWithoutProductInput | ProductForOrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductForOrderCreateManyProductInputEnvelope
    set?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    disconnect?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    delete?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    connect?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    update?: ProductForOrderUpdateWithWhereUniqueWithoutProductInput | ProductForOrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductForOrderUpdateManyWithWhereWithoutProductInput | ProductForOrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductForOrderScalarWhereInput | ProductForOrderScalarWhereInput[]
  }

  export type ProductForPromotionUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductForPromotionCreateWithoutProductInput, ProductForPromotionUncheckedCreateWithoutProductInput> | ProductForPromotionCreateWithoutProductInput[] | ProductForPromotionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductForPromotionCreateOrConnectWithoutProductInput | ProductForPromotionCreateOrConnectWithoutProductInput[]
    upsert?: ProductForPromotionUpsertWithWhereUniqueWithoutProductInput | ProductForPromotionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductForPromotionCreateManyProductInputEnvelope
    set?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    disconnect?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    delete?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    connect?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    update?: ProductForPromotionUpdateWithWhereUniqueWithoutProductInput | ProductForPromotionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductForPromotionUpdateManyWithWhereWithoutProductInput | ProductForPromotionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductForPromotionScalarWhereInput | ProductForPromotionScalarWhereInput[]
  }

  export type GenericProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<GenericProductCreateWithoutVariantsInput, GenericProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: GenericProductCreateOrConnectWithoutVariantsInput
    upsert?: GenericProductUpsertWithoutVariantsInput
    connect?: GenericProductWhereUniqueInput
    update?: XOR<XOR<GenericProductUpdateToOneWithWhereWithoutVariantsInput, GenericProductUpdateWithoutVariantsInput>, GenericProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ImagesUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImagesCreateWithoutProductInput, ImagesUncheckedCreateWithoutProductInput> | ImagesCreateWithoutProductInput[] | ImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutProductInput | ImagesCreateOrConnectWithoutProductInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutProductInput | ImagesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImagesCreateManyProductInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutProductInput | ImagesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutProductInput | ImagesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type ProductForOrderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductForOrderCreateWithoutProductInput, ProductForOrderUncheckedCreateWithoutProductInput> | ProductForOrderCreateWithoutProductInput[] | ProductForOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductForOrderCreateOrConnectWithoutProductInput | ProductForOrderCreateOrConnectWithoutProductInput[]
    upsert?: ProductForOrderUpsertWithWhereUniqueWithoutProductInput | ProductForOrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductForOrderCreateManyProductInputEnvelope
    set?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    disconnect?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    delete?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    connect?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    update?: ProductForOrderUpdateWithWhereUniqueWithoutProductInput | ProductForOrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductForOrderUpdateManyWithWhereWithoutProductInput | ProductForOrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductForOrderScalarWhereInput | ProductForOrderScalarWhereInput[]
  }

  export type ProductForPromotionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductForPromotionCreateWithoutProductInput, ProductForPromotionUncheckedCreateWithoutProductInput> | ProductForPromotionCreateWithoutProductInput[] | ProductForPromotionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductForPromotionCreateOrConnectWithoutProductInput | ProductForPromotionCreateOrConnectWithoutProductInput[]
    upsert?: ProductForPromotionUpsertWithWhereUniqueWithoutProductInput | ProductForPromotionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductForPromotionCreateManyProductInputEnvelope
    set?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    disconnect?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    delete?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    connect?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    update?: ProductForPromotionUpdateWithWhereUniqueWithoutProductInput | ProductForPromotionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductForPromotionUpdateManyWithWhereWithoutProductInput | ProductForPromotionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductForPromotionScalarWhereInput | ProductForPromotionScalarWhereInput[]
  }

  export type ImagesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImagesCreateWithoutProductInput, ImagesUncheckedCreateWithoutProductInput> | ImagesCreateWithoutProductInput[] | ImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutProductInput | ImagesCreateOrConnectWithoutProductInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutProductInput | ImagesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImagesCreateManyProductInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutProductInput | ImagesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutProductInput | ImagesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type SpecificProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<SpecificProductCreateWithoutImagesInput, SpecificProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SpecificProductCreateOrConnectWithoutImagesInput
    connect?: SpecificProductWhereUniqueInput
  }

  export type SpecificProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<SpecificProductCreateWithoutImagesInput, SpecificProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SpecificProductCreateOrConnectWithoutImagesInput
    upsert?: SpecificProductUpsertWithoutImagesInput
    connect?: SpecificProductWhereUniqueInput
    update?: XOR<XOR<SpecificProductUpdateToOneWithWhereWithoutImagesInput, SpecificProductUpdateWithoutImagesInput>, SpecificProductUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type ProductForOrderCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductForOrderCreateWithoutOrderInput, ProductForOrderUncheckedCreateWithoutOrderInput> | ProductForOrderCreateWithoutOrderInput[] | ProductForOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductForOrderCreateOrConnectWithoutOrderInput | ProductForOrderCreateOrConnectWithoutOrderInput[]
    createMany?: ProductForOrderCreateManyOrderInputEnvelope
    connect?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
  }

  export type ProductForOrderUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductForOrderCreateWithoutOrderInput, ProductForOrderUncheckedCreateWithoutOrderInput> | ProductForOrderCreateWithoutOrderInput[] | ProductForOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductForOrderCreateOrConnectWithoutOrderInput | ProductForOrderCreateOrConnectWithoutOrderInput[]
    createMany?: ProductForOrderCreateManyOrderInputEnvelope
    connect?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductForOrderUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductForOrderCreateWithoutOrderInput, ProductForOrderUncheckedCreateWithoutOrderInput> | ProductForOrderCreateWithoutOrderInput[] | ProductForOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductForOrderCreateOrConnectWithoutOrderInput | ProductForOrderCreateOrConnectWithoutOrderInput[]
    upsert?: ProductForOrderUpsertWithWhereUniqueWithoutOrderInput | ProductForOrderUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductForOrderCreateManyOrderInputEnvelope
    set?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    disconnect?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    delete?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    connect?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    update?: ProductForOrderUpdateWithWhereUniqueWithoutOrderInput | ProductForOrderUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductForOrderUpdateManyWithWhereWithoutOrderInput | ProductForOrderUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductForOrderScalarWhereInput | ProductForOrderScalarWhereInput[]
  }

  export type ProductForOrderUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductForOrderCreateWithoutOrderInput, ProductForOrderUncheckedCreateWithoutOrderInput> | ProductForOrderCreateWithoutOrderInput[] | ProductForOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductForOrderCreateOrConnectWithoutOrderInput | ProductForOrderCreateOrConnectWithoutOrderInput[]
    upsert?: ProductForOrderUpsertWithWhereUniqueWithoutOrderInput | ProductForOrderUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductForOrderCreateManyOrderInputEnvelope
    set?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    disconnect?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    delete?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    connect?: ProductForOrderWhereUniqueInput | ProductForOrderWhereUniqueInput[]
    update?: ProductForOrderUpdateWithWhereUniqueWithoutOrderInput | ProductForOrderUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductForOrderUpdateManyWithWhereWithoutOrderInput | ProductForOrderUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductForOrderScalarWhereInput | ProductForOrderScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutProductsInput = {
    create?: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput
    connect?: OrderWhereUniqueInput
  }

  export type SpecificProductCreateNestedOneWithoutOrderInput = {
    create?: XOR<SpecificProductCreateWithoutOrderInput, SpecificProductUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SpecificProductCreateOrConnectWithoutOrderInput
    connect?: SpecificProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput
    upsert?: OrderUpsertWithoutProductsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutProductsInput, OrderUpdateWithoutProductsInput>, OrderUncheckedUpdateWithoutProductsInput>
  }

  export type SpecificProductUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<SpecificProductCreateWithoutOrderInput, SpecificProductUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SpecificProductCreateOrConnectWithoutOrderInput
    upsert?: SpecificProductUpsertWithoutOrderInput
    connect?: SpecificProductWhereUniqueInput
    update?: XOR<XOR<SpecificProductUpdateToOneWithWhereWithoutOrderInput, SpecificProductUpdateWithoutOrderInput>, SpecificProductUncheckedUpdateWithoutOrderInput>
  }

  export type ProductForPromotionCreateNestedManyWithoutPromotionInput = {
    create?: XOR<ProductForPromotionCreateWithoutPromotionInput, ProductForPromotionUncheckedCreateWithoutPromotionInput> | ProductForPromotionCreateWithoutPromotionInput[] | ProductForPromotionUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: ProductForPromotionCreateOrConnectWithoutPromotionInput | ProductForPromotionCreateOrConnectWithoutPromotionInput[]
    createMany?: ProductForPromotionCreateManyPromotionInputEnvelope
    connect?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
  }

  export type ProductForPromotionUncheckedCreateNestedManyWithoutPromotionInput = {
    create?: XOR<ProductForPromotionCreateWithoutPromotionInput, ProductForPromotionUncheckedCreateWithoutPromotionInput> | ProductForPromotionCreateWithoutPromotionInput[] | ProductForPromotionUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: ProductForPromotionCreateOrConnectWithoutPromotionInput | ProductForPromotionCreateOrConnectWithoutPromotionInput[]
    createMany?: ProductForPromotionCreateManyPromotionInputEnvelope
    connect?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductForPromotionUpdateManyWithoutPromotionNestedInput = {
    create?: XOR<ProductForPromotionCreateWithoutPromotionInput, ProductForPromotionUncheckedCreateWithoutPromotionInput> | ProductForPromotionCreateWithoutPromotionInput[] | ProductForPromotionUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: ProductForPromotionCreateOrConnectWithoutPromotionInput | ProductForPromotionCreateOrConnectWithoutPromotionInput[]
    upsert?: ProductForPromotionUpsertWithWhereUniqueWithoutPromotionInput | ProductForPromotionUpsertWithWhereUniqueWithoutPromotionInput[]
    createMany?: ProductForPromotionCreateManyPromotionInputEnvelope
    set?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    disconnect?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    delete?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    connect?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    update?: ProductForPromotionUpdateWithWhereUniqueWithoutPromotionInput | ProductForPromotionUpdateWithWhereUniqueWithoutPromotionInput[]
    updateMany?: ProductForPromotionUpdateManyWithWhereWithoutPromotionInput | ProductForPromotionUpdateManyWithWhereWithoutPromotionInput[]
    deleteMany?: ProductForPromotionScalarWhereInput | ProductForPromotionScalarWhereInput[]
  }

  export type ProductForPromotionUncheckedUpdateManyWithoutPromotionNestedInput = {
    create?: XOR<ProductForPromotionCreateWithoutPromotionInput, ProductForPromotionUncheckedCreateWithoutPromotionInput> | ProductForPromotionCreateWithoutPromotionInput[] | ProductForPromotionUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: ProductForPromotionCreateOrConnectWithoutPromotionInput | ProductForPromotionCreateOrConnectWithoutPromotionInput[]
    upsert?: ProductForPromotionUpsertWithWhereUniqueWithoutPromotionInput | ProductForPromotionUpsertWithWhereUniqueWithoutPromotionInput[]
    createMany?: ProductForPromotionCreateManyPromotionInputEnvelope
    set?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    disconnect?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    delete?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    connect?: ProductForPromotionWhereUniqueInput | ProductForPromotionWhereUniqueInput[]
    update?: ProductForPromotionUpdateWithWhereUniqueWithoutPromotionInput | ProductForPromotionUpdateWithWhereUniqueWithoutPromotionInput[]
    updateMany?: ProductForPromotionUpdateManyWithWhereWithoutPromotionInput | ProductForPromotionUpdateManyWithWhereWithoutPromotionInput[]
    deleteMany?: ProductForPromotionScalarWhereInput | ProductForPromotionScalarWhereInput[]
  }

  export type SpecificProductCreateNestedOneWithoutPromotionsInput = {
    create?: XOR<SpecificProductCreateWithoutPromotionsInput, SpecificProductUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: SpecificProductCreateOrConnectWithoutPromotionsInput
    connect?: SpecificProductWhereUniqueInput
  }

  export type PromotionCreateNestedOneWithoutProductsInput = {
    create?: XOR<PromotionCreateWithoutProductsInput, PromotionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutProductsInput
    connect?: PromotionWhereUniqueInput
  }

  export type SpecificProductUpdateOneRequiredWithoutPromotionsNestedInput = {
    create?: XOR<SpecificProductCreateWithoutPromotionsInput, SpecificProductUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: SpecificProductCreateOrConnectWithoutPromotionsInput
    upsert?: SpecificProductUpsertWithoutPromotionsInput
    connect?: SpecificProductWhereUniqueInput
    update?: XOR<XOR<SpecificProductUpdateToOneWithWhereWithoutPromotionsInput, SpecificProductUpdateWithoutPromotionsInput>, SpecificProductUncheckedUpdateWithoutPromotionsInput>
  }

  export type PromotionUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<PromotionCreateWithoutProductsInput, PromotionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutProductsInput
    upsert?: PromotionUpsertWithoutProductsInput
    connect?: PromotionWhereUniqueInput
    update?: XOR<XOR<PromotionUpdateToOneWithWhereWithoutProductsInput, PromotionUpdateWithoutProductsInput>, PromotionUncheckedUpdateWithoutProductsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    products?: ProductForOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    products?: ProductForOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type SpecificProductCreateWithoutGenericProdInput = {
    id?: string
    image?: string | null
    price: number
    color?: string
    variantName: string
    stock: number
    order?: ProductForOrderCreateNestedManyWithoutProductInput
    promotions?: ProductForPromotionCreateNestedManyWithoutProductInput
    images?: ImagesCreateNestedManyWithoutProductInput
  }

  export type SpecificProductUncheckedCreateWithoutGenericProdInput = {
    id?: string
    image?: string | null
    price: number
    color?: string
    variantName: string
    stock: number
    order?: ProductForOrderUncheckedCreateNestedManyWithoutProductInput
    promotions?: ProductForPromotionUncheckedCreateNestedManyWithoutProductInput
    images?: ImagesUncheckedCreateNestedManyWithoutProductInput
  }

  export type SpecificProductCreateOrConnectWithoutGenericProdInput = {
    where: SpecificProductWhereUniqueInput
    create: XOR<SpecificProductCreateWithoutGenericProdInput, SpecificProductUncheckedCreateWithoutGenericProdInput>
  }

  export type SpecificProductCreateManyGenericProdInputEnvelope = {
    data: SpecificProductCreateManyGenericProdInput | SpecificProductCreateManyGenericProdInput[]
    skipDuplicates?: boolean
  }

  export type DetailsCreateWithoutProdInput = {
    id?: string
    text: string
  }

  export type DetailsUncheckedCreateWithoutProdInput = {
    id?: string
    text: string
  }

  export type DetailsCreateOrConnectWithoutProdInput = {
    where: DetailsWhereUniqueInput
    create: XOR<DetailsCreateWithoutProdInput, DetailsUncheckedCreateWithoutProdInput>
  }

  export type DetailsCreateManyProdInputEnvelope = {
    data: DetailsCreateManyProdInput | DetailsCreateManyProdInput[]
    skipDuplicates?: boolean
  }

  export type CategorieCreateWithoutProductosInput = {
    id?: string
    nombre: string
  }

  export type CategorieUncheckedCreateWithoutProductosInput = {
    id?: string
    nombre: string
  }

  export type CategorieCreateOrConnectWithoutProductosInput = {
    where: CategorieWhereUniqueInput
    create: XOR<CategorieCreateWithoutProductosInput, CategorieUncheckedCreateWithoutProductosInput>
  }

  export type SpecificProductUpsertWithWhereUniqueWithoutGenericProdInput = {
    where: SpecificProductWhereUniqueInput
    update: XOR<SpecificProductUpdateWithoutGenericProdInput, SpecificProductUncheckedUpdateWithoutGenericProdInput>
    create: XOR<SpecificProductCreateWithoutGenericProdInput, SpecificProductUncheckedCreateWithoutGenericProdInput>
  }

  export type SpecificProductUpdateWithWhereUniqueWithoutGenericProdInput = {
    where: SpecificProductWhereUniqueInput
    data: XOR<SpecificProductUpdateWithoutGenericProdInput, SpecificProductUncheckedUpdateWithoutGenericProdInput>
  }

  export type SpecificProductUpdateManyWithWhereWithoutGenericProdInput = {
    where: SpecificProductScalarWhereInput
    data: XOR<SpecificProductUpdateManyMutationInput, SpecificProductUncheckedUpdateManyWithoutGenericProdInput>
  }

  export type SpecificProductScalarWhereInput = {
    AND?: SpecificProductScalarWhereInput | SpecificProductScalarWhereInput[]
    OR?: SpecificProductScalarWhereInput[]
    NOT?: SpecificProductScalarWhereInput | SpecificProductScalarWhereInput[]
    genericId?: StringFilter<"SpecificProduct"> | string
    id?: StringFilter<"SpecificProduct"> | string
    image?: StringNullableFilter<"SpecificProduct"> | string | null
    price?: FloatFilter<"SpecificProduct"> | number
    color?: StringFilter<"SpecificProduct"> | string
    variantName?: StringFilter<"SpecificProduct"> | string
    stock?: IntFilter<"SpecificProduct"> | number
  }

  export type DetailsUpsertWithWhereUniqueWithoutProdInput = {
    where: DetailsWhereUniqueInput
    update: XOR<DetailsUpdateWithoutProdInput, DetailsUncheckedUpdateWithoutProdInput>
    create: XOR<DetailsCreateWithoutProdInput, DetailsUncheckedCreateWithoutProdInput>
  }

  export type DetailsUpdateWithWhereUniqueWithoutProdInput = {
    where: DetailsWhereUniqueInput
    data: XOR<DetailsUpdateWithoutProdInput, DetailsUncheckedUpdateWithoutProdInput>
  }

  export type DetailsUpdateManyWithWhereWithoutProdInput = {
    where: DetailsScalarWhereInput
    data: XOR<DetailsUpdateManyMutationInput, DetailsUncheckedUpdateManyWithoutProdInput>
  }

  export type DetailsScalarWhereInput = {
    AND?: DetailsScalarWhereInput | DetailsScalarWhereInput[]
    OR?: DetailsScalarWhereInput[]
    NOT?: DetailsScalarWhereInput | DetailsScalarWhereInput[]
    id?: StringFilter<"Details"> | string
    idProd?: StringFilter<"Details"> | string
    text?: StringFilter<"Details"> | string
  }

  export type CategorieUpsertWithoutProductosInput = {
    update: XOR<CategorieUpdateWithoutProductosInput, CategorieUncheckedUpdateWithoutProductosInput>
    create: XOR<CategorieCreateWithoutProductosInput, CategorieUncheckedCreateWithoutProductosInput>
    where?: CategorieWhereInput
  }

  export type CategorieUpdateToOneWithWhereWithoutProductosInput = {
    where?: CategorieWhereInput
    data: XOR<CategorieUpdateWithoutProductosInput, CategorieUncheckedUpdateWithoutProductosInput>
  }

  export type CategorieUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieUncheckedUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type GenericProductCreateWithoutCategorieInput = {
    id?: string
    name: string
    description: string
    subtitle: string
    variants?: SpecificProductCreateNestedManyWithoutGenericProdInput
    details?: DetailsCreateNestedManyWithoutProdInput
  }

  export type GenericProductUncheckedCreateWithoutCategorieInput = {
    id?: string
    name: string
    description: string
    subtitle: string
    variants?: SpecificProductUncheckedCreateNestedManyWithoutGenericProdInput
    details?: DetailsUncheckedCreateNestedManyWithoutProdInput
  }

  export type GenericProductCreateOrConnectWithoutCategorieInput = {
    where: GenericProductWhereUniqueInput
    create: XOR<GenericProductCreateWithoutCategorieInput, GenericProductUncheckedCreateWithoutCategorieInput>
  }

  export type GenericProductCreateManyCategorieInputEnvelope = {
    data: GenericProductCreateManyCategorieInput | GenericProductCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type GenericProductUpsertWithWhereUniqueWithoutCategorieInput = {
    where: GenericProductWhereUniqueInput
    update: XOR<GenericProductUpdateWithoutCategorieInput, GenericProductUncheckedUpdateWithoutCategorieInput>
    create: XOR<GenericProductCreateWithoutCategorieInput, GenericProductUncheckedCreateWithoutCategorieInput>
  }

  export type GenericProductUpdateWithWhereUniqueWithoutCategorieInput = {
    where: GenericProductWhereUniqueInput
    data: XOR<GenericProductUpdateWithoutCategorieInput, GenericProductUncheckedUpdateWithoutCategorieInput>
  }

  export type GenericProductUpdateManyWithWhereWithoutCategorieInput = {
    where: GenericProductScalarWhereInput
    data: XOR<GenericProductUpdateManyMutationInput, GenericProductUncheckedUpdateManyWithoutCategorieInput>
  }

  export type GenericProductScalarWhereInput = {
    AND?: GenericProductScalarWhereInput | GenericProductScalarWhereInput[]
    OR?: GenericProductScalarWhereInput[]
    NOT?: GenericProductScalarWhereInput | GenericProductScalarWhereInput[]
    id?: StringFilter<"GenericProduct"> | string
    name?: StringFilter<"GenericProduct"> | string
    description?: StringFilter<"GenericProduct"> | string
    subtitle?: StringFilter<"GenericProduct"> | string
    categorieId?: StringFilter<"GenericProduct"> | string
  }

  export type GenericProductCreateWithoutDetailsInput = {
    id?: string
    name: string
    description: string
    subtitle: string
    variants?: SpecificProductCreateNestedManyWithoutGenericProdInput
    categorie: CategorieCreateNestedOneWithoutProductosInput
  }

  export type GenericProductUncheckedCreateWithoutDetailsInput = {
    id?: string
    name: string
    description: string
    subtitle: string
    categorieId: string
    variants?: SpecificProductUncheckedCreateNestedManyWithoutGenericProdInput
  }

  export type GenericProductCreateOrConnectWithoutDetailsInput = {
    where: GenericProductWhereUniqueInput
    create: XOR<GenericProductCreateWithoutDetailsInput, GenericProductUncheckedCreateWithoutDetailsInput>
  }

  export type GenericProductUpsertWithoutDetailsInput = {
    update: XOR<GenericProductUpdateWithoutDetailsInput, GenericProductUncheckedUpdateWithoutDetailsInput>
    create: XOR<GenericProductCreateWithoutDetailsInput, GenericProductUncheckedCreateWithoutDetailsInput>
    where?: GenericProductWhereInput
  }

  export type GenericProductUpdateToOneWithWhereWithoutDetailsInput = {
    where?: GenericProductWhereInput
    data: XOR<GenericProductUpdateWithoutDetailsInput, GenericProductUncheckedUpdateWithoutDetailsInput>
  }

  export type GenericProductUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    variants?: SpecificProductUpdateManyWithoutGenericProdNestedInput
    categorie?: CategorieUpdateOneRequiredWithoutProductosNestedInput
  }

  export type GenericProductUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    categorieId?: StringFieldUpdateOperationsInput | string
    variants?: SpecificProductUncheckedUpdateManyWithoutGenericProdNestedInput
  }

  export type ProductForOrderCreateWithoutProductInput = {
    count?: number
    order: OrderCreateNestedOneWithoutProductsInput
  }

  export type ProductForOrderUncheckedCreateWithoutProductInput = {
    orderId: string
    count?: number
  }

  export type ProductForOrderCreateOrConnectWithoutProductInput = {
    where: ProductForOrderWhereUniqueInput
    create: XOR<ProductForOrderCreateWithoutProductInput, ProductForOrderUncheckedCreateWithoutProductInput>
  }

  export type ProductForOrderCreateManyProductInputEnvelope = {
    data: ProductForOrderCreateManyProductInput | ProductForOrderCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductForPromotionCreateWithoutProductInput = {
    promotion: PromotionCreateNestedOneWithoutProductsInput
  }

  export type ProductForPromotionUncheckedCreateWithoutProductInput = {
    promotionId: string
  }

  export type ProductForPromotionCreateOrConnectWithoutProductInput = {
    where: ProductForPromotionWhereUniqueInput
    create: XOR<ProductForPromotionCreateWithoutProductInput, ProductForPromotionUncheckedCreateWithoutProductInput>
  }

  export type ProductForPromotionCreateManyProductInputEnvelope = {
    data: ProductForPromotionCreateManyProductInput | ProductForPromotionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type GenericProductCreateWithoutVariantsInput = {
    id?: string
    name: string
    description: string
    subtitle: string
    details?: DetailsCreateNestedManyWithoutProdInput
    categorie: CategorieCreateNestedOneWithoutProductosInput
  }

  export type GenericProductUncheckedCreateWithoutVariantsInput = {
    id?: string
    name: string
    description: string
    subtitle: string
    categorieId: string
    details?: DetailsUncheckedCreateNestedManyWithoutProdInput
  }

  export type GenericProductCreateOrConnectWithoutVariantsInput = {
    where: GenericProductWhereUniqueInput
    create: XOR<GenericProductCreateWithoutVariantsInput, GenericProductUncheckedCreateWithoutVariantsInput>
  }

  export type ImagesCreateWithoutProductInput = {
    id?: string
    link: string
  }

  export type ImagesUncheckedCreateWithoutProductInput = {
    id?: string
    link: string
  }

  export type ImagesCreateOrConnectWithoutProductInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutProductInput, ImagesUncheckedCreateWithoutProductInput>
  }

  export type ImagesCreateManyProductInputEnvelope = {
    data: ImagesCreateManyProductInput | ImagesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductForOrderUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductForOrderWhereUniqueInput
    update: XOR<ProductForOrderUpdateWithoutProductInput, ProductForOrderUncheckedUpdateWithoutProductInput>
    create: XOR<ProductForOrderCreateWithoutProductInput, ProductForOrderUncheckedCreateWithoutProductInput>
  }

  export type ProductForOrderUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductForOrderWhereUniqueInput
    data: XOR<ProductForOrderUpdateWithoutProductInput, ProductForOrderUncheckedUpdateWithoutProductInput>
  }

  export type ProductForOrderUpdateManyWithWhereWithoutProductInput = {
    where: ProductForOrderScalarWhereInput
    data: XOR<ProductForOrderUpdateManyMutationInput, ProductForOrderUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductForOrderScalarWhereInput = {
    AND?: ProductForOrderScalarWhereInput | ProductForOrderScalarWhereInput[]
    OR?: ProductForOrderScalarWhereInput[]
    NOT?: ProductForOrderScalarWhereInput | ProductForOrderScalarWhereInput[]
    orderId?: StringFilter<"ProductForOrder"> | string
    productId?: StringFilter<"ProductForOrder"> | string
    count?: IntFilter<"ProductForOrder"> | number
  }

  export type ProductForPromotionUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductForPromotionWhereUniqueInput
    update: XOR<ProductForPromotionUpdateWithoutProductInput, ProductForPromotionUncheckedUpdateWithoutProductInput>
    create: XOR<ProductForPromotionCreateWithoutProductInput, ProductForPromotionUncheckedCreateWithoutProductInput>
  }

  export type ProductForPromotionUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductForPromotionWhereUniqueInput
    data: XOR<ProductForPromotionUpdateWithoutProductInput, ProductForPromotionUncheckedUpdateWithoutProductInput>
  }

  export type ProductForPromotionUpdateManyWithWhereWithoutProductInput = {
    where: ProductForPromotionScalarWhereInput
    data: XOR<ProductForPromotionUpdateManyMutationInput, ProductForPromotionUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductForPromotionScalarWhereInput = {
    AND?: ProductForPromotionScalarWhereInput | ProductForPromotionScalarWhereInput[]
    OR?: ProductForPromotionScalarWhereInput[]
    NOT?: ProductForPromotionScalarWhereInput | ProductForPromotionScalarWhereInput[]
    productId?: StringFilter<"ProductForPromotion"> | string
    promotionId?: StringFilter<"ProductForPromotion"> | string
  }

  export type GenericProductUpsertWithoutVariantsInput = {
    update: XOR<GenericProductUpdateWithoutVariantsInput, GenericProductUncheckedUpdateWithoutVariantsInput>
    create: XOR<GenericProductCreateWithoutVariantsInput, GenericProductUncheckedCreateWithoutVariantsInput>
    where?: GenericProductWhereInput
  }

  export type GenericProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: GenericProductWhereInput
    data: XOR<GenericProductUpdateWithoutVariantsInput, GenericProductUncheckedUpdateWithoutVariantsInput>
  }

  export type GenericProductUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    details?: DetailsUpdateManyWithoutProdNestedInput
    categorie?: CategorieUpdateOneRequiredWithoutProductosNestedInput
  }

  export type GenericProductUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    categorieId?: StringFieldUpdateOperationsInput | string
    details?: DetailsUncheckedUpdateManyWithoutProdNestedInput
  }

  export type ImagesUpsertWithWhereUniqueWithoutProductInput = {
    where: ImagesWhereUniqueInput
    update: XOR<ImagesUpdateWithoutProductInput, ImagesUncheckedUpdateWithoutProductInput>
    create: XOR<ImagesCreateWithoutProductInput, ImagesUncheckedCreateWithoutProductInput>
  }

  export type ImagesUpdateWithWhereUniqueWithoutProductInput = {
    where: ImagesWhereUniqueInput
    data: XOR<ImagesUpdateWithoutProductInput, ImagesUncheckedUpdateWithoutProductInput>
  }

  export type ImagesUpdateManyWithWhereWithoutProductInput = {
    where: ImagesScalarWhereInput
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyWithoutProductInput>
  }

  export type ImagesScalarWhereInput = {
    AND?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    OR?: ImagesScalarWhereInput[]
    NOT?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    id?: StringFilter<"Images"> | string
    link?: StringFilter<"Images"> | string
    prodId?: StringFilter<"Images"> | string
  }

  export type SpecificProductCreateWithoutImagesInput = {
    id?: string
    image?: string | null
    price: number
    color?: string
    variantName: string
    stock: number
    order?: ProductForOrderCreateNestedManyWithoutProductInput
    promotions?: ProductForPromotionCreateNestedManyWithoutProductInput
    genericProd: GenericProductCreateNestedOneWithoutVariantsInput
  }

  export type SpecificProductUncheckedCreateWithoutImagesInput = {
    genericId: string
    id?: string
    image?: string | null
    price: number
    color?: string
    variantName: string
    stock: number
    order?: ProductForOrderUncheckedCreateNestedManyWithoutProductInput
    promotions?: ProductForPromotionUncheckedCreateNestedManyWithoutProductInput
  }

  export type SpecificProductCreateOrConnectWithoutImagesInput = {
    where: SpecificProductWhereUniqueInput
    create: XOR<SpecificProductCreateWithoutImagesInput, SpecificProductUncheckedCreateWithoutImagesInput>
  }

  export type SpecificProductUpsertWithoutImagesInput = {
    update: XOR<SpecificProductUpdateWithoutImagesInput, SpecificProductUncheckedUpdateWithoutImagesInput>
    create: XOR<SpecificProductCreateWithoutImagesInput, SpecificProductUncheckedCreateWithoutImagesInput>
    where?: SpecificProductWhereInput
  }

  export type SpecificProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: SpecificProductWhereInput
    data: XOR<SpecificProductUpdateWithoutImagesInput, SpecificProductUncheckedUpdateWithoutImagesInput>
  }

  export type SpecificProductUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    order?: ProductForOrderUpdateManyWithoutProductNestedInput
    promotions?: ProductForPromotionUpdateManyWithoutProductNestedInput
    genericProd?: GenericProductUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type SpecificProductUncheckedUpdateWithoutImagesInput = {
    genericId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    order?: ProductForOrderUncheckedUpdateManyWithoutProductNestedInput
    promotions?: ProductForPromotionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    email: string
    name: string
    password: string
    image?: string | null
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    email: string
    name: string
    password: string
    image?: string | null
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type ProductForOrderCreateWithoutOrderInput = {
    count?: number
    product: SpecificProductCreateNestedOneWithoutOrderInput
  }

  export type ProductForOrderUncheckedCreateWithoutOrderInput = {
    productId: string
    count?: number
  }

  export type ProductForOrderCreateOrConnectWithoutOrderInput = {
    where: ProductForOrderWhereUniqueInput
    create: XOR<ProductForOrderCreateWithoutOrderInput, ProductForOrderUncheckedCreateWithoutOrderInput>
  }

  export type ProductForOrderCreateManyOrderInputEnvelope = {
    data: ProductForOrderCreateManyOrderInput | ProductForOrderCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductForOrderUpsertWithWhereUniqueWithoutOrderInput = {
    where: ProductForOrderWhereUniqueInput
    update: XOR<ProductForOrderUpdateWithoutOrderInput, ProductForOrderUncheckedUpdateWithoutOrderInput>
    create: XOR<ProductForOrderCreateWithoutOrderInput, ProductForOrderUncheckedCreateWithoutOrderInput>
  }

  export type ProductForOrderUpdateWithWhereUniqueWithoutOrderInput = {
    where: ProductForOrderWhereUniqueInput
    data: XOR<ProductForOrderUpdateWithoutOrderInput, ProductForOrderUncheckedUpdateWithoutOrderInput>
  }

  export type ProductForOrderUpdateManyWithWhereWithoutOrderInput = {
    where: ProductForOrderScalarWhereInput
    data: XOR<ProductForOrderUpdateManyMutationInput, ProductForOrderUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutProductsInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutProductsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutProductsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
  }

  export type SpecificProductCreateWithoutOrderInput = {
    id?: string
    image?: string | null
    price: number
    color?: string
    variantName: string
    stock: number
    promotions?: ProductForPromotionCreateNestedManyWithoutProductInput
    genericProd: GenericProductCreateNestedOneWithoutVariantsInput
    images?: ImagesCreateNestedManyWithoutProductInput
  }

  export type SpecificProductUncheckedCreateWithoutOrderInput = {
    genericId: string
    id?: string
    image?: string | null
    price: number
    color?: string
    variantName: string
    stock: number
    promotions?: ProductForPromotionUncheckedCreateNestedManyWithoutProductInput
    images?: ImagesUncheckedCreateNestedManyWithoutProductInput
  }

  export type SpecificProductCreateOrConnectWithoutOrderInput = {
    where: SpecificProductWhereUniqueInput
    create: XOR<SpecificProductCreateWithoutOrderInput, SpecificProductUncheckedCreateWithoutOrderInput>
  }

  export type OrderUpsertWithoutProductsInput = {
    update: XOR<OrderUpdateWithoutProductsInput, OrderUncheckedUpdateWithoutProductsInput>
    create: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutProductsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutProductsInput, OrderUncheckedUpdateWithoutProductsInput>
  }

  export type OrderUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecificProductUpsertWithoutOrderInput = {
    update: XOR<SpecificProductUpdateWithoutOrderInput, SpecificProductUncheckedUpdateWithoutOrderInput>
    create: XOR<SpecificProductCreateWithoutOrderInput, SpecificProductUncheckedCreateWithoutOrderInput>
    where?: SpecificProductWhereInput
  }

  export type SpecificProductUpdateToOneWithWhereWithoutOrderInput = {
    where?: SpecificProductWhereInput
    data: XOR<SpecificProductUpdateWithoutOrderInput, SpecificProductUncheckedUpdateWithoutOrderInput>
  }

  export type SpecificProductUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    promotions?: ProductForPromotionUpdateManyWithoutProductNestedInput
    genericProd?: GenericProductUpdateOneRequiredWithoutVariantsNestedInput
    images?: ImagesUpdateManyWithoutProductNestedInput
  }

  export type SpecificProductUncheckedUpdateWithoutOrderInput = {
    genericId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    promotions?: ProductForPromotionUncheckedUpdateManyWithoutProductNestedInput
    images?: ImagesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductForPromotionCreateWithoutPromotionInput = {
    product: SpecificProductCreateNestedOneWithoutPromotionsInput
  }

  export type ProductForPromotionUncheckedCreateWithoutPromotionInput = {
    productId: string
  }

  export type ProductForPromotionCreateOrConnectWithoutPromotionInput = {
    where: ProductForPromotionWhereUniqueInput
    create: XOR<ProductForPromotionCreateWithoutPromotionInput, ProductForPromotionUncheckedCreateWithoutPromotionInput>
  }

  export type ProductForPromotionCreateManyPromotionInputEnvelope = {
    data: ProductForPromotionCreateManyPromotionInput | ProductForPromotionCreateManyPromotionInput[]
    skipDuplicates?: boolean
  }

  export type ProductForPromotionUpsertWithWhereUniqueWithoutPromotionInput = {
    where: ProductForPromotionWhereUniqueInput
    update: XOR<ProductForPromotionUpdateWithoutPromotionInput, ProductForPromotionUncheckedUpdateWithoutPromotionInput>
    create: XOR<ProductForPromotionCreateWithoutPromotionInput, ProductForPromotionUncheckedCreateWithoutPromotionInput>
  }

  export type ProductForPromotionUpdateWithWhereUniqueWithoutPromotionInput = {
    where: ProductForPromotionWhereUniqueInput
    data: XOR<ProductForPromotionUpdateWithoutPromotionInput, ProductForPromotionUncheckedUpdateWithoutPromotionInput>
  }

  export type ProductForPromotionUpdateManyWithWhereWithoutPromotionInput = {
    where: ProductForPromotionScalarWhereInput
    data: XOR<ProductForPromotionUpdateManyMutationInput, ProductForPromotionUncheckedUpdateManyWithoutPromotionInput>
  }

  export type SpecificProductCreateWithoutPromotionsInput = {
    id?: string
    image?: string | null
    price: number
    color?: string
    variantName: string
    stock: number
    order?: ProductForOrderCreateNestedManyWithoutProductInput
    genericProd: GenericProductCreateNestedOneWithoutVariantsInput
    images?: ImagesCreateNestedManyWithoutProductInput
  }

  export type SpecificProductUncheckedCreateWithoutPromotionsInput = {
    genericId: string
    id?: string
    image?: string | null
    price: number
    color?: string
    variantName: string
    stock: number
    order?: ProductForOrderUncheckedCreateNestedManyWithoutProductInput
    images?: ImagesUncheckedCreateNestedManyWithoutProductInput
  }

  export type SpecificProductCreateOrConnectWithoutPromotionsInput = {
    where: SpecificProductWhereUniqueInput
    create: XOR<SpecificProductCreateWithoutPromotionsInput, SpecificProductUncheckedCreateWithoutPromotionsInput>
  }

  export type PromotionCreateWithoutProductsInput = {
    promo_id?: string
    code: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
  }

  export type PromotionUncheckedCreateWithoutProductsInput = {
    promo_id?: string
    code: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
  }

  export type PromotionCreateOrConnectWithoutProductsInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutProductsInput, PromotionUncheckedCreateWithoutProductsInput>
  }

  export type SpecificProductUpsertWithoutPromotionsInput = {
    update: XOR<SpecificProductUpdateWithoutPromotionsInput, SpecificProductUncheckedUpdateWithoutPromotionsInput>
    create: XOR<SpecificProductCreateWithoutPromotionsInput, SpecificProductUncheckedCreateWithoutPromotionsInput>
    where?: SpecificProductWhereInput
  }

  export type SpecificProductUpdateToOneWithWhereWithoutPromotionsInput = {
    where?: SpecificProductWhereInput
    data: XOR<SpecificProductUpdateWithoutPromotionsInput, SpecificProductUncheckedUpdateWithoutPromotionsInput>
  }

  export type SpecificProductUpdateWithoutPromotionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    order?: ProductForOrderUpdateManyWithoutProductNestedInput
    genericProd?: GenericProductUpdateOneRequiredWithoutVariantsNestedInput
    images?: ImagesUpdateManyWithoutProductNestedInput
  }

  export type SpecificProductUncheckedUpdateWithoutPromotionsInput = {
    genericId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    order?: ProductForOrderUncheckedUpdateManyWithoutProductNestedInput
    images?: ImagesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type PromotionUpsertWithoutProductsInput = {
    update: XOR<PromotionUpdateWithoutProductsInput, PromotionUncheckedUpdateWithoutProductsInput>
    create: XOR<PromotionCreateWithoutProductsInput, PromotionUncheckedCreateWithoutProductsInput>
    where?: PromotionWhereInput
  }

  export type PromotionUpdateToOneWithWhereWithoutProductsInput = {
    where?: PromotionWhereInput
    data: XOR<PromotionUpdateWithoutProductsInput, PromotionUncheckedUpdateWithoutProductsInput>
  }

  export type PromotionUpdateWithoutProductsInput = {
    promo_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PromotionUncheckedUpdateWithoutProductsInput = {
    promo_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductForOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductForOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecificProductCreateManyGenericProdInput = {
    id?: string
    image?: string | null
    price: number
    color?: string
    variantName: string
    stock: number
  }

  export type DetailsCreateManyProdInput = {
    id?: string
    text: string
  }

  export type SpecificProductUpdateWithoutGenericProdInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    order?: ProductForOrderUpdateManyWithoutProductNestedInput
    promotions?: ProductForPromotionUpdateManyWithoutProductNestedInput
    images?: ImagesUpdateManyWithoutProductNestedInput
  }

  export type SpecificProductUncheckedUpdateWithoutGenericProdInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    order?: ProductForOrderUncheckedUpdateManyWithoutProductNestedInput
    promotions?: ProductForPromotionUncheckedUpdateManyWithoutProductNestedInput
    images?: ImagesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SpecificProductUncheckedUpdateManyWithoutGenericProdInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type DetailsUpdateWithoutProdInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DetailsUncheckedUpdateWithoutProdInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DetailsUncheckedUpdateManyWithoutProdInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type GenericProductCreateManyCategorieInput = {
    id?: string
    name: string
    description: string
    subtitle: string
  }

  export type GenericProductUpdateWithoutCategorieInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    variants?: SpecificProductUpdateManyWithoutGenericProdNestedInput
    details?: DetailsUpdateManyWithoutProdNestedInput
  }

  export type GenericProductUncheckedUpdateWithoutCategorieInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    variants?: SpecificProductUncheckedUpdateManyWithoutGenericProdNestedInput
    details?: DetailsUncheckedUpdateManyWithoutProdNestedInput
  }

  export type GenericProductUncheckedUpdateManyWithoutCategorieInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
  }

  export type ProductForOrderCreateManyProductInput = {
    orderId: string
    count?: number
  }

  export type ProductForPromotionCreateManyProductInput = {
    promotionId: string
  }

  export type ImagesCreateManyProductInput = {
    id?: string
    link: string
  }

  export type ProductForOrderUpdateWithoutProductInput = {
    count?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductForOrderUncheckedUpdateWithoutProductInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ProductForOrderUncheckedUpdateManyWithoutProductInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ProductForPromotionUpdateWithoutProductInput = {
    promotion?: PromotionUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductForPromotionUncheckedUpdateWithoutProductInput = {
    promotionId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductForPromotionUncheckedUpdateManyWithoutProductInput = {
    promotionId?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type ProductForOrderCreateManyOrderInput = {
    productId: string
    count?: number
  }

  export type ProductForOrderUpdateWithoutOrderInput = {
    count?: IntFieldUpdateOperationsInput | number
    product?: SpecificProductUpdateOneRequiredWithoutOrderNestedInput
  }

  export type ProductForOrderUncheckedUpdateWithoutOrderInput = {
    productId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ProductForOrderUncheckedUpdateManyWithoutOrderInput = {
    productId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ProductForPromotionCreateManyPromotionInput = {
    productId: string
  }

  export type ProductForPromotionUpdateWithoutPromotionInput = {
    product?: SpecificProductUpdateOneRequiredWithoutPromotionsNestedInput
  }

  export type ProductForPromotionUncheckedUpdateWithoutPromotionInput = {
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductForPromotionUncheckedUpdateManyWithoutPromotionInput = {
    productId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}