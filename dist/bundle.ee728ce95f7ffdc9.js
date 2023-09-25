/*! For license information please see bundle.ee728ce95f7ffdc9.js.LICENSE.txt */
(()=>{
    "use strict";
    const t = 100
      , e = 301
      , n = 302
      , i = 306
      , r = 1e3
      , s = 1001
      , a = 1002
      , o = 1003
      , l = 1006
      , c = 1008
      , h = 1009
      , u = 1012
      , d = 1014
      , p = 1015
      , m = 1016
      , f = 1020
      , g = 1022
      , v = 1023
      , x = 1026
      , y = 1027
      , _ = 2300
      , M = 2301
      , b = 2302
      , w = 2400
      , S = 2401
      , T = 2402
      , E = 3e3
      , A = 3001
      , L = 3007
      , R = 3002
      , C = 7680
      , P = 35044
      , D = 35048
      , I = "300 es";
    class N {
        addEventListener(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            const n = this._listeners;
            void 0 === n[t] && (n[t] = []),
            -1 === n[t].indexOf(e) && n[t].push(e)
        }
        hasEventListener(t, e) {
            if (void 0 === this._listeners)
                return !1;
            const n = this._listeners;
            return void 0 !== n[t] && -1 !== n[t].indexOf(e)
        }
        removeEventListener(t, e) {
            if (void 0 === this._listeners)
                return;
            const n = this._listeners[t];
            if (void 0 !== n) {
                const t = n.indexOf(e);
                -1 !== t && n.splice(t, 1)
            }
        }
        dispatchEvent(t) {
            if (void 0 === this._listeners)
                return;
            const e = this._listeners[t.type];
            if (void 0 !== e) {
                t.target = this;
                const n = e.slice(0);
                for (let e = 0, i = n.length; e < i; e++)
                    n[e].call(this, t);
                t.target = null
            }
        }
    }
    const z = Math.PI / 180
      , O = 180 / Math.PI
      , B = [];
    for (let t = 0; t < 256; t++)
        B[t] = (t < 16 ? "0" : "") + t.toString(16);
    const U = "undefined" != typeof crypto && "randomUUID"in crypto;
    function F() {
        if (U)
            return crypto.randomUUID().toUpperCase();
        const t = 4294967295 * Math.random() | 0
          , e = 4294967295 * Math.random() | 0
          , n = 4294967295 * Math.random() | 0
          , i = 4294967295 * Math.random() | 0;
        return (B[255 & t] + B[t >> 8 & 255] + B[t >> 16 & 255] + B[t >> 24 & 255] + "-" + B[255 & e] + B[e >> 8 & 255] + "-" + B[e >> 16 & 15 | 64] + B[e >> 24 & 255] + "-" + B[63 & n | 128] + B[n >> 8 & 255] + "-" + B[n >> 16 & 255] + B[n >> 24 & 255] + B[255 & i] + B[i >> 8 & 255] + B[i >> 16 & 255] + B[i >> 24 & 255]).toUpperCase()
    }
    function H(t, e, n) {
        return Math.max(e, Math.min(n, t))
    }
    function G(t, e, n) {
        return (1 - n) * t + n * e
    }
    function V(t) {
        return 0 == (t & t - 1) && 0 !== t
    }
    function k(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
    }
    class W {
        constructor(t=0, e=0) {
            this.x = t,
            this.y = e
        }
        get width() {
            return this.x
        }
        set width(t) {
            this.x = t
        }
        get height() {
            return this.y
        }
        set height(t) {
            this.y = t
        }
        set(t, e) {
            return this.x = t,
            this.y = e,
            this
        }
        setScalar(t) {
            return this.x = t,
            this.y = t,
            this
        }
        setX(t) {
            return this.x = t,
            this
        }
        setY(t) {
            return this.y = t,
            this
        }
        setComponent(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        }
        getComponent(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + t)
            }
        }
        clone() {
            return new this.constructor(this.x,this.y)
        }
        copy(t) {
            return this.x = t.x,
            this.y = t.y,
            this
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this)
        }
        addScalar(t) {
            return this.x += t,
            this.y += t,
            this
        }
        addVectors(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this
        }
        addScaledVector(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this)
        }
        subScalar(t) {
            return this.x -= t,
            this.y -= t,
            this
        }
        subVectors(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this
        }
        multiply(t) {
            return this.x *= t.x,
            this.y *= t.y,
            this
        }
        multiplyScalar(t) {
            return this.x *= t,
            this.y *= t,
            this
        }
        divide(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t)
        }
        applyMatrix3(t) {
            const e = this.x
              , n = this.y
              , i = t.elements;
            return this.x = i[0] * e + i[3] * n + i[6],
            this.y = i[1] * e + i[4] * n + i[7],
            this
        }
        min(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this
        }
        max(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
            this.y = Math.max(t, Math.min(e, this.y)),
            this
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        }
        round() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this
        }
        negate() {
            return this.x = -this.x,
            this.y = -this.y,
            this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y
        }
        cross(t) {
            return this.x * t.y - this.y * t.x
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t))
        }
        distanceToSquared(t) {
            const e = this.x - t.x
              , n = this.y - t.y;
            return e * e + n * n
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n,
            this.y = t.y + (e.y - t.y) * n,
            this
        }
        equals(t) {
            return t.x === this.x && t.y === this.y
        }
        fromArray(t, e=0) {
            return this.x = t[e],
            this.y = t[e + 1],
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this.x,
            t[e + 1] = this.y,
            t
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this
        }
        rotateAround(t, e) {
            const n = Math.cos(e)
              , i = Math.sin(e)
              , r = this.x - t.x
              , s = this.y - t.y;
            return this.x = r * n - s * i + t.x,
            this.y = r * i + s * n + t.y,
            this
        }
        random() {
            return this.x = Math.random(),
            this.y = Math.random(),
            this
        }
        *[Symbol.iterator]() {
            yield this.x,
            yield this.y
        }
    }
    W.prototype.isVector2 = !0;
    class j {
        constructor() {
            this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
            arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
        }
        set(t, e, n, i, r, s, a, o, l) {
            const c = this.elements;
            return c[0] = t,
            c[1] = i,
            c[2] = a,
            c[3] = e,
            c[4] = r,
            c[5] = o,
            c[6] = n,
            c[7] = s,
            c[8] = l,
            this
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
            this
        }
        copy(t) {
            const e = this.elements
              , n = t.elements;
            return e[0] = n[0],
            e[1] = n[1],
            e[2] = n[2],
            e[3] = n[3],
            e[4] = n[4],
            e[5] = n[5],
            e[6] = n[6],
            e[7] = n[7],
            e[8] = n[8],
            this
        }
        extractBasis(t, e, n) {
            return t.setFromMatrix3Column(this, 0),
            e.setFromMatrix3Column(this, 1),
            n.setFromMatrix3Column(this, 2),
            this
        }
        setFromMatrix4(t) {
            const e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
            this
        }
        multiply(t) {
            return this.multiplyMatrices(this, t)
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this)
        }
        multiplyMatrices(t, e) {
            const n = t.elements
              , i = e.elements
              , r = this.elements
              , s = n[0]
              , a = n[3]
              , o = n[6]
              , l = n[1]
              , c = n[4]
              , h = n[7]
              , u = n[2]
              , d = n[5]
              , p = n[8]
              , m = i[0]
              , f = i[3]
              , g = i[6]
              , v = i[1]
              , x = i[4]
              , y = i[7]
              , _ = i[2]
              , M = i[5]
              , b = i[8];
            return r[0] = s * m + a * v + o * _,
            r[3] = s * f + a * x + o * M,
            r[6] = s * g + a * y + o * b,
            r[1] = l * m + c * v + h * _,
            r[4] = l * f + c * x + h * M,
            r[7] = l * g + c * y + h * b,
            r[2] = u * m + d * v + p * _,
            r[5] = u * f + d * x + p * M,
            r[8] = u * g + d * y + p * b,
            this
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t,
            e[3] *= t,
            e[6] *= t,
            e[1] *= t,
            e[4] *= t,
            e[7] *= t,
            e[2] *= t,
            e[5] *= t,
            e[8] *= t,
            this
        }
        determinant() {
            const t = this.elements
              , e = t[0]
              , n = t[1]
              , i = t[2]
              , r = t[3]
              , s = t[4]
              , a = t[5]
              , o = t[6]
              , l = t[7]
              , c = t[8];
            return e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o
        }
        invert() {
            const t = this.elements
              , e = t[0]
              , n = t[1]
              , i = t[2]
              , r = t[3]
              , s = t[4]
              , a = t[5]
              , o = t[6]
              , l = t[7]
              , c = t[8]
              , h = c * s - a * l
              , u = a * o - c * r
              , d = l * r - s * o
              , p = e * h + n * u + i * d;
            if (0 === p)
                return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const m = 1 / p;
            return t[0] = h * m,
            t[1] = (i * l - c * n) * m,
            t[2] = (a * n - i * s) * m,
            t[3] = u * m,
            t[4] = (c * e - i * o) * m,
            t[5] = (i * r - a * e) * m,
            t[6] = d * m,
            t[7] = (n * o - l * e) * m,
            t[8] = (s * e - n * r) * m,
            this
        }
        transpose() {
            let t;
            const e = this.elements;
            return t = e[1],
            e[1] = e[3],
            e[3] = t,
            t = e[2],
            e[2] = e[6],
            e[6] = t,
            t = e[5],
            e[5] = e[7],
            e[7] = t,
            this
        }
        getNormalMatrix(t) {
            return this.setFromMatrix4(t).invert().transpose()
        }
        transposeIntoArray(t) {
            const e = this.elements;
            return t[0] = e[0],
            t[1] = e[3],
            t[2] = e[6],
            t[3] = e[1],
            t[4] = e[4],
            t[5] = e[7],
            t[6] = e[2],
            t[7] = e[5],
            t[8] = e[8],
            this
        }
        setUvTransform(t, e, n, i, r, s, a) {
            const o = Math.cos(r)
              , l = Math.sin(r);
            return this.set(n * o, n * l, -n * (o * s + l * a) + s + t, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1),
            this
        }
        scale(t, e) {
            const n = this.elements;
            return n[0] *= t,
            n[3] *= t,
            n[6] *= t,
            n[1] *= e,
            n[4] *= e,
            n[7] *= e,
            this
        }
        rotate(t) {
            const e = Math.cos(t)
              , n = Math.sin(t)
              , i = this.elements
              , r = i[0]
              , s = i[3]
              , a = i[6]
              , o = i[1]
              , l = i[4]
              , c = i[7];
            return i[0] = e * r + n * o,
            i[3] = e * s + n * l,
            i[6] = e * a + n * c,
            i[1] = -n * r + e * o,
            i[4] = -n * s + e * l,
            i[7] = -n * a + e * c,
            this
        }
        translate(t, e) {
            const n = this.elements;
            return n[0] += t * n[2],
            n[3] += t * n[5],
            n[6] += t * n[8],
            n[1] += e * n[2],
            n[4] += e * n[5],
            n[7] += e * n[8],
            this
        }
        equals(t) {
            const e = this.elements
              , n = t.elements;
            for (let t = 0; t < 9; t++)
                if (e[t] !== n[t])
                    return !1;
            return !0
        }
        fromArray(t, e=0) {
            for (let n = 0; n < 9; n++)
                this.elements[n] = t[n + e];
            return this
        }
        toArray(t=[], e=0) {
            const n = this.elements;
            return t[e] = n[0],
            t[e + 1] = n[1],
            t[e + 2] = n[2],
            t[e + 3] = n[3],
            t[e + 4] = n[4],
            t[e + 5] = n[5],
            t[e + 6] = n[6],
            t[e + 7] = n[7],
            t[e + 8] = n[8],
            t
        }
        clone() {
            return (new this.constructor).fromArray(this.elements)
        }
    }
    function q(t) {
        if (0 === t.length)
            return -1 / 0;
        let e = t[0];
        for (let n = 1, i = t.length; n < i; ++n)
            t[n] > e && (e = t[n]);
        return e
    }
    function X(t) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", t)
    }
    function Y(t, e=0) {
        let n = 3735928559 ^ e
          , i = 1103547991 ^ e;
        for (let e, r = 0; r < t.length; r++)
            e = t.charCodeAt(r),
            n = Math.imul(n ^ e, 2654435761),
            i = Math.imul(i ^ e, 1597334677);
        return n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(i ^ i >>> 13, 3266489909),
        i = Math.imul(i ^ i >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909),
        4294967296 * (2097151 & i) + (n >>> 0)
    }
    let J;
    j.prototype.isMatrix3 = !0,
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array;
    class Z {
        static getDataURL(t) {
            if (/^data:/i.test(t.src))
                return t.src;
            if ("undefined" == typeof HTMLCanvasElement)
                return t.src;
            let e;
            if (t instanceof HTMLCanvasElement)
                e = t;
            else {
                void 0 === J && (J = X("canvas")),
                J.width = t.width,
                J.height = t.height;
                const n = J.getContext("2d");
                t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height),
                e = J
            }
            return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t),
            e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
        }
    }
    let Q = 0;
    class K extends N {
        constructor(t=K.DEFAULT_IMAGE, e=K.DEFAULT_MAPPING, n=1001, i=1001, r=1006, s=1008, a=1023, o=1009, l=1, c=3e3) {
            super(),
            Object.defineProperty(this, "id", {
                value: Q++
            }),
            this.uuid = F(),
            this.name = "",
            this.image = t,
            this.mipmaps = [],
            this.mapping = e,
            this.wrapS = n,
            this.wrapT = i,
            this.magFilter = r,
            this.minFilter = s,
            this.anisotropy = l,
            this.format = a,
            this.internalFormat = null,
            this.type = o,
            this.offset = new W(0,0),
            this.repeat = new W(1,1),
            this.center = new W(0,0),
            this.rotation = 0,
            this.matrixAutoUpdate = !0,
            this.matrix = new j,
            this.generateMipmaps = !0,
            this.premultiplyAlpha = !1,
            this.flipY = !0,
            this.unpackAlignment = 4,
            this.encoding = c,
            this.userData = {},
            this.version = 0,
            this.onUpdate = null,
            this.isRenderTargetTexture = !1
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.name = t.name,
            this.image = t.image,
            this.mipmaps = t.mipmaps.slice(0),
            this.mapping = t.mapping,
            this.wrapS = t.wrapS,
            this.wrapT = t.wrapT,
            this.magFilter = t.magFilter,
            this.minFilter = t.minFilter,
            this.anisotropy = t.anisotropy,
            this.format = t.format,
            this.internalFormat = t.internalFormat,
            this.type = t.type,
            this.offset.copy(t.offset),
            this.repeat.copy(t.repeat),
            this.center.copy(t.center),
            this.rotation = t.rotation,
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this.matrix.copy(t.matrix),
            this.generateMipmaps = t.generateMipmaps,
            this.premultiplyAlpha = t.premultiplyAlpha,
            this.flipY = t.flipY,
            this.unpackAlignment = t.unpackAlignment,
            this.encoding = t.encoding,
            this.userData = JSON.parse(JSON.stringify(t.userData)),
            this
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid])
                return t.textures[this.uuid];
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            if (void 0 !== this.image) {
                const i = this.image;
                if (void 0 === i.uuid && (i.uuid = F()),
                !e && void 0 === t.images[i.uuid]) {
                    let e;
                    if (Array.isArray(i)) {
                        e = [];
                        for (let t = 0, n = i.length; t < n; t++)
                            i[t].isDataTexture ? e.push($(i[t].image)) : e.push($(i[t]))
                    } else
                        e = $(i);
                    t.images[i.uuid] = {
                        uuid: i.uuid,
                        url: e
                    }
                }
                n.image = i.uuid
            }
            return "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
            e || (t.textures[this.uuid] = n),
            n
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
        transformUv(t) {
            if (300 !== this.mapping)
                return t;
            if (t.applyMatrix3(this.matrix),
            t.x < 0 || t.x > 1)
                switch (this.wrapS) {
                case r:
                    t.x = t.x - Math.floor(t.x);
                    break;
                case s:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case a:
                    1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                }
            if (t.y < 0 || t.y > 1)
                switch (this.wrapT) {
                case r:
                    t.y = t.y - Math.floor(t.y);
                    break;
                case s:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case a:
                    1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                }
            return this.flipY && (t.y = 1 - t.y),
            t
        }
        set needsUpdate(t) {
            !0 === t && this.version++
        }
    }
    function $(t) {
        return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? Z.getDataURL(t) : t.data ? {
            data: Array.prototype.slice.call(t.data),
            width: t.width,
            height: t.height,
            type: t.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."),
        {})
    }
    K.DEFAULT_IMAGE = void 0,
    K.DEFAULT_MAPPING = 300,
    K.prototype.isTexture = !0;
    class tt {
        constructor(t=0, e=0, n=0, i=1) {
            this.x = t,
            this.y = e,
            this.z = n,
            this.w = i
        }
        get width() {
            return this.z
        }
        set width(t) {
            this.z = t
        }
        get height() {
            return this.w
        }
        set height(t) {
            this.w = t
        }
        set(t, e, n, i) {
            return this.x = t,
            this.y = e,
            this.z = n,
            this.w = i,
            this
        }
        setScalar(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this.w = t,
            this
        }
        setX(t) {
            return this.x = t,
            this
        }
        setY(t) {
            return this.y = t,
            this
        }
        setZ(t) {
            return this.z = t,
            this
        }
        setW(t) {
            return this.w = t,
            this
        }
        setComponent(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        }
        getComponent(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + t)
            }
        }
        clone() {
            return new this.constructor(this.x,this.y,this.z,this.w)
        }
        copy(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this.w = void 0 !== t.w ? t.w : 1,
            this
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this.w += t.w,
            this)
        }
        addScalar(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this.w += t,
            this
        }
        addVectors(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this.w = t.w + e.w,
            this
        }
        addScaledVector(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this.w += t.w * e,
            this
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this.w -= t.w,
            this)
        }
        subScalar(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this.w -= t,
            this
        }
        subVectors(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this.w = t.w - e.w,
            this
        }
        multiply(t) {
            return this.x *= t.x,
            this.y *= t.y,
            this.z *= t.z,
            this.w *= t.w,
            this
        }
        multiplyScalar(t) {
            return this.x *= t,
            this.y *= t,
            this.z *= t,
            this.w *= t,
            this
        }
        applyMatrix4(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = this.w
              , s = t.elements;
            return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r,
            this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r,
            this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r,
            this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r,
            this
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t)
        }
        setAxisAngleFromQuaternion(t) {
            this.w = 2 * Math.acos(t.w);
            const e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1,
            this.y = 0,
            this.z = 0) : (this.x = t.x / e,
            this.y = t.y / e,
            this.z = t.z / e),
            this
        }
        setAxisAngleFromRotationMatrix(t) {
            let e, n, i, r;
            const s = .01
              , a = .1
              , o = t.elements
              , l = o[0]
              , c = o[4]
              , h = o[8]
              , u = o[1]
              , d = o[5]
              , p = o[9]
              , m = o[2]
              , f = o[6]
              , g = o[10];
            if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
                if (Math.abs(c + u) < a && Math.abs(h + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a)
                    return this.set(1, 0, 0, 0),
                    this;
                e = Math.PI;
                const t = (l + 1) / 2
                  , o = (d + 1) / 2
                  , v = (g + 1) / 2
                  , x = (c + u) / 4
                  , y = (h + m) / 4
                  , _ = (p + f) / 4;
                return t > o && t > v ? t < s ? (n = 0,
                i = .707106781,
                r = .707106781) : (n = Math.sqrt(t),
                i = x / n,
                r = y / n) : o > v ? o < s ? (n = .707106781,
                i = 0,
                r = .707106781) : (i = Math.sqrt(o),
                n = x / i,
                r = _ / i) : v < s ? (n = .707106781,
                i = .707106781,
                r = 0) : (r = Math.sqrt(v),
                n = y / r,
                i = _ / r),
                this.set(n, i, r, e),
                this
            }
            let v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
            return Math.abs(v) < .001 && (v = 1),
            this.x = (f - p) / v,
            this.y = (h - m) / v,
            this.z = (u - c) / v,
            this.w = Math.acos((l + d + g - 1) / 2),
            this
        }
        min(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this.w = Math.min(this.w, t.w),
            this
        }
        max(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this.w = Math.max(this.w, t.w),
            this
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this.w = Math.max(t.w, Math.min(e.w, this.w)),
            this
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
            this.y = Math.max(t, Math.min(e, this.y)),
            this.z = Math.max(t, Math.min(e, this.z)),
            this.w = Math.max(t, Math.min(e, this.w)),
            this
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this.w = Math.floor(this.w),
            this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this.w = Math.ceil(this.w),
            this
        }
        round() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this.w = Math.round(this.w),
            this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
            this
        }
        negate() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this.w = -this.w,
            this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this.w += (t.w - this.w) * e,
            this
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n,
            this.y = t.y + (e.y - t.y) * n,
            this.z = t.z + (e.z - t.z) * n,
            this.w = t.w + (e.w - t.w) * n,
            this
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        }
        fromArray(t, e=0) {
            return this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this.w = t[e + 3],
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t[e + 3] = this.w,
            t
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this.z = t.getZ(e),
            this.w = t.getW(e),
            this
        }
        random() {
            return this.x = Math.random(),
            this.y = Math.random(),
            this.z = Math.random(),
            this.w = Math.random(),
            this
        }
        *[Symbol.iterator]() {
            yield this.x,
            yield this.y,
            yield this.z,
            yield this.w
        }
    }
    tt.prototype.isVector4 = !0;
    class et extends N {
        constructor(t, e, n={}) {
            super(),
            this.width = t,
            this.height = e,
            this.depth = 1,
            this.scissor = new tt(0,0,t,e),
            this.scissorTest = !1,
            this.viewport = new tt(0,0,t,e),
            this.texture = new K(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),
            this.texture.isRenderTargetTexture = !0,
            this.texture.image = {
                width: t,
                height: e,
                depth: 1
            },
            this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps,
            this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null,
            this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : l,
            this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer,
            this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer,
            this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
        }
        setTexture(t) {
            t.image = {
                width: this.width,
                height: this.height,
                depth: this.depth
            },
            this.texture = t
        }
        setSize(t, e, n=1) {
            this.width === t && this.height === e && this.depth === n || (this.width = t,
            this.height = e,
            this.depth = n,
            this.texture.image.width = t,
            this.texture.image.height = e,
            this.texture.image.depth = n,
            this.dispose()),
            this.viewport.set(0, 0, t, e),
            this.scissor.set(0, 0, t, e)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.width = t.width,
            this.height = t.height,
            this.depth = t.depth,
            this.viewport.copy(t.viewport),
            this.texture = t.texture.clone(),
            this.texture.image = {
                ...this.texture.image
            },
            this.depthBuffer = t.depthBuffer,
            this.stencilBuffer = t.stencilBuffer,
            this.depthTexture = t.depthTexture,
            this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    et.prototype.isWebGLRenderTarget = !0,
    class extends et {
        constructor(t, e, n) {
            super(t, e);
            const i = this.texture;
            this.texture = [];
            for (let t = 0; t < n; t++)
                this.texture[t] = i.clone()
        }
        setSize(t, e, n=1) {
            if (this.width !== t || this.height !== e || this.depth !== n) {
                this.width = t,
                this.height = e,
                this.depth = n;
                for (let i = 0, r = this.texture.length; i < r; i++)
                    this.texture[i].image.width = t,
                    this.texture[i].image.height = e,
                    this.texture[i].image.depth = n;
                this.dispose()
            }
            return this.viewport.set(0, 0, t, e),
            this.scissor.set(0, 0, t, e),
            this
        }
        copy(t) {
            this.dispose(),
            this.width = t.width,
            this.height = t.height,
            this.depth = t.depth,
            this.viewport.set(0, 0, this.width, this.height),
            this.scissor.set(0, 0, this.width, this.height),
            this.depthBuffer = t.depthBuffer,
            this.stencilBuffer = t.stencilBuffer,
            this.depthTexture = t.depthTexture,
            this.texture.length = 0;
            for (let e = 0, n = t.texture.length; e < n; e++)
                this.texture[e] = t.texture[e].clone();
            return this
        }
    }
    .prototype.isWebGLMultipleRenderTargets = !0;
    class nt extends et {
        constructor(t, e, n) {
            super(t, e, n),
            this.samples = 4
        }
        copy(t) {
            return super.copy.call(this, t),
            this.samples = t.samples,
            this
        }
    }
    nt.prototype.isWebGLMultisampleRenderTarget = !0;
    class it {
        constructor(t=0, e=0, n=0, i=1) {
            this._x = t,
            this._y = e,
            this._z = n,
            this._w = i
        }
        static slerp(t, e, n, i) {
            return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),
            n.slerpQuaternions(t, e, i)
        }
        static slerpFlat(t, e, n, i, r, s, a) {
            let o = n[i + 0]
              , l = n[i + 1]
              , c = n[i + 2]
              , h = n[i + 3];
            const u = r[s + 0]
              , d = r[s + 1]
              , p = r[s + 2]
              , m = r[s + 3];
            if (0 === a)
                return t[e + 0] = o,
                t[e + 1] = l,
                t[e + 2] = c,
                void (t[e + 3] = h);
            if (1 === a)
                return t[e + 0] = u,
                t[e + 1] = d,
                t[e + 2] = p,
                void (t[e + 3] = m);
            if (h !== m || o !== u || l !== d || c !== p) {
                let t = 1 - a;
                const e = o * u + l * d + c * p + h * m
                  , n = e >= 0 ? 1 : -1
                  , i = 1 - e * e;
                if (i > Number.EPSILON) {
                    const r = Math.sqrt(i)
                      , s = Math.atan2(r, e * n);
                    t = Math.sin(t * s) / r,
                    a = Math.sin(a * s) / r
                }
                const r = a * n;
                if (o = o * t + u * r,
                l = l * t + d * r,
                c = c * t + p * r,
                h = h * t + m * r,
                t === 1 - a) {
                    const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                    o *= t,
                    l *= t,
                    c *= t,
                    h *= t
                }
            }
            t[e] = o,
            t[e + 1] = l,
            t[e + 2] = c,
            t[e + 3] = h
        }
        static multiplyQuaternionsFlat(t, e, n, i, r, s) {
            const a = n[i]
              , o = n[i + 1]
              , l = n[i + 2]
              , c = n[i + 3]
              , h = r[s]
              , u = r[s + 1]
              , d = r[s + 2]
              , p = r[s + 3];
            return t[e] = a * p + c * h + o * d - l * u,
            t[e + 1] = o * p + c * u + l * h - a * d,
            t[e + 2] = l * p + c * d + a * u - o * h,
            t[e + 3] = c * p - a * h - o * u - l * d,
            t
        }
        get x() {
            return this._x
        }
        set x(t) {
            this._x = t,
            this._onChangeCallback()
        }
        get y() {
            return this._y
        }
        set y(t) {
            this._y = t,
            this._onChangeCallback()
        }
        get z() {
            return this._z
        }
        set z(t) {
            this._z = t,
            this._onChangeCallback()
        }
        get w() {
            return this._w
        }
        set w(t) {
            this._w = t,
            this._onChangeCallback()
        }
        set(t, e, n, i) {
            return this._x = t,
            this._y = e,
            this._z = n,
            this._w = i,
            this._onChangeCallback(),
            this
        }
        clone() {
            return new this.constructor(this._x,this._y,this._z,this._w)
        }
        copy(t) {
            return this._x = t.x,
            this._y = t.y,
            this._z = t.z,
            this._w = t.w,
            this._onChangeCallback(),
            this
        }
        setFromEuler(t, e) {
            if (!t || !t.isEuler)
                throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            const n = t._x
              , i = t._y
              , r = t._z
              , s = t._order
              , a = Math.cos
              , o = Math.sin
              , l = a(n / 2)
              , c = a(i / 2)
              , h = a(r / 2)
              , u = o(n / 2)
              , d = o(i / 2)
              , p = o(r / 2);
            switch (s) {
            case "XYZ":
                this._x = u * c * h + l * d * p,
                this._y = l * d * h - u * c * p,
                this._z = l * c * p + u * d * h,
                this._w = l * c * h - u * d * p;
                break;
            case "YXZ":
                this._x = u * c * h + l * d * p,
                this._y = l * d * h - u * c * p,
                this._z = l * c * p - u * d * h,
                this._w = l * c * h + u * d * p;
                break;
            case "ZXY":
                this._x = u * c * h - l * d * p,
                this._y = l * d * h + u * c * p,
                this._z = l * c * p + u * d * h,
                this._w = l * c * h - u * d * p;
                break;
            case "ZYX":
                this._x = u * c * h - l * d * p,
                this._y = l * d * h + u * c * p,
                this._z = l * c * p - u * d * h,
                this._w = l * c * h + u * d * p;
                break;
            case "YZX":
                this._x = u * c * h + l * d * p,
                this._y = l * d * h + u * c * p,
                this._z = l * c * p - u * d * h,
                this._w = l * c * h - u * d * p;
                break;
            case "XZY":
                this._x = u * c * h - l * d * p,
                this._y = l * d * h - u * c * p,
                this._z = l * c * p + u * d * h,
                this._w = l * c * h + u * d * p;
                break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s)
            }
            return !1 !== e && this._onChangeCallback(),
            this
        }
        setFromAxisAngle(t, e) {
            const n = e / 2
              , i = Math.sin(n);
            return this._x = t.x * i,
            this._y = t.y * i,
            this._z = t.z * i,
            this._w = Math.cos(n),
            this._onChangeCallback(),
            this
        }
        setFromRotationMatrix(t) {
            const e = t.elements
              , n = e[0]
              , i = e[4]
              , r = e[8]
              , s = e[1]
              , a = e[5]
              , o = e[9]
              , l = e[2]
              , c = e[6]
              , h = e[10]
              , u = n + a + h;
            if (u > 0) {
                const t = .5 / Math.sqrt(u + 1);
                this._w = .25 / t,
                this._x = (c - o) * t,
                this._y = (r - l) * t,
                this._z = (s - i) * t
            } else if (n > a && n > h) {
                const t = 2 * Math.sqrt(1 + n - a - h);
                this._w = (c - o) / t,
                this._x = .25 * t,
                this._y = (i + s) / t,
                this._z = (r + l) / t
            } else if (a > h) {
                const t = 2 * Math.sqrt(1 + a - n - h);
                this._w = (r - l) / t,
                this._x = (i + s) / t,
                this._y = .25 * t,
                this._z = (o + c) / t
            } else {
                const t = 2 * Math.sqrt(1 + h - n - a);
                this._w = (s - i) / t,
                this._x = (r + l) / t,
                this._y = (o + c) / t,
                this._z = .25 * t
            }
            return this._onChangeCallback(),
            this
        }
        setFromUnitVectors(t, e) {
            let n = t.dot(e) + 1;
            return n < Number.EPSILON ? (n = 0,
            Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y,
            this._y = t.x,
            this._z = 0,
            this._w = n) : (this._x = 0,
            this._y = -t.z,
            this._z = t.y,
            this._w = n)) : (this._x = t.y * e.z - t.z * e.y,
            this._y = t.z * e.x - t.x * e.z,
            this._z = t.x * e.y - t.y * e.x,
            this._w = n),
            this.normalize()
        }
        angleTo(t) {
            return 2 * Math.acos(Math.abs(H(this.dot(t), -1, 1)))
        }
        rotateTowards(t, e) {
            const n = this.angleTo(t);
            if (0 === n)
                return this;
            const i = Math.min(1, e / n);
            return this.slerp(t, i),
            this
        }
        identity() {
            return this.set(0, 0, 0, 1)
        }
        invert() {
            return this.conjugate()
        }
        conjugate() {
            return this._x *= -1,
            this._y *= -1,
            this._z *= -1,
            this._onChangeCallback(),
            this
        }
        dot(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        }
        normalize() {
            let t = this.length();
            return 0 === t ? (this._x = 0,
            this._y = 0,
            this._z = 0,
            this._w = 1) : (t = 1 / t,
            this._x = this._x * t,
            this._y = this._y * t,
            this._z = this._z * t,
            this._w = this._w * t),
            this._onChangeCallback(),
            this
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
            this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        }
        premultiply(t) {
            return this.multiplyQuaternions(t, this)
        }
        multiplyQuaternions(t, e) {
            const n = t._x
              , i = t._y
              , r = t._z
              , s = t._w
              , a = e._x
              , o = e._y
              , l = e._z
              , c = e._w;
            return this._x = n * c + s * a + i * l - r * o,
            this._y = i * c + s * o + r * a - n * l,
            this._z = r * c + s * l + n * o - i * a,
            this._w = s * c - n * a - i * o - r * l,
            this._onChangeCallback(),
            this
        }
        slerp(t, e) {
            if (0 === e)
                return this;
            if (1 === e)
                return this.copy(t);
            const n = this._x
              , i = this._y
              , r = this._z
              , s = this._w;
            let a = s * t._w + n * t._x + i * t._y + r * t._z;
            if (a < 0 ? (this._w = -t._w,
            this._x = -t._x,
            this._y = -t._y,
            this._z = -t._z,
            a = -a) : this.copy(t),
            a >= 1)
                return this._w = s,
                this._x = n,
                this._y = i,
                this._z = r,
                this;
            const o = 1 - a * a;
            if (o <= Number.EPSILON) {
                const t = 1 - e;
                return this._w = t * s + e * this._w,
                this._x = t * n + e * this._x,
                this._y = t * i + e * this._y,
                this._z = t * r + e * this._z,
                this.normalize(),
                this._onChangeCallback(),
                this
            }
            const l = Math.sqrt(o)
              , c = Math.atan2(l, a)
              , h = Math.sin((1 - e) * c) / l
              , u = Math.sin(e * c) / l;
            return this._w = s * h + this._w * u,
            this._x = n * h + this._x * u,
            this._y = i * h + this._y * u,
            this._z = r * h + this._z * u,
            this._onChangeCallback(),
            this
        }
        slerpQuaternions(t, e, n) {
            this.copy(t).slerp(e, n)
        }
        random() {
            const t = Math.random()
              , e = Math.sqrt(1 - t)
              , n = Math.sqrt(t)
              , i = 2 * Math.PI * Math.random()
              , r = 2 * Math.PI * Math.random();
            return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i))
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        }
        fromArray(t, e=0) {
            return this._x = t[e],
            this._y = t[e + 1],
            this._z = t[e + 2],
            this._w = t[e + 3],
            this._onChangeCallback(),
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._w,
            t
        }
        fromBufferAttribute(t, e) {
            return this._x = t.getX(e),
            this._y = t.getY(e),
            this._z = t.getZ(e),
            this._w = t.getW(e),
            this
        }
        _onChange(t) {
            return this._onChangeCallback = t,
            this
        }
        _onChangeCallback() {}
    }
    it.prototype.isQuaternion = !0;
    class rt {
        constructor(t=0, e=0, n=0) {
            this.x = t,
            this.y = e,
            this.z = n
        }
        set(t, e, n) {
            return void 0 === n && (n = this.z),
            this.x = t,
            this.y = e,
            this.z = n,
            this
        }
        setScalar(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this
        }
        setX(t) {
            return this.x = t,
            this
        }
        setY(t) {
            return this.y = t,
            this
        }
        setZ(t) {
            return this.z = t,
            this
        }
        setComponent(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        }
        getComponent(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + t)
            }
        }
        clone() {
            return new this.constructor(this.x,this.y,this.z)
        }
        copy(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this)
        }
        addScalar(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this
        }
        addVectors(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this
        }
        addScaledVector(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this)
        }
        subScalar(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this
        }
        subVectors(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
            this.multiplyVectors(t, e)) : (this.x *= t.x,
            this.y *= t.y,
            this.z *= t.z,
            this)
        }
        multiplyScalar(t) {
            return this.x *= t,
            this.y *= t,
            this.z *= t,
            this
        }
        multiplyVectors(t, e) {
            return this.x = t.x * e.x,
            this.y = t.y * e.y,
            this.z = t.z * e.z,
            this
        }
        applyEuler(t) {
            return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
            this.applyQuaternion(at.setFromEuler(t))
        }
        applyAxisAngle(t, e) {
            return this.applyQuaternion(at.setFromAxisAngle(t, e))
        }
        applyMatrix3(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = t.elements;
            return this.x = r[0] * e + r[3] * n + r[6] * i,
            this.y = r[1] * e + r[4] * n + r[7] * i,
            this.z = r[2] * e + r[5] * n + r[8] * i,
            this
        }
        applyNormalMatrix(t) {
            return this.applyMatrix3(t).normalize()
        }
        applyMatrix4(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = t.elements
              , s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
            return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s,
            this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s,
            this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s,
            this
        }
        applyQuaternion(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = t.x
              , s = t.y
              , a = t.z
              , o = t.w
              , l = o * e + s * i - a * n
              , c = o * n + a * e - r * i
              , h = o * i + r * n - s * e
              , u = -r * e - s * n - a * i;
            return this.x = l * o + u * -r + c * -a - h * -s,
            this.y = c * o + u * -s + h * -r - l * -a,
            this.z = h * o + u * -a + l * -s - c * -r,
            this
        }
        project(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
        }
        unproject(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
        }
        transformDirection(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = t.elements;
            return this.x = r[0] * e + r[4] * n + r[8] * i,
            this.y = r[1] * e + r[5] * n + r[9] * i,
            this.z = r[2] * e + r[6] * n + r[10] * i,
            this.normalize()
        }
        divide(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this.z /= t.z,
            this
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t)
        }
        min(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this
        }
        max(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
            this.y = Math.max(t, Math.min(e, this.y)),
            this.z = Math.max(t, Math.min(e, this.z)),
            this
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this
        }
        round() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this
        }
        negate() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n,
            this.y = t.y + (e.y - t.y) * n,
            this.z = t.z + (e.z - t.z) * n,
            this
        }
        cross(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
            this.crossVectors(t, e)) : this.crossVectors(this, t)
        }
        crossVectors(t, e) {
            const n = t.x
              , i = t.y
              , r = t.z
              , s = e.x
              , a = e.y
              , o = e.z;
            return this.x = i * o - r * a,
            this.y = r * s - n * o,
            this.z = n * a - i * s,
            this
        }
        projectOnVector(t) {
            const e = t.lengthSq();
            if (0 === e)
                return this.set(0, 0, 0);
            const n = t.dot(this) / e;
            return this.copy(t).multiplyScalar(n)
        }
        projectOnPlane(t) {
            return st.copy(this).projectOnVector(t),
            this.sub(st)
        }
        reflect(t) {
            return this.sub(st.copy(t).multiplyScalar(2 * this.dot(t)))
        }
        angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (0 === e)
                return Math.PI / 2;
            const n = this.dot(t) / e;
            return Math.acos(H(n, -1, 1))
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t))
        }
        distanceToSquared(t) {
            const e = this.x - t.x
              , n = this.y - t.y
              , i = this.z - t.z;
            return e * e + n * n + i * i
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        }
        setFromSpherical(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
        }
        setFromSphericalCoords(t, e, n) {
            const i = Math.sin(e) * t;
            return this.x = i * Math.sin(n),
            this.y = Math.cos(e) * t,
            this.z = i * Math.cos(n),
            this
        }
        setFromCylindrical(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
        }
        setFromCylindricalCoords(t, e, n) {
            return this.x = t * Math.sin(e),
            this.y = n,
            this.z = t * Math.cos(e),
            this
        }
        setFromMatrixPosition(t) {
            const e = t.elements;
            return this.x = e[12],
            this.y = e[13],
            this.z = e[14],
            this
        }
        setFromMatrixScale(t) {
            const e = this.setFromMatrixColumn(t, 0).length()
              , n = this.setFromMatrixColumn(t, 1).length()
              , i = this.setFromMatrixColumn(t, 2).length();
            return this.x = e,
            this.y = n,
            this.z = i,
            this
        }
        setFromMatrixColumn(t, e) {
            return this.fromArray(t.elements, 4 * e)
        }
        setFromMatrix3Column(t, e) {
            return this.fromArray(t.elements, 3 * e)
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        }
        fromArray(t, e=0) {
            return this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this.z = t.getZ(e),
            this
        }
        random() {
            return this.x = Math.random(),
            this.y = Math.random(),
            this.z = Math.random(),
            this
        }
        randomDirection() {
            const t = 2 * (Math.random() - .5)
              , e = Math.random() * Math.PI * 2
              , n = Math.sqrt(1 - t ** 2);
            return this.x = n * Math.cos(e),
            this.y = n * Math.sin(e),
            this.z = t,
            this
        }
        *[Symbol.iterator]() {
            yield this.x,
            yield this.y,
            yield this.z
        }
    }
    rt.prototype.isVector3 = !0;
    const st = new rt
      , at = new it;
    class ot {
        constructor(t=new rt(1 / 0,1 / 0,1 / 0), e=new rt(-1 / 0,-1 / 0,-1 / 0)) {
            this.min = t,
            this.max = e
        }
        set(t, e) {
            return this.min.copy(t),
            this.max.copy(e),
            this
        }
        setFromArray(t) {
            let e = 1 / 0
              , n = 1 / 0
              , i = 1 / 0
              , r = -1 / 0
              , s = -1 / 0
              , a = -1 / 0;
            for (let o = 0, l = t.length; o < l; o += 3) {
                const l = t[o]
                  , c = t[o + 1]
                  , h = t[o + 2];
                l < e && (e = l),
                c < n && (n = c),
                h < i && (i = h),
                l > r && (r = l),
                c > s && (s = c),
                h > a && (a = h)
            }
            return this.min.set(e, n, i),
            this.max.set(r, s, a),
            this
        }
        setFromBufferAttribute(t) {
            let e = 1 / 0
              , n = 1 / 0
              , i = 1 / 0
              , r = -1 / 0
              , s = -1 / 0
              , a = -1 / 0;
            for (let o = 0, l = t.count; o < l; o++) {
                const l = t.getX(o)
                  , c = t.getY(o)
                  , h = t.getZ(o);
                l < e && (e = l),
                c < n && (n = c),
                h < i && (i = h),
                l > r && (r = l),
                c > s && (s = c),
                h > a && (a = h)
            }
            return this.min.set(e, n, i),
            this.max.set(r, s, a),
            this
        }
        setFromPoints(t) {
            this.makeEmpty();
            for (let e = 0, n = t.length; e < n; e++)
                this.expandByPoint(t[e]);
            return this
        }
        setFromCenterAndSize(t, e) {
            const n = ct.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n),
            this.max.copy(t).add(n),
            this
        }
        setFromObject(t) {
            return this.makeEmpty(),
            this.expandByObject(t)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.min.copy(t.min),
            this.max.copy(t.max),
            this
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0,
            this.max.x = this.max.y = this.max.z = -1 / 0,
            this
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        }
        getCenter(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        }
        getSize(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
        }
        expandByPoint(t) {
            return this.min.min(t),
            this.max.max(t),
            this
        }
        expandByVector(t) {
            return this.min.sub(t),
            this.max.add(t),
            this
        }
        expandByScalar(t) {
            return this.min.addScalar(-t),
            this.max.addScalar(t),
            this
        }
        expandByObject(t) {
            t.updateWorldMatrix(!1, !1);
            const e = t.geometry;
            void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(),
            ht.copy(e.boundingBox),
            ht.applyMatrix4(t.matrixWorld),
            this.union(ht));
            const n = t.children;
            for (let t = 0, e = n.length; t < e; t++)
                this.expandByObject(n[t]);
            return this
        }
        containsPoint(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        }
        getParameter(t, e) {
            return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        }
        intersectsBox(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        }
        intersectsSphere(t) {
            return this.clampPoint(t.center, ct),
            ct.distanceToSquared(t.center) <= t.radius * t.radius
        }
        intersectsPlane(t) {
            let e, n;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
            n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
            n = t.normal.x * this.min.x),
            t.normal.y > 0 ? (e += t.normal.y * this.min.y,
            n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
            n += t.normal.y * this.min.y),
            t.normal.z > 0 ? (e += t.normal.z * this.min.z,
            n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
            n += t.normal.z * this.min.z),
            e <= -t.constant && n >= -t.constant
        }
        intersectsTriangle(t) {
            if (this.isEmpty())
                return !1;
            this.getCenter(vt),
            xt.subVectors(this.max, vt),
            ut.subVectors(t.a, vt),
            dt.subVectors(t.b, vt),
            pt.subVectors(t.c, vt),
            mt.subVectors(dt, ut),
            ft.subVectors(pt, dt),
            gt.subVectors(ut, pt);
            let e = [0, -mt.z, mt.y, 0, -ft.z, ft.y, 0, -gt.z, gt.y, mt.z, 0, -mt.x, ft.z, 0, -ft.x, gt.z, 0, -gt.x, -mt.y, mt.x, 0, -ft.y, ft.x, 0, -gt.y, gt.x, 0];
            return !!Mt(e, ut, dt, pt, xt) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1],
            !!Mt(e, ut, dt, pt, xt) && (yt.crossVectors(mt, ft),
            e = [yt.x, yt.y, yt.z],
            Mt(e, ut, dt, pt, xt)))
        }
        clampPoint(t, e) {
            return e.copy(t).clamp(this.min, this.max)
        }
        distanceToPoint(t) {
            return ct.copy(t).clamp(this.min, this.max).sub(t).length()
        }
        getBoundingSphere(t) {
            return this.getCenter(t.center),
            t.radius = .5 * this.getSize(ct).length(),
            t
        }
        intersect(t) {
            return this.min.max(t.min),
            this.max.min(t.max),
            this.isEmpty() && this.makeEmpty(),
            this
        }
        union(t) {
            return this.min.min(t.min),
            this.max.max(t.max),
            this
        }
        applyMatrix4(t) {
            return this.isEmpty() || (lt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
            lt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
            lt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
            lt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
            lt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
            lt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
            lt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
            lt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
            this.setFromPoints(lt)),
            this
        }
        translate(t) {
            return this.min.add(t),
            this.max.add(t),
            this
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }
    ot.prototype.isBox3 = !0;
    const lt = [new rt, new rt, new rt, new rt, new rt, new rt, new rt, new rt]
      , ct = new rt
      , ht = new ot
      , ut = new rt
      , dt = new rt
      , pt = new rt
      , mt = new rt
      , ft = new rt
      , gt = new rt
      , vt = new rt
      , xt = new rt
      , yt = new rt
      , _t = new rt;
    function Mt(t, e, n, i, r) {
        for (let s = 0, a = t.length - 3; s <= a; s += 3) {
            _t.fromArray(t, s);
            const a = r.x * Math.abs(_t.x) + r.y * Math.abs(_t.y) + r.z * Math.abs(_t.z)
              , o = e.dot(_t)
              , l = n.dot(_t)
              , c = i.dot(_t);
            if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a)
                return !1
        }
        return !0
    }
    const bt = new ot
      , wt = new rt
      , St = new rt
      , Tt = new rt;
    class Et {
        constructor(t=new rt, e=-1) {
            this.center = t,
            this.radius = e
        }
        set(t, e) {
            return this.center.copy(t),
            this.radius = e,
            this
        }
        setFromPoints(t, e) {
            const n = this.center;
            void 0 !== e ? n.copy(e) : bt.setFromPoints(t).getCenter(n);
            let i = 0;
            for (let e = 0, r = t.length; e < r; e++)
                i = Math.max(i, n.distanceToSquared(t[e]));
            return this.radius = Math.sqrt(i),
            this
        }
        copy(t) {
            return this.center.copy(t.center),
            this.radius = t.radius,
            this
        }
        isEmpty() {
            return this.radius < 0
        }
        makeEmpty() {
            return this.center.set(0, 0, 0),
            this.radius = -1,
            this
        }
        containsPoint(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        }
        distanceToPoint(t) {
            return t.distanceTo(this.center) - this.radius
        }
        intersectsSphere(t) {
            const e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        }
        intersectsBox(t) {
            return t.intersectsSphere(this)
        }
        intersectsPlane(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius
        }
        clampPoint(t, e) {
            const n = this.center.distanceToSquared(t);
            return e.copy(t),
            n > this.radius * this.radius && (e.sub(this.center).normalize(),
            e.multiplyScalar(this.radius).add(this.center)),
            e
        }
        getBoundingBox(t) {
            return this.isEmpty() ? (t.makeEmpty(),
            t) : (t.set(this.center, this.center),
            t.expandByScalar(this.radius),
            t)
        }
        applyMatrix4(t) {
            return this.center.applyMatrix4(t),
            this.radius = this.radius * t.getMaxScaleOnAxis(),
            this
        }
        translate(t) {
            return this.center.add(t),
            this
        }
        expandByPoint(t) {
            Tt.subVectors(t, this.center);
            const e = Tt.lengthSq();
            if (e > this.radius * this.radius) {
                const t = Math.sqrt(e)
                  , n = .5 * (t - this.radius);
                this.center.add(Tt.multiplyScalar(n / t)),
                this.radius += n
            }
            return this
        }
        union(t) {
            return St.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius),
            this.expandByPoint(wt.copy(t.center).add(St)),
            this.expandByPoint(wt.copy(t.center).sub(St)),
            this
        }
        equals(t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    const At = new rt
      , Lt = new rt
      , Rt = new rt
      , Ct = new rt
      , Pt = new rt
      , Dt = new rt
      , It = new rt;
    class Nt {
        constructor(t=new rt, e=new rt(0,0,-1)) {
            this.origin = t,
            this.direction = e
        }
        set(t, e) {
            return this.origin.copy(t),
            this.direction.copy(e),
            this
        }
        copy(t) {
            return this.origin.copy(t.origin),
            this.direction.copy(t.direction),
            this
        }
        at(t, e) {
            return e.copy(this.direction).multiplyScalar(t).add(this.origin)
        }
        lookAt(t) {
            return this.direction.copy(t).sub(this.origin).normalize(),
            this
        }
        recast(t) {
            return this.origin.copy(this.at(t, At)),
            this
        }
        closestPointToPoint(t, e) {
            e.subVectors(t, this.origin);
            const n = e.dot(this.direction);
            return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
        }
        distanceToPoint(t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        }
        distanceSqToPoint(t) {
            const e = At.subVectors(t, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t) : (At.copy(this.direction).multiplyScalar(e).add(this.origin),
            At.distanceToSquared(t))
        }
        distanceSqToSegment(t, e, n, i) {
            Lt.copy(t).add(e).multiplyScalar(.5),
            Rt.copy(e).sub(t).normalize(),
            Ct.copy(this.origin).sub(Lt);
            const r = .5 * t.distanceTo(e)
              , s = -this.direction.dot(Rt)
              , a = Ct.dot(this.direction)
              , o = -Ct.dot(Rt)
              , l = Ct.lengthSq()
              , c = Math.abs(1 - s * s);
            let h, u, d, p;
            if (c > 0)
                if (h = s * o - a,
                u = s * a - o,
                p = r * c,
                h >= 0)
                    if (u >= -p)
                        if (u <= p) {
                            const t = 1 / c;
                            h *= t,
                            u *= t,
                            d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l
                        } else
                            u = r,
                            h = Math.max(0, -(s * u + a)),
                            d = -h * h + u * (u + 2 * o) + l;
                    else
                        u = -r,
                        h = Math.max(0, -(s * u + a)),
                        d = -h * h + u * (u + 2 * o) + l;
                else
                    u <= -p ? (h = Math.max(0, -(-s * r + a)),
                    u = h > 0 ? -r : Math.min(Math.max(-r, -o), r),
                    d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0,
                    u = Math.min(Math.max(-r, -o), r),
                    d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)),
                    u = h > 0 ? r : Math.min(Math.max(-r, -o), r),
                    d = -h * h + u * (u + 2 * o) + l);
            else
                u = s > 0 ? -r : r,
                h = Math.max(0, -(s * u + a)),
                d = -h * h + u * (u + 2 * o) + l;
            return n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
            i && i.copy(Rt).multiplyScalar(u).add(Lt),
            d
        }
        intersectSphere(t, e) {
            At.subVectors(t.center, this.origin);
            const n = At.dot(this.direction)
              , i = At.dot(At) - n * n
              , r = t.radius * t.radius;
            if (i > r)
                return null;
            const s = Math.sqrt(r - i)
              , a = n - s
              , o = n + s;
            return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e)
        }
        intersectsSphere(t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius
        }
        distanceToPlane(t) {
            const e = t.normal.dot(this.direction);
            if (0 === e)
                return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            const n = -(this.origin.dot(t.normal) + t.constant) / e;
            return n >= 0 ? n : null
        }
        intersectPlane(t, e) {
            const n = this.distanceToPlane(t);
            return null === n ? null : this.at(n, e)
        }
        intersectsPlane(t) {
            const e = t.distanceToPoint(this.origin);
            return 0 === e || t.normal.dot(this.direction) * e < 0
        }
        intersectBox(t, e) {
            let n, i, r, s, a, o;
            const l = 1 / this.direction.x
              , c = 1 / this.direction.y
              , h = 1 / this.direction.z
              , u = this.origin;
            return l >= 0 ? (n = (t.min.x - u.x) * l,
            i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l,
            i = (t.min.x - u.x) * l),
            c >= 0 ? (r = (t.min.y - u.y) * c,
            s = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c,
            s = (t.min.y - u.y) * c),
            n > s || r > i ? null : ((r > n || n != n) && (n = r),
            (s < i || i != i) && (i = s),
            h >= 0 ? (a = (t.min.z - u.z) * h,
            o = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h,
            o = (t.min.z - u.z) * h),
            n > o || a > i ? null : ((a > n || n != n) && (n = a),
            (o < i || i != i) && (i = o),
            i < 0 ? null : this.at(n >= 0 ? n : i, e)))
        }
        intersectsBox(t) {
            return null !== this.intersectBox(t, At)
        }
        intersectTriangle(t, e, n, i, r) {
            Pt.subVectors(e, t),
            Dt.subVectors(n, t),
            It.crossVectors(Pt, Dt);
            let s, a = this.direction.dot(It);
            if (a > 0) {
                if (i)
                    return null;
                s = 1
            } else {
                if (!(a < 0))
                    return null;
                s = -1,
                a = -a
            }
            Ct.subVectors(this.origin, t);
            const o = s * this.direction.dot(Dt.crossVectors(Ct, Dt));
            if (o < 0)
                return null;
            const l = s * this.direction.dot(Pt.cross(Ct));
            if (l < 0)
                return null;
            if (o + l > a)
                return null;
            const c = -s * Ct.dot(It);
            return c < 0 ? null : this.at(c / a, r)
        }
        applyMatrix4(t) {
            return this.origin.applyMatrix4(t),
            this.direction.transformDirection(t),
            this
        }
        equals(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    class zt {
        constructor() {
            this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
        }
        set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
            const g = this.elements;
            return g[0] = t,
            g[4] = e,
            g[8] = n,
            g[12] = i,
            g[1] = r,
            g[5] = s,
            g[9] = a,
            g[13] = o,
            g[2] = l,
            g[6] = c,
            g[10] = h,
            g[14] = u,
            g[3] = d,
            g[7] = p,
            g[11] = m,
            g[15] = f,
            this
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        }
        clone() {
            return (new zt).fromArray(this.elements)
        }
        copy(t) {
            const e = this.elements
              , n = t.elements;
            return e[0] = n[0],
            e[1] = n[1],
            e[2] = n[2],
            e[3] = n[3],
            e[4] = n[4],
            e[5] = n[5],
            e[6] = n[6],
            e[7] = n[7],
            e[8] = n[8],
            e[9] = n[9],
            e[10] = n[10],
            e[11] = n[11],
            e[12] = n[12],
            e[13] = n[13],
            e[14] = n[14],
            e[15] = n[15],
            this
        }
        copyPosition(t) {
            const e = this.elements
              , n = t.elements;
            return e[12] = n[12],
            e[13] = n[13],
            e[14] = n[14],
            this
        }
        setFromMatrix3(t) {
            const e = t.elements;
            return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1),
            this
        }
        extractBasis(t, e, n) {
            return t.setFromMatrixColumn(this, 0),
            e.setFromMatrixColumn(this, 1),
            n.setFromMatrixColumn(this, 2),
            this
        }
        makeBasis(t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1),
            this
        }
        extractRotation(t) {
            const e = this.elements
              , n = t.elements
              , i = 1 / Ot.setFromMatrixColumn(t, 0).length()
              , r = 1 / Ot.setFromMatrixColumn(t, 1).length()
              , s = 1 / Ot.setFromMatrixColumn(t, 2).length();
            return e[0] = n[0] * i,
            e[1] = n[1] * i,
            e[2] = n[2] * i,
            e[3] = 0,
            e[4] = n[4] * r,
            e[5] = n[5] * r,
            e[6] = n[6] * r,
            e[7] = 0,
            e[8] = n[8] * s,
            e[9] = n[9] * s,
            e[10] = n[10] * s,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            this
        }
        makeRotationFromEuler(t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            const e = this.elements
              , n = t.x
              , i = t.y
              , r = t.z
              , s = Math.cos(n)
              , a = Math.sin(n)
              , o = Math.cos(i)
              , l = Math.sin(i)
              , c = Math.cos(r)
              , h = Math.sin(r);
            if ("XYZ" === t.order) {
                const t = s * c
                  , n = s * h
                  , i = a * c
                  , r = a * h;
                e[0] = o * c,
                e[4] = -o * h,
                e[8] = l,
                e[1] = n + i * l,
                e[5] = t - r * l,
                e[9] = -a * o,
                e[2] = r - t * l,
                e[6] = i + n * l,
                e[10] = s * o
            } else if ("YXZ" === t.order) {
                const t = o * c
                  , n = o * h
                  , i = l * c
                  , r = l * h;
                e[0] = t + r * a,
                e[4] = i * a - n,
                e[8] = s * l,
                e[1] = s * h,
                e[5] = s * c,
                e[9] = -a,
                e[2] = n * a - i,
                e[6] = r + t * a,
                e[10] = s * o
            } else if ("ZXY" === t.order) {
                const t = o * c
                  , n = o * h
                  , i = l * c
                  , r = l * h;
                e[0] = t - r * a,
                e[4] = -s * h,
                e[8] = i + n * a,
                e[1] = n + i * a,
                e[5] = s * c,
                e[9] = r - t * a,
                e[2] = -s * l,
                e[6] = a,
                e[10] = s * o
            } else if ("ZYX" === t.order) {
                const t = s * c
                  , n = s * h
                  , i = a * c
                  , r = a * h;
                e[0] = o * c,
                e[4] = i * l - n,
                e[8] = t * l + r,
                e[1] = o * h,
                e[5] = r * l + t,
                e[9] = n * l - i,
                e[2] = -l,
                e[6] = a * o,
                e[10] = s * o
            } else if ("YZX" === t.order) {
                const t = s * o
                  , n = s * l
                  , i = a * o
                  , r = a * l;
                e[0] = o * c,
                e[4] = r - t * h,
                e[8] = i * h + n,
                e[1] = h,
                e[5] = s * c,
                e[9] = -a * c,
                e[2] = -l * c,
                e[6] = n * h + i,
                e[10] = t - r * h
            } else if ("XZY" === t.order) {
                const t = s * o
                  , n = s * l
                  , i = a * o
                  , r = a * l;
                e[0] = o * c,
                e[4] = -h,
                e[8] = l * c,
                e[1] = t * h + r,
                e[5] = s * c,
                e[9] = n * h - i,
                e[2] = i * h - n,
                e[6] = a * c,
                e[10] = r * h + t
            }
            return e[3] = 0,
            e[7] = 0,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            this
        }
        makeRotationFromQuaternion(t) {
            return this.compose(Ut, t, Ft)
        }
        lookAt(t, e, n) {
            const i = this.elements;
            return Vt.subVectors(t, e),
            0 === Vt.lengthSq() && (Vt.z = 1),
            Vt.normalize(),
            Ht.crossVectors(n, Vt),
            0 === Ht.lengthSq() && (1 === Math.abs(n.z) ? Vt.x += 1e-4 : Vt.z += 1e-4,
            Vt.normalize(),
            Ht.crossVectors(n, Vt)),
            Ht.normalize(),
            Gt.crossVectors(Vt, Ht),
            i[0] = Ht.x,
            i[4] = Gt.x,
            i[8] = Vt.x,
            i[1] = Ht.y,
            i[5] = Gt.y,
            i[9] = Vt.y,
            i[2] = Ht.z,
            i[6] = Gt.z,
            i[10] = Vt.z,
            this
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
            this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this)
        }
        multiplyMatrices(t, e) {
            const n = t.elements
              , i = e.elements
              , r = this.elements
              , s = n[0]
              , a = n[4]
              , o = n[8]
              , l = n[12]
              , c = n[1]
              , h = n[5]
              , u = n[9]
              , d = n[13]
              , p = n[2]
              , m = n[6]
              , f = n[10]
              , g = n[14]
              , v = n[3]
              , x = n[7]
              , y = n[11]
              , _ = n[15]
              , M = i[0]
              , b = i[4]
              , w = i[8]
              , S = i[12]
              , T = i[1]
              , E = i[5]
              , A = i[9]
              , L = i[13]
              , R = i[2]
              , C = i[6]
              , P = i[10]
              , D = i[14]
              , I = i[3]
              , N = i[7]
              , z = i[11]
              , O = i[15];
            return r[0] = s * M + a * T + o * R + l * I,
            r[4] = s * b + a * E + o * C + l * N,
            r[8] = s * w + a * A + o * P + l * z,
            r[12] = s * S + a * L + o * D + l * O,
            r[1] = c * M + h * T + u * R + d * I,
            r[5] = c * b + h * E + u * C + d * N,
            r[9] = c * w + h * A + u * P + d * z,
            r[13] = c * S + h * L + u * D + d * O,
            r[2] = p * M + m * T + f * R + g * I,
            r[6] = p * b + m * E + f * C + g * N,
            r[10] = p * w + m * A + f * P + g * z,
            r[14] = p * S + m * L + f * D + g * O,
            r[3] = v * M + x * T + y * R + _ * I,
            r[7] = v * b + x * E + y * C + _ * N,
            r[11] = v * w + x * A + y * P + _ * z,
            r[15] = v * S + x * L + y * D + _ * O,
            this
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t,
            e[4] *= t,
            e[8] *= t,
            e[12] *= t,
            e[1] *= t,
            e[5] *= t,
            e[9] *= t,
            e[13] *= t,
            e[2] *= t,
            e[6] *= t,
            e[10] *= t,
            e[14] *= t,
            e[3] *= t,
            e[7] *= t,
            e[11] *= t,
            e[15] *= t,
            this
        }
        determinant() {
            const t = this.elements
              , e = t[0]
              , n = t[4]
              , i = t[8]
              , r = t[12]
              , s = t[1]
              , a = t[5]
              , o = t[9]
              , l = t[13]
              , c = t[2]
              , h = t[6]
              , u = t[10]
              , d = t[14];
            return t[3] * (+r * o * h - i * l * h - r * a * u + n * l * u + i * a * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * c - r * o * c) + t[11] * (+e * l * h - e * a * d - r * s * h + n * s * d + r * a * c - n * l * c) + t[15] * (-i * a * c - e * o * h + e * a * u + i * s * h - n * s * u + n * o * c)
        }
        transpose() {
            const t = this.elements;
            let e;
            return e = t[1],
            t[1] = t[4],
            t[4] = e,
            e = t[2],
            t[2] = t[8],
            t[8] = e,
            e = t[6],
            t[6] = t[9],
            t[9] = e,
            e = t[3],
            t[3] = t[12],
            t[12] = e,
            e = t[7],
            t[7] = t[13],
            t[13] = e,
            e = t[11],
            t[11] = t[14],
            t[14] = e,
            this
        }
        setPosition(t, e, n) {
            const i = this.elements;
            return t.isVector3 ? (i[12] = t.x,
            i[13] = t.y,
            i[14] = t.z) : (i[12] = t,
            i[13] = e,
            i[14] = n),
            this
        }
        invert() {
            const t = this.elements
              , e = t[0]
              , n = t[1]
              , i = t[2]
              , r = t[3]
              , s = t[4]
              , a = t[5]
              , o = t[6]
              , l = t[7]
              , c = t[8]
              , h = t[9]
              , u = t[10]
              , d = t[11]
              , p = t[12]
              , m = t[13]
              , f = t[14]
              , g = t[15]
              , v = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g
              , x = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g
              , y = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g
              , _ = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f
              , M = e * v + n * x + i * y + r * _;
            if (0 === M)
                return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const b = 1 / M;
            return t[0] = v * b,
            t[1] = (m * u * r - h * f * r - m * i * d + n * f * d + h * i * g - n * u * g) * b,
            t[2] = (a * f * r - m * o * r + m * i * l - n * f * l - a * i * g + n * o * g) * b,
            t[3] = (h * o * r - a * u * r - h * i * l + n * u * l + a * i * d - n * o * d) * b,
            t[4] = x * b,
            t[5] = (c * f * r - p * u * r + p * i * d - e * f * d - c * i * g + e * u * g) * b,
            t[6] = (p * o * r - s * f * r - p * i * l + e * f * l + s * i * g - e * o * g) * b,
            t[7] = (s * u * r - c * o * r + c * i * l - e * u * l - s * i * d + e * o * d) * b,
            t[8] = y * b,
            t[9] = (p * h * r - c * m * r - p * n * d + e * m * d + c * n * g - e * h * g) * b,
            t[10] = (s * m * r - p * a * r + p * n * l - e * m * l - s * n * g + e * a * g) * b,
            t[11] = (c * a * r - s * h * r - c * n * l + e * h * l + s * n * d - e * a * d) * b,
            t[12] = _ * b,
            t[13] = (c * m * i - p * h * i + p * n * u - e * m * u - c * n * f + e * h * f) * b,
            t[14] = (p * a * i - s * m * i - p * n * o + e * m * o + s * n * f - e * a * f) * b,
            t[15] = (s * h * i - c * a * i + c * n * o - e * h * o - s * n * u + e * a * u) * b,
            this
        }
        scale(t) {
            const e = this.elements
              , n = t.x
              , i = t.y
              , r = t.z;
            return e[0] *= n,
            e[4] *= i,
            e[8] *= r,
            e[1] *= n,
            e[5] *= i,
            e[9] *= r,
            e[2] *= n,
            e[6] *= i,
            e[10] *= r,
            e[3] *= n,
            e[7] *= i,
            e[11] *= r,
            this
        }
        getMaxScaleOnAxis() {
            const t = this.elements
              , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
              , n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
              , i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, i))
        }
        makeTranslation(t, e, n) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
            this
        }
        makeRotationX(t) {
            const e = Math.cos(t)
              , n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1),
            this
        }
        makeRotationY(t) {
            const e = Math.cos(t)
              , n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1),
            this
        }
        makeRotationZ(t) {
            const e = Math.cos(t)
              , n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        }
        makeRotationAxis(t, e) {
            const n = Math.cos(e)
              , i = Math.sin(e)
              , r = 1 - n
              , s = t.x
              , a = t.y
              , o = t.z
              , l = r * s
              , c = r * a;
            return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1),
            this
        }
        makeScale(t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
            this
        }
        makeShear(t, e, n, i, r, s) {
            return this.set(1, n, r, 0, t, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1),
            this
        }
        compose(t, e, n) {
            const i = this.elements
              , r = e._x
              , s = e._y
              , a = e._z
              , o = e._w
              , l = r + r
              , c = s + s
              , h = a + a
              , u = r * l
              , d = r * c
              , p = r * h
              , m = s * c
              , f = s * h
              , g = a * h
              , v = o * l
              , x = o * c
              , y = o * h
              , _ = n.x
              , M = n.y
              , b = n.z;
            return i[0] = (1 - (m + g)) * _,
            i[1] = (d + y) * _,
            i[2] = (p - x) * _,
            i[3] = 0,
            i[4] = (d - y) * M,
            i[5] = (1 - (u + g)) * M,
            i[6] = (f + v) * M,
            i[7] = 0,
            i[8] = (p + x) * b,
            i[9] = (f - v) * b,
            i[10] = (1 - (u + m)) * b,
            i[11] = 0,
            i[12] = t.x,
            i[13] = t.y,
            i[14] = t.z,
            i[15] = 1,
            this
        }
        decompose(t, e, n) {
            const i = this.elements;
            let r = Ot.set(i[0], i[1], i[2]).length();
            const s = Ot.set(i[4], i[5], i[6]).length()
              , a = Ot.set(i[8], i[9], i[10]).length();
            this.determinant() < 0 && (r = -r),
            t.x = i[12],
            t.y = i[13],
            t.z = i[14],
            Bt.copy(this);
            const o = 1 / r
              , l = 1 / s
              , c = 1 / a;
            return Bt.elements[0] *= o,
            Bt.elements[1] *= o,
            Bt.elements[2] *= o,
            Bt.elements[4] *= l,
            Bt.elements[5] *= l,
            Bt.elements[6] *= l,
            Bt.elements[8] *= c,
            Bt.elements[9] *= c,
            Bt.elements[10] *= c,
            e.setFromRotationMatrix(Bt),
            n.x = r,
            n.y = s,
            n.z = a,
            this
        }
        makePerspective(t, e, n, i, r, s) {
            void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            const a = this.elements
              , o = 2 * r / (e - t)
              , l = 2 * r / (n - i)
              , c = (e + t) / (e - t)
              , h = (n + i) / (n - i)
              , u = -(s + r) / (s - r)
              , d = -2 * s * r / (s - r);
            return a[0] = o,
            a[4] = 0,
            a[8] = c,
            a[12] = 0,
            a[1] = 0,
            a[5] = l,
            a[9] = h,
            a[13] = 0,
            a[2] = 0,
            a[6] = 0,
            a[10] = u,
            a[14] = d,
            a[3] = 0,
            a[7] = 0,
            a[11] = -1,
            a[15] = 0,
            this
        }
        makeOrthographic(t, e, n, i, r, s) {
            const a = this.elements
              , o = 1 / (e - t)
              , l = 1 / (n - i)
              , c = 1 / (s - r)
              , h = (e + t) * o
              , u = (n + i) * l
              , d = (s + r) * c;
            return a[0] = 2 * o,
            a[4] = 0,
            a[8] = 0,
            a[12] = -h,
            a[1] = 0,
            a[5] = 2 * l,
            a[9] = 0,
            a[13] = -u,
            a[2] = 0,
            a[6] = 0,
            a[10] = -2 * c,
            a[14] = -d,
            a[3] = 0,
            a[7] = 0,
            a[11] = 0,
            a[15] = 1,
            this
        }
        equals(t) {
            const e = this.elements
              , n = t.elements;
            for (let t = 0; t < 16; t++)
                if (e[t] !== n[t])
                    return !1;
            return !0
        }
        fromArray(t, e=0) {
            for (let n = 0; n < 16; n++)
                this.elements[n] = t[n + e];
            return this
        }
        toArray(t=[], e=0) {
            const n = this.elements;
            return t[e] = n[0],
            t[e + 1] = n[1],
            t[e + 2] = n[2],
            t[e + 3] = n[3],
            t[e + 4] = n[4],
            t[e + 5] = n[5],
            t[e + 6] = n[6],
            t[e + 7] = n[7],
            t[e + 8] = n[8],
            t[e + 9] = n[9],
            t[e + 10] = n[10],
            t[e + 11] = n[11],
            t[e + 12] = n[12],
            t[e + 13] = n[13],
            t[e + 14] = n[14],
            t[e + 15] = n[15],
            t
        }
    }
    zt.prototype.isMatrix4 = !0;
    const Ot = new rt
      , Bt = new zt
      , Ut = new rt(0,0,0)
      , Ft = new rt(1,1,1)
      , Ht = new rt
      , Gt = new rt
      , Vt = new rt
      , kt = new zt
      , Wt = new it;
    class jt {
        constructor(t=0, e=0, n=0, i=jt.DefaultOrder) {
            this._x = t,
            this._y = e,
            this._z = n,
            this._order = i
        }
        get x() {
            return this._x
        }
        set x(t) {
            this._x = t,
            this._onChangeCallback()
        }
        get y() {
            return this._y
        }
        set y(t) {
            this._y = t,
            this._onChangeCallback()
        }
        get z() {
            return this._z
        }
        set z(t) {
            this._z = t,
            this._onChangeCallback()
        }
        get order() {
            return this._order
        }
        set order(t) {
            this._order = t,
            this._onChangeCallback()
        }
        set(t, e, n, i=this._order) {
            return this._x = t,
            this._y = e,
            this._z = n,
            this._order = i,
            this._onChangeCallback(),
            this
        }
        clone() {
            return new this.constructor(this._x,this._y,this._z,this._order)
        }
        copy(t) {
            return this._x = t._x,
            this._y = t._y,
            this._z = t._z,
            this._order = t._order,
            this._onChangeCallback(),
            this
        }
        setFromRotationMatrix(t, e=this._order, n=!0) {
            const i = t.elements
              , r = i[0]
              , s = i[4]
              , a = i[8]
              , o = i[1]
              , l = i[5]
              , c = i[9]
              , h = i[2]
              , u = i[6]
              , d = i[10];
            switch (e) {
            case "XYZ":
                this._y = Math.asin(H(a, -1, 1)),
                Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d),
                this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l),
                this._z = 0);
                break;
            case "YXZ":
                this._x = Math.asin(-H(c, -1, 1)),
                Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d),
                this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r),
                this._z = 0);
                break;
            case "ZXY":
                this._x = Math.asin(H(u, -1, 1)),
                Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d),
                this._z = Math.atan2(-s, l)) : (this._y = 0,
                this._z = Math.atan2(o, r));
                break;
            case "ZYX":
                this._y = Math.asin(-H(h, -1, 1)),
                Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d),
                this._z = Math.atan2(o, r)) : (this._x = 0,
                this._z = Math.atan2(-s, l));
                break;
            case "YZX":
                this._z = Math.asin(H(o, -1, 1)),
                Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l),
                this._y = Math.atan2(-h, r)) : (this._x = 0,
                this._y = Math.atan2(a, d));
                break;
            case "XZY":
                this._z = Math.asin(-H(s, -1, 1)),
                Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l),
                this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d),
                this._y = 0);
                break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
            }
            return this._order = e,
            !0 === n && this._onChangeCallback(),
            this
        }
        setFromQuaternion(t, e, n) {
            return kt.makeRotationFromQuaternion(t),
            this.setFromRotationMatrix(kt, e, n)
        }
        setFromVector3(t, e=this._order) {
            return this.set(t.x, t.y, t.z, e)
        }
        reorder(t) {
            return Wt.setFromEuler(this),
            this.setFromQuaternion(Wt, t)
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        }
        fromArray(t) {
            return this._x = t[0],
            this._y = t[1],
            this._z = t[2],
            void 0 !== t[3] && (this._order = t[3]),
            this._onChangeCallback(),
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._order,
            t
        }
        toVector3(t) {
            return t ? t.set(this._x, this._y, this._z) : new rt(this._x,this._y,this._z)
        }
        _onChange(t) {
            return this._onChangeCallback = t,
            this
        }
        _onChangeCallback() {}
    }
    jt.prototype.isEuler = !0,
    jt.DefaultOrder = "XYZ",
    jt.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
    class qt {
        constructor() {
            this.mask = 1
        }
        set(t) {
            this.mask = 1 << t | 0
        }
        enable(t) {
            this.mask |= 1 << t | 0
        }
        enableAll() {
            this.mask = -1
        }
        toggle(t) {
            this.mask ^= 1 << t | 0
        }
        disable(t) {
            this.mask &= ~(1 << t | 0)
        }
        disableAll() {
            this.mask = 0
        }
        test(t) {
            return 0 != (this.mask & t.mask)
        }
    }
    let Xt = 0;
    const Yt = new rt
      , Jt = new it
      , Zt = new zt
      , Qt = new rt
      , Kt = new rt
      , $t = new rt
      , te = new it
      , ee = new rt(1,0,0)
      , ne = new rt(0,1,0)
      , ie = new rt(0,0,1)
      , re = {
        type: "added"
    }
      , se = {
        type: "removed"
    };
    class ae extends N {
        constructor() {
            super(),
            Object.defineProperty(this, "id", {
                value: Xt++
            }),
            this.uuid = F(),
            this.name = "",
            this.type = "Object3D",
            this.parent = null,
            this.children = [],
            this.up = ae.DefaultUp.clone();
            const t = new rt
              , e = new jt
              , n = new it
              , i = new rt(1,1,1);
            e._onChange((function() {
                n.setFromEuler(e, !1)
            }
            )),
            n._onChange((function() {
                e.setFromQuaternion(n, void 0, !1)
            }
            )),
            Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: i
                },
                modelViewMatrix: {
                    value: new zt
                },
                normalMatrix: {
                    value: new j
                }
            }),
            this.matrix = new zt,
            this.matrixWorld = new zt,
            this.matrixAutoUpdate = ae.DefaultMatrixAutoUpdate,
            this.matrixWorldNeedsUpdate = !1,
            this.layers = new qt,
            this.visible = !0,
            this.castShadow = !1,
            this.receiveShadow = !1,
            this.frustumCulled = !0,
            this.renderOrder = 0,
            this.animations = [],
            this.userData = {}
        }
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t) {
            this.matrixAutoUpdate && this.updateMatrix(),
            this.matrix.premultiply(t),
            this.matrix.decompose(this.position, this.quaternion, this.scale)
        }
        applyQuaternion(t) {
            return this.quaternion.premultiply(t),
            this
        }
        setRotationFromAxisAngle(t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        }
        setRotationFromEuler(t) {
            this.quaternion.setFromEuler(t, !0)
        }
        setRotationFromMatrix(t) {
            this.quaternion.setFromRotationMatrix(t)
        }
        setRotationFromQuaternion(t) {
            this.quaternion.copy(t)
        }
        rotateOnAxis(t, e) {
            return Jt.setFromAxisAngle(t, e),
            this.quaternion.multiply(Jt),
            this
        }
        rotateOnWorldAxis(t, e) {
            return Jt.setFromAxisAngle(t, e),
            this.quaternion.premultiply(Jt),
            this
        }
        rotateX(t) {
            return this.rotateOnAxis(ee, t)
        }
        rotateY(t) {
            return this.rotateOnAxis(ne, t)
        }
        rotateZ(t) {
            return this.rotateOnAxis(ie, t)
        }
        translateOnAxis(t, e) {
            return Yt.copy(t).applyQuaternion(this.quaternion),
            this.position.add(Yt.multiplyScalar(e)),
            this
        }
        translateX(t) {
            return this.translateOnAxis(ee, t)
        }
        translateY(t) {
            return this.translateOnAxis(ne, t)
        }
        translateZ(t) {
            return this.translateOnAxis(ie, t)
        }
        localToWorld(t) {
            return t.applyMatrix4(this.matrixWorld)
        }
        worldToLocal(t) {
            return t.applyMatrix4(Zt.copy(this.matrixWorld).invert())
        }
        lookAt(t, e, n) {
            t.isVector3 ? Qt.copy(t) : Qt.set(t, e, n);
            const i = this.parent;
            this.updateWorldMatrix(!0, !1),
            Kt.setFromMatrixPosition(this.matrixWorld),
            this.isCamera || this.isLight ? Zt.lookAt(Kt, Qt, this.up) : Zt.lookAt(Qt, Kt, this.up),
            this.quaternion.setFromRotationMatrix(Zt),
            i && (Zt.extractRotation(i.matrixWorld),
            Jt.setFromRotationMatrix(Zt),
            this.quaternion.premultiply(Jt.invert()))
        }
        add(t) {
            if (arguments.length > 1) {
                for (let t = 0; t < arguments.length; t++)
                    this.add(arguments[t]);
                return this
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
            this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t),
            t.parent = this,
            this.children.push(t),
            t.dispatchEvent(re)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
            this)
        }
        remove(t) {
            if (arguments.length > 1) {
                for (let t = 0; t < arguments.length; t++)
                    this.remove(arguments[t]);
                return this
            }
            const e = this.children.indexOf(t);
            return -1 !== e && (t.parent = null,
            this.children.splice(e, 1),
            t.dispatchEvent(se)),
            this
        }
        removeFromParent() {
            const t = this.parent;
            return null !== t && t.remove(this),
            this
        }
        clear() {
            for (let t = 0; t < this.children.length; t++) {
                const e = this.children[t];
                e.parent = null,
                e.dispatchEvent(se)
            }
            return this.children.length = 0,
            this
        }
        attach(t) {
            return this.updateWorldMatrix(!0, !1),
            Zt.copy(this.matrixWorld).invert(),
            null !== t.parent && (t.parent.updateWorldMatrix(!0, !1),
            Zt.multiply(t.parent.matrixWorld)),
            t.applyMatrix4(Zt),
            this.add(t),
            t.updateWorldMatrix(!1, !0),
            this
        }
        getObjectById(t) {
            return this.getObjectByProperty("id", t)
        }
        getObjectByName(t) {
            return this.getObjectByProperty("name", t)
        }
        getObjectByProperty(t, e) {
            if (this[t] === e)
                return this;
            for (let n = 0, i = this.children.length; n < i; n++) {
                const i = this.children[n].getObjectByProperty(t, e);
                if (void 0 !== i)
                    return i
            }
        }
        getWorldPosition(t) {
            return this.updateWorldMatrix(!0, !1),
            t.setFromMatrixPosition(this.matrixWorld)
        }
        getWorldQuaternion(t) {
            return this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(Kt, t, $t),
            t
        }
        getWorldScale(t) {
            return this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(Kt, te, t),
            t
        }
        getWorldDirection(t) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize()
        }
        raycast() {}
        traverse(t) {
            t(this);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++)
                e[n].traverse(t)
        }
        traverseVisible(t) {
            if (!1 === this.visible)
                return;
            t(this);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++)
                e[n].traverseVisible(t)
        }
        traverseAncestors(t) {
            const e = this.parent;
            null !== e && (t(e),
            e.traverseAncestors(t))
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale),
            this.matrixWorldNeedsUpdate = !0
        }
        updateMatrixWorld(t) {
            this.matrixAutoUpdate && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            this.matrixWorldNeedsUpdate = !1,
            t = !0);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++)
                e[n].updateMatrixWorld(t)
        }
        updateWorldMatrix(t, e) {
            const n = this.parent;
            if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
            this.matrixAutoUpdate && this.updateMatrix(),
            null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            !0 === e) {
                const t = this.children;
                for (let e = 0, n = t.length; e < n; e++)
                    t[e].updateWorldMatrix(!1, !0)
            }
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t
              , n = {};
            e && (t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {}
            },
            n.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const i = {};
            function r(e, n) {
                return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)),
                n.uuid
            }
            if (i.uuid = this.uuid,
            i.type = this.type,
            "" !== this.name && (i.name = this.name),
            !0 === this.castShadow && (i.castShadow = !0),
            !0 === this.receiveShadow && (i.receiveShadow = !0),
            !1 === this.visible && (i.visible = !1),
            !1 === this.frustumCulled && (i.frustumCulled = !1),
            0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
            "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
            i.layers = this.layers.mask,
            i.matrix = this.matrix.toArray(),
            !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
            this.isInstancedMesh && (i.type = "InstancedMesh",
            i.count = this.count,
            i.instanceMatrix = this.instanceMatrix.toJSON(),
            null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())),
            this.isScene)
                this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)),
                this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(t).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                i.geometry = r(t.geometries, this.geometry);
                const e = this.geometry.parameters;
                if (void 0 !== e && void 0 !== e.shapes) {
                    const n = e.shapes;
                    if (Array.isArray(n))
                        for (let e = 0, i = n.length; e < i; e++) {
                            const i = n[e];
                            r(t.shapes, i)
                        }
                    else
                        r(t.shapes, n)
                }
            }
            if (this.isSkinnedMesh && (i.bindMode = this.bindMode,
            i.bindMatrix = this.bindMatrix.toArray(),
            void 0 !== this.skeleton && (r(t.skeletons, this.skeleton),
            i.skeleton = this.skeleton.uuid)),
            void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    const e = [];
                    for (let n = 0, i = this.material.length; n < i; n++)
                        e.push(r(t.materials, this.material[n]));
                    i.material = e
                } else
                    i.material = r(t.materials, this.material);
            if (this.children.length > 0) {
                i.children = [];
                for (let e = 0; e < this.children.length; e++)
                    i.children.push(this.children[e].toJSON(t).object)
            }
            if (this.animations.length > 0) {
                i.animations = [];
                for (let e = 0; e < this.animations.length; e++) {
                    const n = this.animations[e];
                    i.animations.push(r(t.animations, n))
                }
            }
            if (e) {
                const e = s(t.geometries)
                  , i = s(t.materials)
                  , r = s(t.textures)
                  , a = s(t.images)
                  , o = s(t.shapes)
                  , l = s(t.skeletons)
                  , c = s(t.animations);
                e.length > 0 && (n.geometries = e),
                i.length > 0 && (n.materials = i),
                r.length > 0 && (n.textures = r),
                a.length > 0 && (n.images = a),
                o.length > 0 && (n.shapes = o),
                l.length > 0 && (n.skeletons = l),
                c.length > 0 && (n.animations = c)
            }
            return n.object = i,
            n;
            function s(t) {
                const e = [];
                for (const n in t) {
                    const i = t[n];
                    delete i.metadata,
                    e.push(i)
                }
                return e
            }
        }
        clone(t) {
            return (new this.constructor).copy(this, t)
        }
        copy(t, e=!0) {
            if (this.name = t.name,
            this.up.copy(t.up),
            this.position.copy(t.position),
            this.rotation.order = t.rotation.order,
            this.quaternion.copy(t.quaternion),
            this.scale.copy(t.scale),
            this.matrix.copy(t.matrix),
            this.matrixWorld.copy(t.matrixWorld),
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
            this.layers.mask = t.layers.mask,
            this.visible = t.visible,
            this.castShadow = t.castShadow,
            this.receiveShadow = t.receiveShadow,
            this.frustumCulled = t.frustumCulled,
            this.renderOrder = t.renderOrder,
            this.userData = JSON.parse(JSON.stringify(t.userData)),
            !0 === e)
                for (let e = 0; e < t.children.length; e++) {
                    const n = t.children[e];
                    this.add(n.clone())
                }
            return this
        }
    }
    ae.DefaultUp = new rt(0,1,0),
    ae.DefaultMatrixAutoUpdate = !0,
    ae.prototype.isObject3D = !0;
    const oe = new rt
      , le = new rt
      , ce = new rt
      , he = new rt
      , ue = new rt
      , de = new rt
      , pe = new rt
      , me = new rt
      , fe = new rt
      , ge = new rt;
    class ve {
        constructor(t=new rt, e=new rt, n=new rt) {
            this.a = t,
            this.b = e,
            this.c = n
        }
        static getNormal(t, e, n, i) {
            i.subVectors(n, e),
            oe.subVectors(t, e),
            i.cross(oe);
            const r = i.lengthSq();
            return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
        }
        static getBarycoord(t, e, n, i, r) {
            oe.subVectors(i, e),
            le.subVectors(n, e),
            ce.subVectors(t, e);
            const s = oe.dot(oe)
              , a = oe.dot(le)
              , o = oe.dot(ce)
              , l = le.dot(le)
              , c = le.dot(ce)
              , h = s * l - a * a;
            if (0 === h)
                return r.set(-2, -1, -1);
            const u = 1 / h
              , d = (l * o - a * c) * u
              , p = (s * c - a * o) * u;
            return r.set(1 - d - p, p, d)
        }
        static containsPoint(t, e, n, i) {
            return this.getBarycoord(t, e, n, i, he),
            he.x >= 0 && he.y >= 0 && he.x + he.y <= 1
        }
        static getUV(t, e, n, i, r, s, a, o) {
            return this.getBarycoord(t, e, n, i, he),
            o.set(0, 0),
            o.addScaledVector(r, he.x),
            o.addScaledVector(s, he.y),
            o.addScaledVector(a, he.z),
            o
        }
        static isFrontFacing(t, e, n, i) {
            return oe.subVectors(n, e),
            le.subVectors(t, e),
            oe.cross(le).dot(i) < 0
        }
        set(t, e, n) {
            return this.a.copy(t),
            this.b.copy(e),
            this.c.copy(n),
            this
        }
        setFromPointsAndIndices(t, e, n, i) {
            return this.a.copy(t[e]),
            this.b.copy(t[n]),
            this.c.copy(t[i]),
            this
        }
        setFromAttributeAndIndices(t, e, n, i) {
            return this.a.fromBufferAttribute(t, e),
            this.b.fromBufferAttribute(t, n),
            this.c.fromBufferAttribute(t, i),
            this
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.a.copy(t.a),
            this.b.copy(t.b),
            this.c.copy(t.c),
            this
        }
        getArea() {
            return oe.subVectors(this.c, this.b),
            le.subVectors(this.a, this.b),
            .5 * oe.cross(le).length()
        }
        getMidpoint(t) {
            return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        }
        getNormal(t) {
            return ve.getNormal(this.a, this.b, this.c, t)
        }
        getPlane(t) {
            return t.setFromCoplanarPoints(this.a, this.b, this.c)
        }
        getBarycoord(t, e) {
            return ve.getBarycoord(t, this.a, this.b, this.c, e)
        }
        getUV(t, e, n, i, r) {
            return ve.getUV(t, this.a, this.b, this.c, e, n, i, r)
        }
        containsPoint(t) {
            return ve.containsPoint(t, this.a, this.b, this.c)
        }
        isFrontFacing(t) {
            return ve.isFrontFacing(this.a, this.b, this.c, t)
        }
        intersectsBox(t) {
            return t.intersectsTriangle(this)
        }
        closestPointToPoint(t, e) {
            const n = this.a
              , i = this.b
              , r = this.c;
            let s, a;
            ue.subVectors(i, n),
            de.subVectors(r, n),
            me.subVectors(t, n);
            const o = ue.dot(me)
              , l = de.dot(me);
            if (o <= 0 && l <= 0)
                return e.copy(n);
            fe.subVectors(t, i);
            const c = ue.dot(fe)
              , h = de.dot(fe);
            if (c >= 0 && h <= c)
                return e.copy(i);
            const u = o * h - c * l;
            if (u <= 0 && o >= 0 && c <= 0)
                return s = o / (o - c),
                e.copy(n).addScaledVector(ue, s);
            ge.subVectors(t, r);
            const d = ue.dot(ge)
              , p = de.dot(ge);
            if (p >= 0 && d <= p)
                return e.copy(r);
            const m = d * l - o * p;
            if (m <= 0 && l >= 0 && p <= 0)
                return a = l / (l - p),
                e.copy(n).addScaledVector(de, a);
            const f = c * p - d * h;
            if (f <= 0 && h - c >= 0 && d - p >= 0)
                return pe.subVectors(r, i),
                a = (h - c) / (h - c + (d - p)),
                e.copy(i).addScaledVector(pe, a);
            const g = 1 / (f + m + u);
            return s = m * g,
            a = u * g,
            e.copy(n).addScaledVector(ue, s).addScaledVector(de, a)
        }
        equals(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    }
    let xe = 0;
    class ye extends N {
        constructor() {
            super(),
            Object.defineProperty(this, "id", {
                value: xe++
            }),
            this.uuid = F(),
            this.name = "",
            this.type = "Material",
            this.fog = !0,
            this.blending = 1,
            this.side = 0,
            this.vertexColors = !1,
            this.opacity = 1,
            this.format = v,
            this.transparent = !1,
            this.blendSrc = 204,
            this.blendDst = 205,
            this.blendEquation = t,
            this.blendSrcAlpha = null,
            this.blendDstAlpha = null,
            this.blendEquationAlpha = null,
            this.depthFunc = 3,
            this.depthTest = !0,
            this.depthWrite = !0,
            this.stencilWriteMask = 255,
            this.stencilFunc = 519,
            this.stencilRef = 0,
            this.stencilFuncMask = 255,
            this.stencilFail = C,
            this.stencilZFail = C,
            this.stencilZPass = C,
            this.stencilWrite = !1,
            this.clippingPlanes = null,
            this.clipIntersection = !1,
            this.clipShadows = !1,
            this.shadowSide = null,
            this.colorWrite = !0,
            this.precision = null,
            this.polygonOffset = !1,
            this.polygonOffsetFactor = 0,
            this.polygonOffsetUnits = 0,
            this.dithering = !1,
            this.alphaToCoverage = !1,
            this.premultipliedAlpha = !1,
            this.visible = !0,
            this.toneMapped = !0,
            this.userData = {},
            this.version = 0,
            this._alphaTest = 0
        }
        get alphaTest() {
            return this._alphaTest
        }
        set alphaTest(t) {
            this._alphaTest > 0 != t > 0 && this.version++,
            this._alphaTest = t
        }
        onBuild() {}
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString()
        }
        setValues(t) {
            if (void 0 !== t)
                for (const e in t) {
                    const n = t[e];
                    if (void 0 === n) {
                        console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                        continue
                    }
                    if ("shading" === e) {
                        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                        this.flatShading = 1 === n;
                        continue
                    }
                    const i = this[e];
                    void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                }
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            e && (t = {
                textures: {},
                images: {}
            });
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            function i(t) {
                const e = [];
                for (const n in t) {
                    const i = t[n];
                    delete i.metadata,
                    e.push(i)
                }
                return e
            }
            if (n.uuid = this.uuid,
            n.type = this.type,
            "" !== this.name && (n.name = this.name),
            this.color && this.color.isColor && (n.color = this.color.getHex()),
            void 0 !== this.roughness && (n.roughness = this.roughness),
            void 0 !== this.metalness && (n.metalness = this.metalness),
            void 0 !== this.sheen && (n.sheen = this.sheen),
            this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
            void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness),
            this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
            this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
            this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
            void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity),
            this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
            void 0 !== this.shininess && (n.shininess = this.shininess),
            void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
            void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness),
            this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
            this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
            this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid,
            n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
            this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
            this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid),
            this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
            this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid,
            n.lightMapIntensity = this.lightMapIntensity),
            this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid,
            n.aoMapIntensity = this.aoMapIntensity),
            this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid,
            n.bumpScale = this.bumpScale),
            this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid,
            n.normalMapType = this.normalMapType,
            n.normalScale = this.normalScale.toArray()),
            this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid,
            n.displacementScale = this.displacementScale,
            n.displacementBias = this.displacementBias),
            this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
            this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
            this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
            this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
            this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
            this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
            this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid,
            void 0 !== this.combine && (n.combine = this.combine)),
            void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity),
            void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
            void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio),
            this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
            void 0 !== this.transmission && (n.transmission = this.transmission),
            this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
            void 0 !== this.thickness && (n.thickness = this.thickness),
            this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
            void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance),
            void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()),
            void 0 !== this.size && (n.size = this.size),
            null !== this.shadowSide && (n.shadowSide = this.shadowSide),
            void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
            1 !== this.blending && (n.blending = this.blending),
            0 !== this.side && (n.side = this.side),
            this.vertexColors && (n.vertexColors = !0),
            this.opacity < 1 && (n.opacity = this.opacity),
            this.format !== v && (n.format = this.format),
            !0 === this.transparent && (n.transparent = this.transparent),
            n.depthFunc = this.depthFunc,
            n.depthTest = this.depthTest,
            n.depthWrite = this.depthWrite,
            n.colorWrite = this.colorWrite,
            n.stencilWrite = this.stencilWrite,
            n.stencilWriteMask = this.stencilWriteMask,
            n.stencilFunc = this.stencilFunc,
            n.stencilRef = this.stencilRef,
            n.stencilFuncMask = this.stencilFuncMask,
            n.stencilFail = this.stencilFail,
            n.stencilZFail = this.stencilZFail,
            n.stencilZPass = this.stencilZPass,
            this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
            !0 === this.polygonOffset && (n.polygonOffset = !0),
            0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
            0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
            this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth),
            void 0 !== this.dashSize && (n.dashSize = this.dashSize),
            void 0 !== this.gapSize && (n.gapSize = this.gapSize),
            void 0 !== this.scale && (n.scale = this.scale),
            !0 === this.dithering && (n.dithering = !0),
            this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
            !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage),
            !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
            !0 === this.wireframe && (n.wireframe = this.wireframe),
            this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
            "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
            "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
            !0 === this.flatShading && (n.flatShading = this.flatShading),
            !1 === this.visible && (n.visible = !1),
            !1 === this.toneMapped && (n.toneMapped = !1),
            "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
            e) {
                const e = i(t.textures)
                  , r = i(t.images);
                e.length > 0 && (n.textures = e),
                r.length > 0 && (n.images = r)
            }
            return n
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            this.name = t.name,
            this.fog = t.fog,
            this.blending = t.blending,
            this.side = t.side,
            this.vertexColors = t.vertexColors,
            this.opacity = t.opacity,
            this.format = t.format,
            this.transparent = t.transparent,
            this.blendSrc = t.blendSrc,
            this.blendDst = t.blendDst,
            this.blendEquation = t.blendEquation,
            this.blendSrcAlpha = t.blendSrcAlpha,
            this.blendDstAlpha = t.blendDstAlpha,
            this.blendEquationAlpha = t.blendEquationAlpha,
            this.depthFunc = t.depthFunc,
            this.depthTest = t.depthTest,
            this.depthWrite = t.depthWrite,
            this.stencilWriteMask = t.stencilWriteMask,
            this.stencilFunc = t.stencilFunc,
            this.stencilRef = t.stencilRef,
            this.stencilFuncMask = t.stencilFuncMask,
            this.stencilFail = t.stencilFail,
            this.stencilZFail = t.stencilZFail,
            this.stencilZPass = t.stencilZPass,
            this.stencilWrite = t.stencilWrite;
            const e = t.clippingPlanes;
            let n = null;
            if (null !== e) {
                const t = e.length;
                n = new Array(t);
                for (let i = 0; i !== t; ++i)
                    n[i] = e[i].clone()
            }
            return this.clippingPlanes = n,
            this.clipIntersection = t.clipIntersection,
            this.clipShadows = t.clipShadows,
            this.shadowSide = t.shadowSide,
            this.colorWrite = t.colorWrite,
            this.precision = t.precision,
            this.polygonOffset = t.polygonOffset,
            this.polygonOffsetFactor = t.polygonOffsetFactor,
            this.polygonOffsetUnits = t.polygonOffsetUnits,
            this.dithering = t.dithering,
            this.alphaTest = t.alphaTest,
            this.alphaToCoverage = t.alphaToCoverage,
            this.premultipliedAlpha = t.premultipliedAlpha,
            this.visible = t.visible,
            this.toneMapped = t.toneMapped,
            this.userData = JSON.parse(JSON.stringify(t.userData)),
            this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
        set needsUpdate(t) {
            !0 === t && this.version++
        }
    }
    ye.prototype.isMaterial = !0;
    const _e = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }
      , Me = {
        h: 0,
        s: 0,
        l: 0
    }
      , be = {
        h: 0,
        s: 0,
        l: 0
    };
    function we(t, e, n) {
        return n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
    }
    function Se(t) {
        return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
    }
    function Te(t) {
        return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
    }
    class Ee {
        constructor(t, e, n) {
            return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
        }
        set(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t),
            this
        }
        setScalar(t) {
            return this.r = t,
            this.g = t,
            this.b = t,
            this
        }
        setHex(t) {
            return t = Math.floor(t),
            this.r = (t >> 16 & 255) / 255,
            this.g = (t >> 8 & 255) / 255,
            this.b = (255 & t) / 255,
            this
        }
        setRGB(t, e, n) {
            return this.r = t,
            this.g = e,
            this.b = n,
            this
        }
        setHSL(t, e, n) {
            if (t = (t % (i = 1) + i) % i,
            e = H(e, 0, 1),
            n = H(n, 0, 1),
            0 === e)
                this.r = this.g = this.b = n;
            else {
                const i = n <= .5 ? n * (1 + e) : n + e - n * e
                  , r = 2 * n - i;
                this.r = we(r, i, t + 1 / 3),
                this.g = we(r, i, t),
                this.b = we(r, i, t - 1 / 3)
            }
            var i;
            return this
        }
        setStyle(t) {
            function e(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }
            let n;
            if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
                let t;
                const i = n[1]
                  , r = n[2];
                switch (i) {
                case "rgb":
                case "rgba":
                    if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                        return this.r = Math.min(255, parseInt(t[1], 10)) / 255,
                        this.g = Math.min(255, parseInt(t[2], 10)) / 255,
                        this.b = Math.min(255, parseInt(t[3], 10)) / 255,
                        e(t[4]),
                        this;
                    if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                        return this.r = Math.min(100, parseInt(t[1], 10)) / 100,
                        this.g = Math.min(100, parseInt(t[2], 10)) / 100,
                        this.b = Math.min(100, parseInt(t[3], 10)) / 100,
                        e(t[4]),
                        this;
                    break;
                case "hsl":
                case "hsla":
                    if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
                        const n = parseFloat(t[1]) / 360
                          , i = parseInt(t[2], 10) / 100
                          , r = parseInt(t[3], 10) / 100;
                        return e(t[4]),
                        this.setHSL(n, i, r)
                    }
                }
            } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
                const t = n[1]
                  , e = t.length;
                if (3 === e)
                    return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255,
                    this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255,
                    this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255,
                    this;
                if (6 === e)
                    return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255,
                    this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255,
                    this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255,
                    this
            }
            return t && t.length > 0 ? this.setColorName(t) : this
        }
        setColorName(t) {
            const e = _e[t.toLowerCase()];
            return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t),
            this
        }
        clone() {
            return new this.constructor(this.r,this.g,this.b)
        }
        copy(t) {
            return this.r = t.r,
            this.g = t.g,
            this.b = t.b,
            this
        }
        copyGammaToLinear(t, e=2) {
            return this.r = Math.pow(t.r, e),
            this.g = Math.pow(t.g, e),
            this.b = Math.pow(t.b, e),
            this
        }
        copyLinearToGamma(t, e=2) {
            const n = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, n),
            this.g = Math.pow(t.g, n),
            this.b = Math.pow(t.b, n),
            this
        }
        convertGammaToLinear(t) {
            return this.copyGammaToLinear(this, t),
            this
        }
        convertLinearToGamma(t) {
            return this.copyLinearToGamma(this, t),
            this
        }
        copySRGBToLinear(t) {
            return this.r = Se(t.r),
            this.g = Se(t.g),
            this.b = Se(t.b),
            this
        }
        copyLinearToSRGB(t) {
            return this.r = Te(t.r),
            this.g = Te(t.g),
            this.b = Te(t.b),
            this
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this),
            this
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this),
            this
        }
        getHex() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        }
        getHexString() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        }
        getHSL(t) {
            const e = this.r
              , n = this.g
              , i = this.b
              , r = Math.max(e, n, i)
              , s = Math.min(e, n, i);
            let a, o;
            const l = (s + r) / 2;
            if (s === r)
                a = 0,
                o = 0;
            else {
                const t = r - s;
                switch (o = l <= .5 ? t / (r + s) : t / (2 - r - s),
                r) {
                case e:
                    a = (n - i) / t + (n < i ? 6 : 0);
                    break;
                case n:
                    a = (i - e) / t + 2;
                    break;
                case i:
                    a = (e - n) / t + 4
                }
                a /= 6
            }
            return t.h = a,
            t.s = o,
            t.l = l,
            t
        }
        getStyle() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        }
        offsetHSL(t, e, n) {
            return this.getHSL(Me),
            Me.h += t,
            Me.s += e,
            Me.l += n,
            this.setHSL(Me.h, Me.s, Me.l),
            this
        }
        add(t) {
            return this.r += t.r,
            this.g += t.g,
            this.b += t.b,
            this
        }
        addColors(t, e) {
            return this.r = t.r + e.r,
            this.g = t.g + e.g,
            this.b = t.b + e.b,
            this
        }
        addScalar(t) {
            return this.r += t,
            this.g += t,
            this.b += t,
            this
        }
        sub(t) {
            return this.r = Math.max(0, this.r - t.r),
            this.g = Math.max(0, this.g - t.g),
            this.b = Math.max(0, this.b - t.b),
            this
        }
        multiply(t) {
            return this.r *= t.r,
            this.g *= t.g,
            this.b *= t.b,
            this
        }
        multiplyScalar(t) {
            return this.r *= t,
            this.g *= t,
            this.b *= t,
            this
        }
        lerp(t, e) {
            return this.r += (t.r - this.r) * e,
            this.g += (t.g - this.g) * e,
            this.b += (t.b - this.b) * e,
            this
        }
        lerpColors(t, e, n) {
            return this.r = t.r + (e.r - t.r) * n,
            this.g = t.g + (e.g - t.g) * n,
            this.b = t.b + (e.b - t.b) * n,
            this
        }
        lerpHSL(t, e) {
            this.getHSL(Me),
            t.getHSL(be);
            const n = G(Me.h, be.h, e)
              , i = G(Me.s, be.s, e)
              , r = G(Me.l, be.l, e);
            return this.setHSL(n, i, r),
            this
        }
        equals(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        }
        fromArray(t, e=0) {
            return this.r = t[e],
            this.g = t[e + 1],
            this.b = t[e + 2],
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this.r,
            t[e + 1] = this.g,
            t[e + 2] = this.b,
            t
        }
        fromBufferAttribute(t, e) {
            return this.r = t.getX(e),
            this.g = t.getY(e),
            this.b = t.getZ(e),
            !0 === t.normalized && (this.r /= 255,
            this.g /= 255,
            this.b /= 255),
            this
        }
        toJSON() {
            return this.getHex()
        }
    }
    Ee.NAMES = _e,
    Ee.prototype.isColor = !0,
    Ee.prototype.r = 1,
    Ee.prototype.g = 1,
    Ee.prototype.b = 1;
    class Ae extends ye {
        constructor(t) {
            super(),
            this.type = "MeshBasicMaterial",
            this.color = new Ee(16777215),
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.specularMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.combine = 0,
            this.reflectivity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.map = t.map,
            this.lightMap = t.lightMap,
            this.lightMapIntensity = t.lightMapIntensity,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.specularMap = t.specularMap,
            this.alphaMap = t.alphaMap,
            this.envMap = t.envMap,
            this.combine = t.combine,
            this.reflectivity = t.reflectivity,
            this.refractionRatio = t.refractionRatio,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this
        }
    }
    Ae.prototype.isMeshBasicMaterial = !0;
    const Le = new rt
      , Re = new W;
    class Ce {
        constructor(t, e, n) {
            if (Array.isArray(t))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.name = "",
            this.array = t,
            this.itemSize = e,
            this.count = void 0 !== t ? t.length / e : 0,
            this.normalized = !0 === n,
            this.usage = P,
            this.updateRange = {
                offset: 0,
                count: -1
            },
            this.version = 0
        }
        onUploadCallback() {}
        set needsUpdate(t) {
            !0 === t && this.version++
        }
        setUsage(t) {
            return this.usage = t,
            this
        }
        copy(t) {
            return this.name = t.name,
            this.array = new t.array.constructor(t.array),
            this.itemSize = t.itemSize,
            this.count = t.count,
            this.normalized = t.normalized,
            this.usage = t.usage,
            this
        }
        copyAt(t, e, n) {
            t *= this.itemSize,
            n *= e.itemSize;
            for (let i = 0, r = this.itemSize; i < r; i++)
                this.array[t + i] = e.array[n + i];
            return this
        }
        copyArray(t) {
            return this.array.set(t),
            this
        }
        copyColorsArray(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i),
                r = new Ee),
                e[n++] = r.r,
                e[n++] = r.g,
                e[n++] = r.b
            }
            return this
        }
        copyVector2sArray(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
                r = new W),
                e[n++] = r.x,
                e[n++] = r.y
            }
            return this
        }
        copyVector3sArray(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i),
                r = new rt),
                e[n++] = r.x,
                e[n++] = r.y,
                e[n++] = r.z
            }
            return this
        }
        copyVector4sArray(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i),
                r = new tt),
                e[n++] = r.x,
                e[n++] = r.y,
                e[n++] = r.z,
                e[n++] = r.w
            }
            return this
        }
        applyMatrix3(t) {
            if (2 === this.itemSize)
                for (let e = 0, n = this.count; e < n; e++)
                    Re.fromBufferAttribute(this, e),
                    Re.applyMatrix3(t),
                    this.setXY(e, Re.x, Re.y);
            else if (3 === this.itemSize)
                for (let e = 0, n = this.count; e < n; e++)
                    Le.fromBufferAttribute(this, e),
                    Le.applyMatrix3(t),
                    this.setXYZ(e, Le.x, Le.y, Le.z);
            return this
        }
        applyMatrix4(t) {
            for (let e = 0, n = this.count; e < n; e++)
                Le.x = this.getX(e),
                Le.y = this.getY(e),
                Le.z = this.getZ(e),
                Le.applyMatrix4(t),
                this.setXYZ(e, Le.x, Le.y, Le.z);
            return this
        }
        applyNormalMatrix(t) {
            for (let e = 0, n = this.count; e < n; e++)
                Le.x = this.getX(e),
                Le.y = this.getY(e),
                Le.z = this.getZ(e),
                Le.applyNormalMatrix(t),
                this.setXYZ(e, Le.x, Le.y, Le.z);
            return this
        }
        transformDirection(t) {
            for (let e = 0, n = this.count; e < n; e++)
                Le.x = this.getX(e),
                Le.y = this.getY(e),
                Le.z = this.getZ(e),
                Le.transformDirection(t),
                this.setXYZ(e, Le.x, Le.y, Le.z);
            return this
        }
        set(t, e=0) {
            return this.array.set(t, e),
            this
        }
        getX(t) {
            return this.array[t * this.itemSize]
        }
        setX(t, e) {
            return this.array[t * this.itemSize] = e,
            this
        }
        getY(t) {
            return this.array[t * this.itemSize + 1]
        }
        setY(t, e) {
            return this.array[t * this.itemSize + 1] = e,
            this
        }
        getZ(t) {
            return this.array[t * this.itemSize + 2]
        }
        setZ(t, e) {
            return this.array[t * this.itemSize + 2] = e,
            this
        }
        getW(t) {
            return this.array[t * this.itemSize + 3]
        }
        setW(t, e) {
            return this.array[t * this.itemSize + 3] = e,
            this
        }
        setXY(t, e, n) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = n,
            this
        }
        setXYZ(t, e, n, i) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = n,
            this.array[t + 2] = i,
            this
        }
        setXYZW(t, e, n, i, r) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = n,
            this.array[t + 2] = i,
            this.array[t + 3] = r,
            this
        }
        onUpload(t) {
            return this.onUploadCallback = t,
            this
        }
        clone() {
            return new this.constructor(this.array,this.itemSize).copy(this)
        }
        toJSON() {
            const t = {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.prototype.slice.call(this.array),
                normalized: this.normalized
            };
            return "" !== this.name && (t.name = this.name),
            this.usage !== P && (t.usage = this.usage),
            0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange),
            t
        }
    }
    Ce.prototype.isBufferAttribute = !0;
    class Pe extends Ce {
        constructor(t, e, n) {
            super(new Uint16Array(t), e, n)
        }
    }
    class De extends Ce {
        constructor(t, e, n) {
            super(new Uint32Array(t), e, n)
        }
    }
    (class extends Ce {
        constructor(t, e, n) {
            super(new Uint16Array(t), e, n)
        }
    }
    ).prototype.isFloat16BufferAttribute = !0;
    class Ie extends Ce {
        constructor(t, e, n) {
            super(new Float32Array(t), e, n)
        }
    }
    let Ne = 0;
    const ze = new zt
      , Oe = new ae
      , Be = new rt
      , Ue = new ot
      , Fe = new ot
      , He = new rt;
    class Ge extends N {
        constructor() {
            super(),
            Object.defineProperty(this, "id", {
                value: Ne++
            }),
            this.uuid = F(),
            this.name = "",
            this.type = "BufferGeometry",
            this.index = null,
            this.attributes = {},
            this.morphAttributes = {},
            this.morphTargetsRelative = !1,
            this.groups = [],
            this.boundingBox = null,
            this.boundingSphere = null,
            this.drawRange = {
                start: 0,
                count: 1 / 0
            },
            this.userData = {}
        }
        getIndex() {
            return this.index
        }
        setIndex(t) {
            return Array.isArray(t) ? this.index = new (q(t) > 65535 ? De : Pe)(t,1) : this.index = t,
            this
        }
        getAttribute(t) {
            return this.attributes[t]
        }
        setAttribute(t, e) {
            return this.attributes[t] = e,
            this
        }
        deleteAttribute(t) {
            return delete this.attributes[t],
            this
        }
        hasAttribute(t) {
            return void 0 !== this.attributes[t]
        }
        addGroup(t, e, n=0) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: n
            })
        }
        clearGroups() {
            this.groups = []
        }
        setDrawRange(t, e) {
            this.drawRange.start = t,
            this.drawRange.count = e
        }
        applyMatrix4(t) {
            const e = this.attributes.position;
            void 0 !== e && (e.applyMatrix4(t),
            e.needsUpdate = !0);
            const n = this.attributes.normal;
            if (void 0 !== n) {
                const e = (new j).getNormalMatrix(t);
                n.applyNormalMatrix(e),
                n.needsUpdate = !0
            }
            const i = this.attributes.tangent;
            return void 0 !== i && (i.transformDirection(t),
            i.needsUpdate = !0),
            null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
        }
        applyQuaternion(t) {
            return ze.makeRotationFromQuaternion(t),
            this.applyMatrix4(ze),
            this
        }
        rotateX(t) {
            return ze.makeRotationX(t),
            this.applyMatrix4(ze),
            this
        }
        rotateY(t) {
            return ze.makeRotationY(t),
            this.applyMatrix4(ze),
            this
        }
        rotateZ(t) {
            return ze.makeRotationZ(t),
            this.applyMatrix4(ze),
            this
        }
        translate(t, e, n) {
            return ze.makeTranslation(t, e, n),
            this.applyMatrix4(ze),
            this
        }
        scale(t, e, n) {
            return ze.makeScale(t, e, n),
            this.applyMatrix4(ze),
            this
        }
        lookAt(t) {
            return Oe.lookAt(t),
            Oe.updateMatrix(),
            this.applyMatrix4(Oe.matrix),
            this
        }
        center() {
            return this.computeBoundingBox(),
            this.boundingBox.getCenter(Be).negate(),
            this.translate(Be.x, Be.y, Be.z),
            this
        }
        setFromPoints(t) {
            const e = [];
            for (let n = 0, i = t.length; n < i; n++) {
                const i = t[n];
                e.push(i.x, i.y, i.z || 0)
            }
            return this.setAttribute("position", new Ie(e,3)),
            this
        }
        computeBoundingBox() {
            null === this.boundingBox && (this.boundingBox = new ot);
            const t = this.attributes.position
              , e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute)
                return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
                void this.boundingBox.set(new rt(-1 / 0,-1 / 0,-1 / 0), new rt(1 / 0,1 / 0,1 / 0));
            if (void 0 !== t) {
                if (this.boundingBox.setFromBufferAttribute(t),
                e)
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        Ue.setFromBufferAttribute(n),
                        this.morphTargetsRelative ? (He.addVectors(this.boundingBox.min, Ue.min),
                        this.boundingBox.expandByPoint(He),
                        He.addVectors(this.boundingBox.max, Ue.max),
                        this.boundingBox.expandByPoint(He)) : (this.boundingBox.expandByPoint(Ue.min),
                        this.boundingBox.expandByPoint(Ue.max))
                    }
            } else
                this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }
        computeBoundingSphere() {
            null === this.boundingSphere && (this.boundingSphere = new Et);
            const t = this.attributes.position
              , e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute)
                return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
                void this.boundingSphere.set(new rt, 1 / 0);
            if (t) {
                const n = this.boundingSphere.center;
                if (Ue.setFromBufferAttribute(t),
                e)
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        Fe.setFromBufferAttribute(n),
                        this.morphTargetsRelative ? (He.addVectors(Ue.min, Fe.min),
                        Ue.expandByPoint(He),
                        He.addVectors(Ue.max, Fe.max),
                        Ue.expandByPoint(He)) : (Ue.expandByPoint(Fe.min),
                        Ue.expandByPoint(Fe.max))
                    }
                Ue.getCenter(n);
                let i = 0;
                for (let e = 0, r = t.count; e < r; e++)
                    He.fromBufferAttribute(t, e),
                    i = Math.max(i, n.distanceToSquared(He));
                if (e)
                    for (let r = 0, s = e.length; r < s; r++) {
                        const s = e[r]
                          , a = this.morphTargetsRelative;
                        for (let e = 0, r = s.count; e < r; e++)
                            He.fromBufferAttribute(s, e),
                            a && (Be.fromBufferAttribute(t, e),
                            He.add(Be)),
                            i = Math.max(i, n.distanceToSquared(He))
                    }
                this.boundingSphere.radius = Math.sqrt(i),
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
        computeTangents() {
            const t = this.index
              , e = this.attributes;
            if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv)
                return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            const n = t.array
              , i = e.position.array
              , r = e.normal.array
              , s = e.uv.array
              , a = i.length / 3;
            void 0 === e.tangent && this.setAttribute("tangent", new Ce(new Float32Array(4 * a),4));
            const o = e.tangent.array
              , l = []
              , c = [];
            for (let t = 0; t < a; t++)
                l[t] = new rt,
                c[t] = new rt;
            const h = new rt
              , u = new rt
              , d = new rt
              , p = new W
              , m = new W
              , f = new W
              , g = new rt
              , v = new rt;
            function x(t, e, n) {
                h.fromArray(i, 3 * t),
                u.fromArray(i, 3 * e),
                d.fromArray(i, 3 * n),
                p.fromArray(s, 2 * t),
                m.fromArray(s, 2 * e),
                f.fromArray(s, 2 * n),
                u.sub(h),
                d.sub(h),
                m.sub(p),
                f.sub(p);
                const r = 1 / (m.x * f.y - f.x * m.y);
                isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r),
                v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r),
                l[t].add(g),
                l[e].add(g),
                l[n].add(g),
                c[t].add(v),
                c[e].add(v),
                c[n].add(v))
            }
            let y = this.groups;
            0 === y.length && (y = [{
                start: 0,
                count: n.length
            }]);
            for (let t = 0, e = y.length; t < e; ++t) {
                const e = y[t]
                  , i = e.start;
                for (let t = i, r = i + e.count; t < r; t += 3)
                    x(n[t + 0], n[t + 1], n[t + 2])
            }
            const _ = new rt
              , M = new rt
              , b = new rt
              , w = new rt;
            function S(t) {
                b.fromArray(r, 3 * t),
                w.copy(b);
                const e = l[t];
                _.copy(e),
                _.sub(b.multiplyScalar(b.dot(e))).normalize(),
                M.crossVectors(w, e);
                const n = M.dot(c[t]) < 0 ? -1 : 1;
                o[4 * t] = _.x,
                o[4 * t + 1] = _.y,
                o[4 * t + 2] = _.z,
                o[4 * t + 3] = n
            }
            for (let t = 0, e = y.length; t < e; ++t) {
                const e = y[t]
                  , i = e.start;
                for (let t = i, r = i + e.count; t < r; t += 3)
                    S(n[t + 0]),
                    S(n[t + 1]),
                    S(n[t + 2])
            }
        }
        computeVertexNormals() {
            const t = this.index
              , e = this.getAttribute("position");
            if (void 0 !== e) {
                let n = this.getAttribute("normal");
                if (void 0 === n)
                    n = new Ce(new Float32Array(3 * e.count),3),
                    this.setAttribute("normal", n);
                else
                    for (let t = 0, e = n.count; t < e; t++)
                        n.setXYZ(t, 0, 0, 0);
                const i = new rt
                  , r = new rt
                  , s = new rt
                  , a = new rt
                  , o = new rt
                  , l = new rt
                  , c = new rt
                  , h = new rt;
                if (t)
                    for (let u = 0, d = t.count; u < d; u += 3) {
                        const d = t.getX(u + 0)
                          , p = t.getX(u + 1)
                          , m = t.getX(u + 2);
                        i.fromBufferAttribute(e, d),
                        r.fromBufferAttribute(e, p),
                        s.fromBufferAttribute(e, m),
                        c.subVectors(s, r),
                        h.subVectors(i, r),
                        c.cross(h),
                        a.fromBufferAttribute(n, d),
                        o.fromBufferAttribute(n, p),
                        l.fromBufferAttribute(n, m),
                        a.add(c),
                        o.add(c),
                        l.add(c),
                        n.setXYZ(d, a.x, a.y, a.z),
                        n.setXYZ(p, o.x, o.y, o.z),
                        n.setXYZ(m, l.x, l.y, l.z)
                    }
                else
                    for (let t = 0, a = e.count; t < a; t += 3)
                        i.fromBufferAttribute(e, t + 0),
                        r.fromBufferAttribute(e, t + 1),
                        s.fromBufferAttribute(e, t + 2),
                        c.subVectors(s, r),
                        h.subVectors(i, r),
                        c.cross(h),
                        n.setXYZ(t + 0, c.x, c.y, c.z),
                        n.setXYZ(t + 1, c.x, c.y, c.z),
                        n.setXYZ(t + 2, c.x, c.y, c.z);
                this.normalizeNormals(),
                n.needsUpdate = !0
            }
        }
        merge(t, e) {
            if (!t || !t.isBufferGeometry)
                return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
            void 0 === e && (e = 0,
            console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
            const n = this.attributes;
            for (const i in n) {
                if (void 0 === t.attributes[i])
                    continue;
                const r = n[i].array
                  , s = t.attributes[i]
                  , a = s.array
                  , o = s.itemSize * e
                  , l = Math.min(a.length, r.length - o);
                for (let t = 0, e = o; t < l; t++,
                e++)
                    r[e] = a[t]
            }
            return this
        }
        normalizeNormals() {
            const t = this.attributes.normal;
            for (let e = 0, n = t.count; e < n; e++)
                He.fromBufferAttribute(t, e),
                He.normalize(),
                t.setXYZ(e, He.x, He.y, He.z)
        }
        toNonIndexed() {
            function t(t, e) {
                const n = t.array
                  , i = t.itemSize
                  , r = t.normalized
                  , s = new n.constructor(e.length * i);
                let a = 0
                  , o = 0;
                for (let r = 0, l = e.length; r < l; r++) {
                    a = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * i;
                    for (let t = 0; t < i; t++)
                        s[o++] = n[a++]
                }
                return new Ce(s,i,r)
            }
            if (null === this.index)
                return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
                this;
            const e = new Ge
              , n = this.index.array
              , i = this.attributes;
            for (const r in i) {
                const s = t(i[r], n);
                e.setAttribute(r, s)
            }
            const r = this.morphAttributes;
            for (const i in r) {
                const s = []
                  , a = r[i];
                for (let e = 0, i = a.length; e < i; e++) {
                    const i = t(a[e], n);
                    s.push(i)
                }
                e.morphAttributes[i] = s
            }
            e.morphTargetsRelative = this.morphTargetsRelative;
            const s = this.groups;
            for (let t = 0, n = s.length; t < n; t++) {
                const n = s[t];
                e.addGroup(n.start, n.count, n.materialIndex)
            }
            return e
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid,
            t.type = this.type,
            "" !== this.name && (t.name = this.name),
            Object.keys(this.userData).length > 0 && (t.userData = this.userData),
            void 0 !== this.parameters) {
                const e = this.parameters;
                for (const n in e)
                    void 0 !== e[n] && (t[n] = e[n]);
                return t
            }
            t.data = {
                attributes: {}
            };
            const e = this.index;
            null !== e && (t.data.index = {
                type: e.array.constructor.name,
                array: Array.prototype.slice.call(e.array)
            });
            const n = this.attributes;
            for (const e in n) {
                const i = n[e];
                t.data.attributes[e] = i.toJSON(t.data)
            }
            const i = {};
            let r = !1;
            for (const e in this.morphAttributes) {
                const n = this.morphAttributes[e]
                  , s = [];
                for (let e = 0, i = n.length; e < i; e++) {
                    const i = n[e];
                    s.push(i.toJSON(t.data))
                }
                s.length > 0 && (i[e] = s,
                r = !0)
            }
            r && (t.data.morphAttributes = i,
            t.data.morphTargetsRelative = this.morphTargetsRelative);
            const s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
            const a = this.boundingSphere;
            return null !== a && (t.data.boundingSphere = {
                center: a.center.toArray(),
                radius: a.radius
            }),
            t
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            this.index = null,
            this.attributes = {},
            this.morphAttributes = {},
            this.groups = [],
            this.boundingBox = null,
            this.boundingSphere = null;
            const e = {};
            this.name = t.name;
            const n = t.index;
            null !== n && this.setIndex(n.clone(e));
            const i = t.attributes;
            for (const t in i) {
                const n = i[t];
                this.setAttribute(t, n.clone(e))
            }
            const r = t.morphAttributes;
            for (const t in r) {
                const n = []
                  , i = r[t];
                for (let t = 0, r = i.length; t < r; t++)
                    n.push(i[t].clone(e));
                this.morphAttributes[t] = n
            }
            this.morphTargetsRelative = t.morphTargetsRelative;
            const s = t.groups;
            for (let t = 0, e = s.length; t < e; t++) {
                const e = s[t];
                this.addGroup(e.start, e.count, e.materialIndex)
            }
            const a = t.boundingBox;
            null !== a && (this.boundingBox = a.clone());
            const o = t.boundingSphere;
            return null !== o && (this.boundingSphere = o.clone()),
            this.drawRange.start = t.drawRange.start,
            this.drawRange.count = t.drawRange.count,
            this.userData = t.userData,
            void 0 !== t.parameters && (this.parameters = Object.assign({}, t.parameters)),
            this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    Ge.prototype.isBufferGeometry = !0;
    const Ve = new zt
      , ke = new Nt
      , We = new Et
      , je = new rt
      , qe = new rt
      , Xe = new rt
      , Ye = new rt
      , Je = new rt
      , Ze = new rt
      , Qe = new rt
      , Ke = new rt
      , $e = new rt
      , tn = new W
      , en = new W
      , nn = new W
      , rn = new rt
      , sn = new rt;
    class an extends ae {
        constructor(t=new Ge, e=new Ae) {
            super(),
            this.type = "Mesh",
            this.geometry = t,
            this.material = e,
            this.updateMorphTargets()
        }
        copy(t) {
            return super.copy(t),
            void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
            void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
            this.material = t.material,
            this.geometry = t.geometry,
            this
        }
        updateMorphTargets() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes
                  , n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {};
                        for (let e = 0, n = t.length; e < n; e++) {
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0),
                            this.morphTargetDictionary[n] = e
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        }
        raycast(t, e) {
            const n = this.geometry
              , i = this.material
              , r = this.matrixWorld;
            if (void 0 === i)
                return;
            if (null === n.boundingSphere && n.computeBoundingSphere(),
            We.copy(n.boundingSphere),
            We.applyMatrix4(r),
            !1 === t.ray.intersectsSphere(We))
                return;
            if (Ve.copy(r).invert(),
            ke.copy(t.ray).applyMatrix4(Ve),
            null !== n.boundingBox && !1 === ke.intersectsBox(n.boundingBox))
                return;
            let s;
            if (n.isBufferGeometry) {
                const r = n.index
                  , a = n.attributes.position
                  , o = n.morphAttributes.position
                  , l = n.morphTargetsRelative
                  , c = n.attributes.uv
                  , h = n.attributes.uv2
                  , u = n.groups
                  , d = n.drawRange;
                if (null !== r)
                    if (Array.isArray(i))
                        for (let n = 0, p = u.length; n < p; n++) {
                            const p = u[n]
                              , m = i[p.materialIndex];
                            for (let n = Math.max(p.start, d.start), i = Math.min(r.count, Math.min(p.start + p.count, d.start + d.count)); n < i; n += 3) {
                                const i = r.getX(n)
                                  , u = r.getX(n + 1)
                                  , d = r.getX(n + 2);
                                s = on(this, m, t, ke, a, o, l, c, h, i, u, d),
                                s && (s.faceIndex = Math.floor(n / 3),
                                s.face.materialIndex = p.materialIndex,
                                e.push(s))
                            }
                        }
                    else
                        for (let n = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); n < u; n += 3) {
                            const u = r.getX(n)
                              , d = r.getX(n + 1)
                              , p = r.getX(n + 2);
                            s = on(this, i, t, ke, a, o, l, c, h, u, d, p),
                            s && (s.faceIndex = Math.floor(n / 3),
                            e.push(s))
                        }
                else if (void 0 !== a)
                    if (Array.isArray(i))
                        for (let n = 0, r = u.length; n < r; n++) {
                            const r = u[n]
                              , p = i[r.materialIndex];
                            for (let n = Math.max(r.start, d.start), i = Math.min(a.count, Math.min(r.start + r.count, d.start + d.count)); n < i; n += 3)
                                s = on(this, p, t, ke, a, o, l, c, h, n, n + 1, n + 2),
                                s && (s.faceIndex = Math.floor(n / 3),
                                s.face.materialIndex = r.materialIndex,
                                e.push(s))
                        }
                    else
                        for (let n = Math.max(0, d.start), r = Math.min(a.count, d.start + d.count); n < r; n += 3)
                            s = on(this, i, t, ke, a, o, l, c, h, n, n + 1, n + 2),
                            s && (s.faceIndex = Math.floor(n / 3),
                            e.push(s))
            } else
                n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    }
    function on(t, e, n, i, r, s, a, o, l, c, h, u) {
        je.fromBufferAttribute(r, c),
        qe.fromBufferAttribute(r, h),
        Xe.fromBufferAttribute(r, u);
        const d = t.morphTargetInfluences;
        if (s && d) {
            Qe.set(0, 0, 0),
            Ke.set(0, 0, 0),
            $e.set(0, 0, 0);
            for (let t = 0, e = s.length; t < e; t++) {
                const e = d[t]
                  , n = s[t];
                0 !== e && (Ye.fromBufferAttribute(n, c),
                Je.fromBufferAttribute(n, h),
                Ze.fromBufferAttribute(n, u),
                a ? (Qe.addScaledVector(Ye, e),
                Ke.addScaledVector(Je, e),
                $e.addScaledVector(Ze, e)) : (Qe.addScaledVector(Ye.sub(je), e),
                Ke.addScaledVector(Je.sub(qe), e),
                $e.addScaledVector(Ze.sub(Xe), e)))
            }
            je.add(Qe),
            qe.add(Ke),
            Xe.add($e)
        }
        t.isSkinnedMesh && (t.boneTransform(c, je),
        t.boneTransform(h, qe),
        t.boneTransform(u, Xe));
        const p = function(t, e, n, i, r, s, a, o) {
            let l;
            if (l = 1 === e.side ? i.intersectTriangle(a, s, r, !0, o) : i.intersectTriangle(r, s, a, 2 !== e.side, o),
            null === l)
                return null;
            sn.copy(o),
            sn.applyMatrix4(t.matrixWorld);
            const c = n.ray.origin.distanceTo(sn);
            return c < n.near || c > n.far ? null : {
                distance: c,
                point: sn.clone(),
                object: t
            }
        }(t, e, n, i, je, qe, Xe, rn);
        if (p) {
            o && (tn.fromBufferAttribute(o, c),
            en.fromBufferAttribute(o, h),
            nn.fromBufferAttribute(o, u),
            p.uv = ve.getUV(rn, je, qe, Xe, tn, en, nn, new W)),
            l && (tn.fromBufferAttribute(l, c),
            en.fromBufferAttribute(l, h),
            nn.fromBufferAttribute(l, u),
            p.uv2 = ve.getUV(rn, je, qe, Xe, tn, en, nn, new W));
            const t = {
                a: c,
                b: h,
                c: u,
                normal: new rt,
                materialIndex: 0
            };
            ve.getNormal(je, qe, Xe, t.normal),
            p.face = t
        }
        return p
    }
    an.prototype.isMesh = !0;
    class ln extends Ge {
        constructor(t=1, e=1, n=1, i=1, r=1, s=1) {
            super(),
            this.type = "BoxGeometry",
            this.parameters = {
                width: t,
                height: e,
                depth: n,
                widthSegments: i,
                heightSegments: r,
                depthSegments: s
            };
            const a = this;
            i = Math.floor(i),
            r = Math.floor(r),
            s = Math.floor(s);
            const o = []
              , l = []
              , c = []
              , h = [];
            let u = 0
              , d = 0;
            function p(t, e, n, i, r, s, p, m, f, g, v) {
                const x = s / f
                  , y = p / g
                  , _ = s / 2
                  , M = p / 2
                  , b = m / 2
                  , w = f + 1
                  , S = g + 1;
                let T = 0
                  , E = 0;
                const A = new rt;
                for (let s = 0; s < S; s++) {
                    const a = s * y - M;
                    for (let o = 0; o < w; o++) {
                        const u = o * x - _;
                        A[t] = u * i,
                        A[e] = a * r,
                        A[n] = b,
                        l.push(A.x, A.y, A.z),
                        A[t] = 0,
                        A[e] = 0,
                        A[n] = m > 0 ? 1 : -1,
                        c.push(A.x, A.y, A.z),
                        h.push(o / f),
                        h.push(1 - s / g),
                        T += 1
                    }
                }
                for (let t = 0; t < g; t++)
                    for (let e = 0; e < f; e++) {
                        const n = u + e + w * t
                          , i = u + e + w * (t + 1)
                          , r = u + (e + 1) + w * (t + 1)
                          , s = u + (e + 1) + w * t;
                        o.push(n, i, s),
                        o.push(i, r, s),
                        E += 6
                    }
                a.addGroup(d, E, v),
                d += E,
                u += T
            }
            p("z", "y", "x", -1, -1, n, e, t, s, r, 0),
            p("z", "y", "x", 1, -1, n, e, -t, s, r, 1),
            p("x", "z", "y", 1, 1, t, n, e, i, s, 2),
            p("x", "z", "y", 1, -1, t, n, -e, i, s, 3),
            p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
            p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
            this.setIndex(o),
            this.setAttribute("position", new Ie(l,3)),
            this.setAttribute("normal", new Ie(c,3)),
            this.setAttribute("uv", new Ie(h,2))
        }
        static fromJSON(t) {
            return new ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)
        }
    }
    function cn(t) {
        const e = {};
        for (const n in t) {
            e[n] = {};
            for (const i in t[n]) {
                const r = t[n][i];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
            }
        }
        return e
    }
    function hn(t) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const i = cn(t[n]);
            for (const t in i)
                e[t] = i[t]
        }
        return e
    }
    const un = {
        clone: cn,
        merge: hn
    };
    class dn extends ye {
        constructor(t) {
            super(),
            this.type = "ShaderMaterial",
            this.defines = {},
            this.uniforms = {},
            this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
            this.linewidth = 1,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.fog = !1,
            this.lights = !1,
            this.clipping = !1,
            this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1
            },
            this.defaultAttributeValues = {
                color: [1, 1, 1],
                uv: [0, 0],
                uv2: [0, 0]
            },
            this.index0AttributeName = void 0,
            this.uniformsNeedUpdate = !1,
            this.glslVersion = null,
            void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
            this.setValues(t))
        }
        copy(t) {
            return super.copy(t),
            this.fragmentShader = t.fragmentShader,
            this.vertexShader = t.vertexShader,
            this.uniforms = cn(t.uniforms),
            this.defines = Object.assign({}, t.defines),
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.lights = t.lights,
            this.clipping = t.clipping,
            this.extensions = Object.assign({}, t.extensions),
            this.glslVersion = t.glslVersion,
            this
        }
        toJSON(t) {
            const e = super.toJSON(t);
            e.glslVersion = this.glslVersion,
            e.uniforms = {};
            for (const n in this.uniforms) {
                const i = this.uniforms[n].value;
                i && i.isTexture ? e.uniforms[n] = {
                    type: "t",
                    value: i.toJSON(t).uuid
                } : i && i.isColor ? e.uniforms[n] = {
                    type: "c",
                    value: i.getHex()
                } : i && i.isVector2 ? e.uniforms[n] = {
                    type: "v2",
                    value: i.toArray()
                } : i && i.isVector3 ? e.uniforms[n] = {
                    type: "v3",
                    value: i.toArray()
                } : i && i.isVector4 ? e.uniforms[n] = {
                    type: "v4",
                    value: i.toArray()
                } : i && i.isMatrix3 ? e.uniforms[n] = {
                    type: "m3",
                    value: i.toArray()
                } : i && i.isMatrix4 ? e.uniforms[n] = {
                    type: "m4",
                    value: i.toArray()
                } : e.uniforms[n] = {
                    value: i
                }
            }
            Object.keys(this.defines).length > 0 && (e.defines = this.defines),
            e.vertexShader = this.vertexShader,
            e.fragmentShader = this.fragmentShader;
            const n = {};
            for (const t in this.extensions)
                !0 === this.extensions[t] && (n[t] = !0);
            return Object.keys(n).length > 0 && (e.extensions = n),
            e
        }
    }
    dn.prototype.isShaderMaterial = !0;
    class pn extends ae {
        constructor() {
            super(),
            this.type = "Camera",
            this.matrixWorldInverse = new zt,
            this.projectionMatrix = new zt,
            this.projectionMatrixInverse = new zt
        }
        copy(t, e) {
            return super.copy(t, e),
            this.matrixWorldInverse.copy(t.matrixWorldInverse),
            this.projectionMatrix.copy(t.projectionMatrix),
            this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
            this
        }
        getWorldDirection(t) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize()
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t),
            this.matrixWorldInverse.copy(this.matrixWorld).invert()
        }
        updateWorldMatrix(t, e) {
            super.updateWorldMatrix(t, e),
            this.matrixWorldInverse.copy(this.matrixWorld).invert()
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    pn.prototype.isCamera = !0;
    class mn extends pn {
        constructor(t=50, e=1, n=.1, i=2e3) {
            super(),
            this.type = "PerspectiveCamera",
            this.fov = t,
            this.zoom = 1,
            this.near = n,
            this.far = i,
            this.focus = 10,
            this.aspect = e,
            this.view = null,
            this.filmGauge = 35,
            this.filmOffset = 0,
            this.updateProjectionMatrix()
        }
        copy(t, e) {
            return super.copy(t, e),
            this.fov = t.fov,
            this.zoom = t.zoom,
            this.near = t.near,
            this.far = t.far,
            this.focus = t.focus,
            this.aspect = t.aspect,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this.filmGauge = t.filmGauge,
            this.filmOffset = t.filmOffset,
            this
        }
        setFocalLength(t) {
            const e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * O * Math.atan(e),
            this.updateProjectionMatrix()
        }
        getFocalLength() {
            const t = Math.tan(.5 * z * this.fov);
            return .5 * this.getFilmHeight() / t
        }
        getEffectiveFOV() {
            return 2 * O * Math.atan(Math.tan(.5 * z * this.fov) / this.zoom)
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1)
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1)
        }
        setViewOffset(t, e, n, i, r, s) {
            this.aspect = t / e,
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }),
            this.view.enabled = !0,
            this.view.fullWidth = t,
            this.view.fullHeight = e,
            this.view.offsetX = n,
            this.view.offsetY = i,
            this.view.width = r,
            this.view.height = s,
            this.updateProjectionMatrix()
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
            const t = this.near;
            let e = t * Math.tan(.5 * z * this.fov) / this.zoom
              , n = 2 * e
              , i = this.aspect * n
              , r = -.5 * i;
            const s = this.view;
            if (null !== this.view && this.view.enabled) {
                const t = s.fullWidth
                  , a = s.fullHeight;
                r += s.offsetX * i / t,
                e -= s.offsetY * n / a,
                i *= s.width / t,
                n *= s.height / a
            }
            const a = this.filmOffset;
            0 !== a && (r += t * a / this.getFilmWidth()),
            this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.fov = this.fov,
            e.object.zoom = this.zoom,
            e.object.near = this.near,
            e.object.far = this.far,
            e.object.focus = this.focus,
            e.object.aspect = this.aspect,
            null !== this.view && (e.object.view = Object.assign({}, this.view)),
            e.object.filmGauge = this.filmGauge,
            e.object.filmOffset = this.filmOffset,
            e
        }
    }
    mn.prototype.isPerspectiveCamera = !0;
    const fn = 90;
    class gn extends ae {
        constructor(t, e, n) {
            if (super(),
            this.type = "CubeCamera",
            !0 !== n.isWebGLCubeRenderTarget)
                return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            this.renderTarget = n;
            const i = new mn(fn,1,t,e);
            i.layers = this.layers,
            i.up.set(0, -1, 0),
            i.lookAt(new rt(1,0,0)),
            this.add(i);
            const r = new mn(fn,1,t,e);
            r.layers = this.layers,
            r.up.set(0, -1, 0),
            r.lookAt(new rt(-1,0,0)),
            this.add(r);
            const s = new mn(fn,1,t,e);
            s.layers = this.layers,
            s.up.set(0, 0, 1),
            s.lookAt(new rt(0,1,0)),
            this.add(s);
            const a = new mn(fn,1,t,e);
            a.layers = this.layers,
            a.up.set(0, 0, -1),
            a.lookAt(new rt(0,-1,0)),
            this.add(a);
            const o = new mn(fn,1,t,e);
            o.layers = this.layers,
            o.up.set(0, -1, 0),
            o.lookAt(new rt(0,0,1)),
            this.add(o);
            const l = new mn(fn,1,t,e);
            l.layers = this.layers,
            l.up.set(0, -1, 0),
            l.lookAt(new rt(0,0,-1)),
            this.add(l)
        }
        update(t, e) {
            null === this.parent && this.updateMatrixWorld();
            const n = this.renderTarget
              , [i,r,s,a,o,l] = this.children
              , c = t.xr.enabled
              , h = t.getRenderTarget();
            t.xr.enabled = !1;
            const u = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1,
            t.setRenderTarget(n, 0),
            t.render(e, i),
            t.setRenderTarget(n, 1),
            t.render(e, r),
            t.setRenderTarget(n, 2),
            t.render(e, s),
            t.setRenderTarget(n, 3),
            t.render(e, a),
            t.setRenderTarget(n, 4),
            t.render(e, o),
            n.texture.generateMipmaps = u,
            t.setRenderTarget(n, 5),
            t.render(e, l),
            t.setRenderTarget(h),
            t.xr.enabled = c
        }
    }
    class vn extends K {
        constructor(t, n, i, r, s, a, o, l, c, h) {
            super(t = void 0 !== t ? t : [], n = void 0 !== n ? n : e, i, r, s, a, o, l, c, h),
            this.flipY = !1
        }
        get images() {
            return this.image
        }
        set images(t) {
            this.image = t
        }
    }
    vn.prototype.isCubeTexture = !0;
    class xn extends et {
        constructor(t, e, n) {
            Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),
            e = n),
            super(t, t, e),
            e = e || {},
            this.texture = new vn(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),
            this.texture.isRenderTargetTexture = !0,
            this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps,
            this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : l,
            this.texture._needsFlipEnvMap = !1
        }
        fromEquirectangularTexture(t, e) {
            this.texture.type = e.type,
            this.texture.format = v,
            this.texture.encoding = e.encoding,
            this.texture.generateMipmaps = e.generateMipmaps,
            this.texture.minFilter = e.minFilter,
            this.texture.magFilter = e.magFilter;
            const n = {
                tEquirect: {
                    value: null
                }
            }
              , i = "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t"
              , r = "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
              , s = new ln(5,5,5)
              , a = new dn({
                name: "CubemapFromEquirect",
                uniforms: cn(n),
                vertexShader: i,
                fragmentShader: r,
                side: 1,
                blending: 0
            });
            a.uniforms.tEquirect.value = e;
            const o = new an(s,a)
              , h = e.minFilter;
            return e.minFilter === c && (e.minFilter = l),
            new gn(1,10,this).update(t, o),
            e.minFilter = h,
            o.geometry.dispose(),
            o.material.dispose(),
            this
        }
        clear(t, e, n, i) {
            const r = t.getRenderTarget();
            for (let r = 0; r < 6; r++)
                t.setRenderTarget(this, r),
                t.clear(e, n, i);
            t.setRenderTarget(r)
        }
    }
    xn.prototype.isWebGLCubeRenderTarget = !0;
    const yn = new rt
      , _n = new rt
      , Mn = new j;
    class bn {
        constructor(t=new rt(1,0,0), e=0) {
            this.normal = t,
            this.constant = e
        }
        set(t, e) {
            return this.normal.copy(t),
            this.constant = e,
            this
        }
        setComponents(t, e, n, i) {
            return this.normal.set(t, e, n),
            this.constant = i,
            this
        }
        setFromNormalAndCoplanarPoint(t, e) {
            return this.normal.copy(t),
            this.constant = -e.dot(this.normal),
            this
        }
        setFromCoplanarPoints(t, e, n) {
            const i = yn.subVectors(n, e).cross(_n.subVectors(t, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(i, t),
            this
        }
        copy(t) {
            return this.normal.copy(t.normal),
            this.constant = t.constant,
            this
        }
        normalize() {
            const t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t),
            this.constant *= t,
            this
        }
        negate() {
            return this.constant *= -1,
            this.normal.negate(),
            this
        }
        distanceToPoint(t) {
            return this.normal.dot(t) + this.constant
        }
        distanceToSphere(t) {
            return this.distanceToPoint(t.center) - t.radius
        }
        projectPoint(t, e) {
            return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
        }
        intersectLine(t, e) {
            const n = t.delta(yn)
              , i = this.normal.dot(n);
            if (0 === i)
                return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
            const r = -(t.start.dot(this.normal) + this.constant) / i;
            return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start)
        }
        intersectsLine(t) {
            const e = this.distanceToPoint(t.start)
              , n = this.distanceToPoint(t.end);
            return e < 0 && n > 0 || n < 0 && e > 0
        }
        intersectsBox(t) {
            return t.intersectsPlane(this)
        }
        intersectsSphere(t) {
            return t.intersectsPlane(this)
        }
        coplanarPoint(t) {
            return t.copy(this.normal).multiplyScalar(-this.constant)
        }
        applyMatrix4(t, e) {
            const n = e || Mn.getNormalMatrix(t)
              , i = this.coplanarPoint(yn).applyMatrix4(t)
              , r = this.normal.applyMatrix3(n).normalize();
            return this.constant = -i.dot(r),
            this
        }
        translate(t) {
            return this.constant -= t.dot(this.normal),
            this
        }
        equals(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    bn.prototype.isPlane = !0;
    const wn = new Et
      , Sn = new rt;
    class Tn {
        constructor(t=new bn, e=new bn, n=new bn, i=new bn, r=new bn, s=new bn) {
            this.planes = [t, e, n, i, r, s]
        }
        set(t, e, n, i, r, s) {
            const a = this.planes;
            return a[0].copy(t),
            a[1].copy(e),
            a[2].copy(n),
            a[3].copy(i),
            a[4].copy(r),
            a[5].copy(s),
            this
        }
        copy(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++)
                e[n].copy(t.planes[n]);
            return this
        }
        setFromProjectionMatrix(t) {
            const e = this.planes
              , n = t.elements
              , i = n[0]
              , r = n[1]
              , s = n[2]
              , a = n[3]
              , o = n[4]
              , l = n[5]
              , c = n[6]
              , h = n[7]
              , u = n[8]
              , d = n[9]
              , p = n[10]
              , m = n[11]
              , f = n[12]
              , g = n[13]
              , v = n[14]
              , x = n[15];
            return e[0].setComponents(a - i, h - o, m - u, x - f).normalize(),
            e[1].setComponents(a + i, h + o, m + u, x + f).normalize(),
            e[2].setComponents(a + r, h + l, m + d, x + g).normalize(),
            e[3].setComponents(a - r, h - l, m - d, x - g).normalize(),
            e[4].setComponents(a - s, h - c, m - p, x - v).normalize(),
            e[5].setComponents(a + s, h + c, m + p, x + v).normalize(),
            this
        }
        intersectsObject(t) {
            const e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(),
            wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
            this.intersectsSphere(wn)
        }
        intersectsSprite(t) {
            return wn.center.set(0, 0, 0),
            wn.radius = .7071067811865476,
            wn.applyMatrix4(t.matrixWorld),
            this.intersectsSphere(wn)
        }
        intersectsSphere(t) {
            const e = this.planes
              , n = t.center
              , i = -t.radius;
            for (let t = 0; t < 6; t++)
                if (e[t].distanceToPoint(n) < i)
                    return !1;
            return !0
        }
        intersectsBox(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++) {
                const i = e[n];
                if (Sn.x = i.normal.x > 0 ? t.max.x : t.min.x,
                Sn.y = i.normal.y > 0 ? t.max.y : t.min.y,
                Sn.z = i.normal.z > 0 ? t.max.z : t.min.z,
                i.distanceToPoint(Sn) < 0)
                    return !1
            }
            return !0
        }
        containsPoint(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++)
                if (e[n].distanceToPoint(t) < 0)
                    return !1;
            return !0
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    function En() {
        let t = null
          , e = !1
          , n = null
          , i = null;
        function r(e, s) {
            n(e, s),
            i = t.requestAnimationFrame(r)
        }
        return {
            start: function() {
                !0 !== e && null !== n && (i = t.requestAnimationFrame(r),
                e = !0)
            },
            stop: function() {
                t.cancelAnimationFrame(i),
                e = !1
            },
            setAnimationLoop: function(t) {
                n = t
            },
            setContext: function(e) {
                t = e
            }
        }
    }
    function An(t, e) {
        const n = e.isWebGL2
          , i = new WeakMap;
        return {
            get: function(t) {
                return t.isInterleavedBufferAttribute && (t = t.data),
                i.get(t)
            },
            remove: function(e) {
                e.isInterleavedBufferAttribute && (e = e.data);
                const n = i.get(e);
                n && (t.deleteBuffer(n.buffer),
                i.delete(e))
            },
            update: function(e, r) {
                if (e.isGLBufferAttribute) {
                    const t = i.get(e);
                    return void ((!t || t.version < e.version) && i.set(e, {
                        buffer: e.buffer,
                        type: e.type,
                        bytesPerElement: e.elementSize,
                        version: e.version
                    }))
                }
                e.isInterleavedBufferAttribute && (e = e.data);
                const s = i.get(e);
                void 0 === s ? i.set(e, function(e, i) {
                    const r = e.array
                      , s = e.usage
                      , a = t.createBuffer();
                    t.bindBuffer(i, a),
                    t.bufferData(i, r, s),
                    e.onUploadCallback();
                    let o = 5126;
                    return r instanceof Float32Array ? o = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? e.isFloat16BufferAttribute ? n ? o = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : o = 5123 : r instanceof Int16Array ? o = 5122 : r instanceof Uint32Array ? o = 5125 : r instanceof Int32Array ? o = 5124 : r instanceof Int8Array ? o = 5120 : (r instanceof Uint8Array || r instanceof Uint8ClampedArray) && (o = 5121),
                    {
                        buffer: a,
                        type: o,
                        bytesPerElement: r.BYTES_PER_ELEMENT,
                        version: e.version
                    }
                }(e, r)) : s.version < e.version && (function(e, i, r) {
                    const s = i.array
                      , a = i.updateRange;
                    t.bindBuffer(r, e),
                    -1 === a.count ? t.bufferSubData(r, 0, s) : (n ? t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)),
                    a.count = -1)
                }(s.buffer, e, r),
                s.version = e.version)
            }
        }
    }
    class Ln extends Ge {
        constructor(t=1, e=1, n=1, i=1) {
            super(),
            this.type = "PlaneGeometry",
            this.parameters = {
                width: t,
                height: e,
                widthSegments: n,
                heightSegments: i
            };
            const r = t / 2
              , s = e / 2
              , a = Math.floor(n)
              , o = Math.floor(i)
              , l = a + 1
              , c = o + 1
              , h = t / a
              , u = e / o
              , d = []
              , p = []
              , m = []
              , f = [];
            for (let t = 0; t < c; t++) {
                const e = t * u - s;
                for (let n = 0; n < l; n++) {
                    const i = n * h - r;
                    p.push(i, -e, 0),
                    m.push(0, 0, 1),
                    f.push(n / a),
                    f.push(1 - t / o)
                }
            }
            for (let t = 0; t < o; t++)
                for (let e = 0; e < a; e++) {
                    const n = e + l * t
                      , i = e + l * (t + 1)
                      , r = e + 1 + l * (t + 1)
                      , s = e + 1 + l * t;
                    d.push(n, i, s),
                    d.push(i, r, s)
                }
            this.setIndex(d),
            this.setAttribute("position", new Ie(p,3)),
            this.setAttribute("normal", new Ie(m,3)),
            this.setAttribute("uv", new Ie(f,2))
        }
        static fromJSON(t) {
            return new Ln(t.width,t.height,t.widthSegments,t.heightSegments)
        }
    }
    const Rn = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
        alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
        color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
        color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
        common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
        envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
        envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec;\n\t\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\t\treflectVec = reflect( - viewDir, normal );\n\t\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\t#else\n\t\t\t\treflectVec = refract( - viewDir, normal, refractionRatio );\n\t\t\t#endif\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tlightMapIrradiance *= PI;\n\t#endif\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointLightInfo( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotLightInfo( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
        lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
        lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
        lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\tvec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
        map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
        map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform vec2 morphTargetsTextureSize;\n\t\tvec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {\n\t\t\tfloat texelIndex = float( vertexIndex * stride + offset );\n\t\t\tfloat y = floor( texelIndex / morphTargetsTextureSize.x );\n\t\t\tfloat x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tvec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );\n\t\t\treturn texture( morphTargetsTexture, morphUV ).xyz;\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\t#ifndef USE_MORPHNORMALS\n\t\t\t\tif ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];\n\t\t\t#else\n\t\t\t\tif ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];\n\t\t\t#endif\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
        normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
        normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
        normal_pars_fragment: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
        normal_pars_vertex: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
        normal_vertex: "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
        clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
        clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
        clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
        output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
        transmission_fragment: "#ifdef USE_TRANSMISSION\n\tfloat transmissionAlpha = 1.0;\n\tfloat transmissionFactor = transmission;\n\tfloat thicknessFactor = thickness;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\ttransmissionFactor *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n\ttransmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",
        transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( float roughness, float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {\n\t\tif ( attenuationDistance == 0.0 ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,\n\t\tvec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,\n\t\tvec3 attenuationColor, float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
        uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
        uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
        uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
        cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
        meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
        meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
        shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}"
    }
      , Cn = {
        common: {
            diffuse: {
                value: new Ee(16777215)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new j
            },
            uv2Transform: {
                value: new j
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            ior: {
                value: 1.5
            },
            refractionRatio: {
                value: .98
            },
            maxMipLevel: {
                value: 0
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new W(1,1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new Ee(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new Ee(16777215)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new j
            }
        },
        sprite: {
            diffuse: {
                value: new Ee(16777215)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new W(.5,.5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new j
            }
        }
    }
      , Pn = {
        basic: {
            uniforms: hn([Cn.common, Cn.specularmap, Cn.envmap, Cn.aomap, Cn.lightmap, Cn.fog]),
            vertexShader: Rn.meshbasic_vert,
            fragmentShader: Rn.meshbasic_frag
        },
        lambert: {
            uniforms: hn([Cn.common, Cn.specularmap, Cn.envmap, Cn.aomap, Cn.lightmap, Cn.emissivemap, Cn.fog, Cn.lights, {
                emissive: {
                    value: new Ee(0)
                }
            }]),
            vertexShader: Rn.meshlambert_vert,
            fragmentShader: Rn.meshlambert_frag
        },
        phong: {
            uniforms: hn([Cn.common, Cn.specularmap, Cn.envmap, Cn.aomap, Cn.lightmap, Cn.emissivemap, Cn.bumpmap, Cn.normalmap, Cn.displacementmap, Cn.fog, Cn.lights, {
                emissive: {
                    value: new Ee(0)
                },
                specular: {
                    value: new Ee(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: Rn.meshphong_vert,
            fragmentShader: Rn.meshphong_frag
        },
        standard: {
            uniforms: hn([Cn.common, Cn.envmap, Cn.aomap, Cn.lightmap, Cn.emissivemap, Cn.bumpmap, Cn.normalmap, Cn.displacementmap, Cn.roughnessmap, Cn.metalnessmap, Cn.fog, Cn.lights, {
                emissive: {
                    value: new Ee(0)
                },
                roughness: {
                    value: 1
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: Rn.meshphysical_vert,
            fragmentShader: Rn.meshphysical_frag
        },
        toon: {
            uniforms: hn([Cn.common, Cn.aomap, Cn.lightmap, Cn.emissivemap, Cn.bumpmap, Cn.normalmap, Cn.displacementmap, Cn.gradientmap, Cn.fog, Cn.lights, {
                emissive: {
                    value: new Ee(0)
                }
            }]),
            vertexShader: Rn.meshtoon_vert,
            fragmentShader: Rn.meshtoon_frag
        },
        matcap: {
            uniforms: hn([Cn.common, Cn.bumpmap, Cn.normalmap, Cn.displacementmap, Cn.fog, {
                matcap: {
                    value: null
                }
            }]),
            vertexShader: Rn.meshmatcap_vert,
            fragmentShader: Rn.meshmatcap_frag
        },
        points: {
            uniforms: hn([Cn.points, Cn.fog]),
            vertexShader: Rn.points_vert,
            fragmentShader: Rn.points_frag
        },
        dashed: {
            uniforms: hn([Cn.common, Cn.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: Rn.linedashed_vert,
            fragmentShader: Rn.linedashed_frag
        },
        depth: {
            uniforms: hn([Cn.common, Cn.displacementmap]),
            vertexShader: Rn.depth_vert,
            fragmentShader: Rn.depth_frag
        },
        normal: {
            uniforms: hn([Cn.common, Cn.bumpmap, Cn.normalmap, Cn.displacementmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Rn.meshnormal_vert,
            fragmentShader: Rn.meshnormal_frag
        },
        sprite: {
            uniforms: hn([Cn.sprite, Cn.fog]),
            vertexShader: Rn.sprite_vert,
            fragmentShader: Rn.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new j
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: Rn.background_vert,
            fragmentShader: Rn.background_frag
        },
        cube: {
            uniforms: hn([Cn.envmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Rn.cube_vert,
            fragmentShader: Rn.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: Rn.equirect_vert,
            fragmentShader: Rn.equirect_frag
        },
        distanceRGBA: {
            uniforms: hn([Cn.common, Cn.displacementmap, {
                referencePosition: {
                    value: new rt
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1e3
                }
            }]),
            vertexShader: Rn.distanceRGBA_vert,
            fragmentShader: Rn.distanceRGBA_frag
        },
        shadow: {
            uniforms: hn([Cn.lights, Cn.fog, {
                color: {
                    value: new Ee(0)
                },
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Rn.shadow_vert,
            fragmentShader: Rn.shadow_frag
        }
    };
    function Dn(t, e, n, r, s) {
        const a = new Ee(0);
        let o, l, c = 0, h = null, u = 0, d = null;
        function p(t, e) {
            n.buffers.color.setClear(t.r, t.g, t.b, e, s)
        }
        return {
            getClearColor: function() {
                return a
            },
            setClearColor: function(t, e=1) {
                a.set(t),
                c = e,
                p(a, c)
            },
            getClearAlpha: function() {
                return c
            },
            setClearAlpha: function(t) {
                c = t,
                p(a, c)
            },
            render: function(n, s) {
                let m = !1
                  , f = !0 === s.isScene ? s.background : null;
                f && f.isTexture && (f = e.get(f));
                const g = t.xr
                  , v = g.getSession && g.getSession();
                v && "additive" === v.environmentBlendMode && (f = null),
                null === f ? p(a, c) : f && f.isColor && (p(f, 1),
                m = !0),
                (t.autoClear || m) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
                f && (f.isCubeTexture || f.mapping === i) ? (void 0 === l && (l = new an(new ln(1,1,1),new dn({
                    name: "BackgroundCubeMaterial",
                    uniforms: cn(Pn.cube.uniforms),
                    vertexShader: Pn.cube.vertexShader,
                    fragmentShader: Pn.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })),
                l.geometry.deleteAttribute("normal"),
                l.geometry.deleteAttribute("uv"),
                l.onBeforeRender = function(t, e, n) {
                    this.matrixWorld.copyPosition(n.matrixWorld)
                }
                ,
                Object.defineProperty(l.material, "envMap", {
                    get: function() {
                        return this.uniforms.envMap.value
                    }
                }),
                r.update(l)),
                l.material.uniforms.envMap.value = f,
                l.material.uniforms.flipEnvMap.value = f.isCubeTexture && !1 === f.isRenderTargetTexture ? -1 : 1,
                h === f && u === f.version && d === t.toneMapping || (l.material.needsUpdate = !0,
                h = f,
                u = f.version,
                d = t.toneMapping),
                n.unshift(l, l.geometry, l.material, 0, 0, null)) : f && f.isTexture && (void 0 === o && (o = new an(new Ln(2,2),new dn({
                    name: "BackgroundMaterial",
                    uniforms: cn(Pn.background.uniforms),
                    vertexShader: Pn.background.vertexShader,
                    fragmentShader: Pn.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })),
                o.geometry.deleteAttribute("normal"),
                Object.defineProperty(o.material, "map", {
                    get: function() {
                        return this.uniforms.t2D.value
                    }
                }),
                r.update(o)),
                o.material.uniforms.t2D.value = f,
                !0 === f.matrixAutoUpdate && f.updateMatrix(),
                o.material.uniforms.uvTransform.value.copy(f.matrix),
                h === f && u === f.version && d === t.toneMapping || (o.material.needsUpdate = !0,
                h = f,
                u = f.version,
                d = t.toneMapping),
                n.unshift(o, o.geometry, o.material, 0, 0, null))
            }
        }
    }
    function In(t, e, n, i) {
        const r = t.getParameter(34921)
          , s = i.isWebGL2 ? null : e.get("OES_vertex_array_object")
          , a = i.isWebGL2 || null !== s
          , o = {}
          , l = d(null);
        let c = l;
        function h(e) {
            return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e)
        }
        function u(e) {
            return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e)
        }
        function d(t) {
            const e = []
              , n = []
              , i = [];
            for (let t = 0; t < r; t++)
                e[t] = 0,
                n[t] = 0,
                i[t] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: e,
                enabledAttributes: n,
                attributeDivisors: i,
                object: t,
                attributes: {},
                index: null
            }
        }
        function p() {
            const t = c.newAttributes;
            for (let e = 0, n = t.length; e < n; e++)
                t[e] = 0
        }
        function m(t) {
            f(t, 0)
        }
        function f(n, r) {
            const s = c.newAttributes
              , a = c.enabledAttributes
              , o = c.attributeDivisors;
            s[n] = 1,
            0 === a[n] && (t.enableVertexAttribArray(n),
            a[n] = 1),
            o[n] !== r && ((i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r),
            o[n] = r)
        }
        function g() {
            const e = c.newAttributes
              , n = c.enabledAttributes;
            for (let i = 0, r = n.length; i < r; i++)
                n[i] !== e[i] && (t.disableVertexAttribArray(i),
                n[i] = 0)
        }
        function v(e, n, r, s, a, o) {
            !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, s, a, o) : t.vertexAttribIPointer(e, n, r, a, o)
        }
        function x() {
            y(),
            c !== l && (c = l,
            h(c.object))
        }
        function y() {
            l.geometry = null,
            l.program = null,
            l.wireframe = !1
        }
        return {
            setup: function(r, l, u, x, y) {
                let _ = !1;
                if (a) {
                    const e = function(e, n, r) {
                        const a = !0 === r.wireframe;
                        let l = o[e.id];
                        void 0 === l && (l = {},
                        o[e.id] = l);
                        let c = l[n.id];
                        void 0 === c && (c = {},
                        l[n.id] = c);
                        let h = c[a];
                        return void 0 === h && (h = d(i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()),
                        c[a] = h),
                        h
                    }(x, u, l);
                    c !== e && (c = e,
                    h(c.object)),
                    _ = function(t, e) {
                        const n = c.attributes
                          , i = t.attributes;
                        let r = 0;
                        for (const t in i) {
                            const e = n[t]
                              , s = i[t];
                            if (void 0 === e)
                                return !0;
                            if (e.attribute !== s)
                                return !0;
                            if (e.data !== s.data)
                                return !0;
                            r++
                        }
                        return c.attributesNum !== r || c.index !== e
                    }(x, y),
                    _ && function(t, e) {
                        const n = {}
                          , i = t.attributes;
                        let r = 0;
                        for (const t in i) {
                            const e = i[t]
                              , s = {};
                            s.attribute = e,
                            e.data && (s.data = e.data),
                            n[t] = s,
                            r++
                        }
                        c.attributes = n,
                        c.attributesNum = r,
                        c.index = e
                    }(x, y)
                } else {
                    const t = !0 === l.wireframe;
                    c.geometry === x.id && c.program === u.id && c.wireframe === t || (c.geometry = x.id,
                    c.program = u.id,
                    c.wireframe = t,
                    _ = !0)
                }
                !0 === r.isInstancedMesh && (_ = !0),
                null !== y && n.update(y, 34963),
                _ && (function(r, s, a, o) {
                    if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays"))
                        return;
                    p();
                    const l = o.attributes
                      , c = a.getAttributes()
                      , h = s.defaultAttributeValues;
                    for (const e in c) {
                        const i = c[e];
                        if (i.location >= 0) {
                            let s = l[e];
                            if (void 0 === s && ("instanceMatrix" === e && r.instanceMatrix && (s = r.instanceMatrix),
                            "instanceColor" === e && r.instanceColor && (s = r.instanceColor)),
                            void 0 !== s) {
                                const e = s.normalized
                                  , a = s.itemSize
                                  , l = n.get(s);
                                if (void 0 === l)
                                    continue;
                                const c = l.buffer
                                  , h = l.type
                                  , u = l.bytesPerElement;
                                if (s.isInterleavedBufferAttribute) {
                                    const n = s.data
                                      , l = n.stride
                                      , d = s.offset;
                                    if (n && n.isInstancedInterleavedBuffer) {
                                        for (let t = 0; t < i.locationSize; t++)
                                            f(i.location + t, n.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)
                                    } else
                                        for (let t = 0; t < i.locationSize; t++)
                                            m(i.location + t);
                                    t.bindBuffer(34962, c);
                                    for (let t = 0; t < i.locationSize; t++)
                                        v(i.location + t, a / i.locationSize, h, e, l * u, (d + a / i.locationSize * t) * u)
                                } else {
                                    if (s.isInstancedBufferAttribute) {
                                        for (let t = 0; t < i.locationSize; t++)
                                            f(i.location + t, s.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count)
                                    } else
                                        for (let t = 0; t < i.locationSize; t++)
                                            m(i.location + t);
                                    t.bindBuffer(34962, c);
                                    for (let t = 0; t < i.locationSize; t++)
                                        v(i.location + t, a / i.locationSize, h, e, a * u, a / i.locationSize * t * u)
                                }
                            } else if (void 0 !== h) {
                                const n = h[e];
                                if (void 0 !== n)
                                    switch (n.length) {
                                    case 2:
                                        t.vertexAttrib2fv(i.location, n);
                                        break;
                                    case 3:
                                        t.vertexAttrib3fv(i.location, n);
                                        break;
                                    case 4:
                                        t.vertexAttrib4fv(i.location, n);
                                        break;
                                    default:
                                        t.vertexAttrib1fv(i.location, n)
                                    }
                            }
                        }
                    }
                    g()
                }(r, l, u, x),
                null !== y && t.bindBuffer(34963, n.get(y).buffer))
            },
            reset: x,
            resetDefaultState: y,
            dispose: function() {
                x();
                for (const t in o) {
                    const e = o[t];
                    for (const t in e) {
                        const n = e[t];
                        for (const t in n)
                            u(n[t].object),
                            delete n[t];
                        delete e[t]
                    }
                    delete o[t]
                }
            },
            releaseStatesOfGeometry: function(t) {
                if (void 0 === o[t.id])
                    return;
                const e = o[t.id];
                for (const t in e) {
                    const n = e[t];
                    for (const t in n)
                        u(n[t].object),
                        delete n[t];
                    delete e[t]
                }
                delete o[t.id]
            },
            releaseStatesOfProgram: function(t) {
                for (const e in o) {
                    const n = o[e];
                    if (void 0 === n[t.id])
                        continue;
                    const i = n[t.id];
                    for (const t in i)
                        u(i[t].object),
                        delete i[t];
                    delete n[t.id]
                }
            },
            initAttributes: p,
            enableAttribute: m,
            disableUnusedAttributes: g
        }
    }
    function Nn(t, e, n, i) {
        const r = i.isWebGL2;
        let s;
        this.setMode = function(t) {
            s = t
        }
        ,
        this.render = function(e, i) {
            t.drawArrays(s, e, i),
            n.update(i, s, 1)
        }
        ,
        this.renderInstances = function(i, a, o) {
            if (0 === o)
                return;
            let l, c;
            if (r)
                l = t,
                c = "drawArraysInstanced";
            else if (l = e.get("ANGLE_instanced_arrays"),
            c = "drawArraysInstancedANGLE",
            null === l)
                return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[c](s, i, a, o),
            n.update(a, s, o)
        }
    }
    function zn(t, e, n) {
        let i;
        function r(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0)
                    return "highp";
                e = "mediump"
            }
            return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
        }
        const s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
        let a = void 0 !== n.precision ? n.precision : "highp";
        const o = r(a);
        o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."),
        a = o);
        const l = s || e.has("WEBGL_draw_buffers")
          , c = !0 === n.logarithmicDepthBuffer
          , h = t.getParameter(34930)
          , u = t.getParameter(35660)
          , d = t.getParameter(3379)
          , p = t.getParameter(34076)
          , m = t.getParameter(34921)
          , f = t.getParameter(36347)
          , g = t.getParameter(36348)
          , v = t.getParameter(36349)
          , x = u > 0
          , y = s || e.has("OES_texture_float");
        return {
            isWebGL2: s,
            drawBuffers: l,
            getMaxAnisotropy: function() {
                if (void 0 !== i)
                    return i;
                if (!0 === e.has("EXT_texture_filter_anisotropic")) {
                    const n = e.get("EXT_texture_filter_anisotropic");
                    i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                } else
                    i = 0;
                return i
            },
            getMaxPrecision: r,
            precision: a,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: u,
            maxTextureSize: d,
            maxCubemapSize: p,
            maxAttributes: m,
            maxVertexUniforms: f,
            maxVaryings: g,
            maxFragmentUniforms: v,
            vertexTextures: x,
            floatFragmentTextures: y,
            floatVertexTextures: x && y,
            maxSamples: s ? t.getParameter(36183) : 0
        }
    }
    function On(t) {
        const e = this;
        let n = null
          , i = 0
          , r = !1
          , s = !1;
        const a = new bn
          , o = new j
          , l = {
            value: null,
            needsUpdate: !1
        };
        function c() {
            l.value !== n && (l.value = n,
            l.needsUpdate = i > 0),
            e.numPlanes = i,
            e.numIntersection = 0
        }
        function h(t, n, i, r) {
            const s = null !== t ? t.length : 0;
            let c = null;
            if (0 !== s) {
                if (c = l.value,
                !0 !== r || null === c) {
                    const e = i + 4 * s
                      , r = n.matrixWorldInverse;
                    o.getNormalMatrix(r),
                    (null === c || c.length < e) && (c = new Float32Array(e));
                    for (let e = 0, n = i; e !== s; ++e,
                    n += 4)
                        a.copy(t[e]).applyMatrix4(r, o),
                        a.normal.toArray(c, n),
                        c[n + 3] = a.constant
                }
                l.value = c,
                l.needsUpdate = !0
            }
            return e.numPlanes = s,
            e.numIntersection = 0,
            c
        }
        this.uniform = l,
        this.numPlanes = 0,
        this.numIntersection = 0,
        this.init = function(t, e, s) {
            const a = 0 !== t.length || e || 0 !== i || r;
            return r = e,
            n = h(t, s, 0),
            i = t.length,
            a
        }
        ,
        this.beginShadows = function() {
            s = !0,
            h(null)
        }
        ,
        this.endShadows = function() {
            s = !1,
            c()
        }
        ,
        this.setState = function(e, a, o) {
            const u = e.clippingPlanes
              , d = e.clipIntersection
              , p = e.clipShadows
              , m = t.get(e);
            if (!r || null === u || 0 === u.length || s && !p)
                s ? h(null) : c();
            else {
                const t = s ? 0 : i
                  , e = 4 * t;
                let r = m.clippingState || null;
                l.value = r,
                r = h(u, a, e, o);
                for (let t = 0; t !== e; ++t)
                    r[t] = n[t];
                m.clippingState = r,
                this.numIntersection = d ? this.numPlanes : 0,
                this.numPlanes += t
            }
        }
    }
    function Bn(t) {
        let i = new WeakMap;
        function r(t, i) {
            return 303 === i ? t.mapping = e : 304 === i && (t.mapping = n),
            t
        }
        function s(t) {
            const e = t.target;
            e.removeEventListener("dispose", s);
            const n = i.get(e);
            void 0 !== n && (i.delete(e),
            n.dispose())
        }
        return {
            get: function(e) {
                if (e && e.isTexture && !1 === e.isRenderTargetTexture) {
                    const n = e.mapping;
                    if (303 === n || 304 === n) {
                        if (i.has(e))
                            return r(i.get(e).texture, e.mapping);
                        {
                            const n = e.image;
                            if (n && n.height > 0) {
                                const a = t.getRenderTarget()
                                  , o = new xn(n.height / 2);
                                return o.fromEquirectangularTexture(t, e),
                                i.set(e, o),
                                t.setRenderTarget(a),
                                e.addEventListener("dispose", s),
                                r(o.texture, e.mapping)
                            }
                            return null
                        }
                    }
                }
                return e
            },
            dispose: function() {
                i = new WeakMap
            }
        }
    }
    Pn.physical = {
        uniforms: hn([Pn.standard.uniforms, {
            clearcoat: {
                value: 0
            },
            clearcoatMap: {
                value: null
            },
            clearcoatRoughness: {
                value: 0
            },
            clearcoatRoughnessMap: {
                value: null
            },
            clearcoatNormalScale: {
                value: new W(1,1)
            },
            clearcoatNormalMap: {
                value: null
            },
            sheen: {
                value: 0
            },
            sheenColor: {
                value: new Ee(0)
            },
            sheenColorMap: {
                value: null
            },
            sheenRoughness: {
                value: 0
            },
            sheenRoughnessMap: {
                value: null
            },
            transmission: {
                value: 0
            },
            transmissionMap: {
                value: null
            },
            transmissionSamplerSize: {
                value: new W
            },
            transmissionSamplerMap: {
                value: null
            },
            thickness: {
                value: 0
            },
            thicknessMap: {
                value: null
            },
            attenuationDistance: {
                value: 0
            },
            attenuationColor: {
                value: new Ee(0)
            },
            specularIntensity: {
                value: 0
            },
            specularIntensityMap: {
                value: null
            },
            specularColor: {
                value: new Ee(1,1,1)
            },
            specularColorMap: {
                value: null
            }
        }]),
        vertexShader: Rn.meshphysical_vert,
        fragmentShader: Rn.meshphysical_frag
    };
    class Un extends pn {
        constructor(t=-1, e=1, n=1, i=-1, r=.1, s=2e3) {
            super(),
            this.type = "OrthographicCamera",
            this.zoom = 1,
            this.view = null,
            this.left = t,
            this.right = e,
            this.top = n,
            this.bottom = i,
            this.near = r,
            this.far = s,
            this.updateProjectionMatrix()
        }
        copy(t, e) {
            return super.copy(t, e),
            this.left = t.left,
            this.right = t.right,
            this.top = t.top,
            this.bottom = t.bottom,
            this.near = t.near,
            this.far = t.far,
            this.zoom = t.zoom,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this
        }
        setViewOffset(t, e, n, i, r, s) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }),
            this.view.enabled = !0,
            this.view.fullWidth = t,
            this.view.fullHeight = e,
            this.view.offsetX = n,
            this.view.offsetY = i,
            this.view.width = r,
            this.view.height = s,
            this.updateProjectionMatrix()
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
            const t = (this.right - this.left) / (2 * this.zoom)
              , e = (this.top - this.bottom) / (2 * this.zoom)
              , n = (this.right + this.left) / 2
              , i = (this.top + this.bottom) / 2;
            let r = n - t
              , s = n + t
              , a = i + e
              , o = i - e;
            if (null !== this.view && this.view.enabled) {
                const t = (this.right - this.left) / this.view.fullWidth / this.zoom
                  , e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                r += t * this.view.offsetX,
                s = r + t * this.view.width,
                a -= e * this.view.offsetY,
                o = a - e * this.view.height
            }
            this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.zoom = this.zoom,
            e.object.left = this.left,
            e.object.right = this.right,
            e.object.top = this.top,
            e.object.bottom = this.bottom,
            e.object.near = this.near,
            e.object.far = this.far,
            null !== this.view && (e.object.view = Object.assign({}, this.view)),
            e
        }
    }
    Un.prototype.isOrthographicCamera = !0;
    class Fn extends dn {
        constructor(t) {
            super(t),
            this.type = "RawShaderMaterial"
        }
    }
    Fn.prototype.isRawShaderMaterial = !0;
    const Hn = Math.pow(2, 8)
      , Gn = [.125, .215, .35, .446, .526, .582]
      , Vn = 5 + Gn.length
      , kn = {
        [E]: 0,
        [A]: 1,
        [R]: 2,
        3004: 3,
        3005: 4,
        3006: 5,
        [L]: 6
    }
      , Wn = new Un
      , {_lodPlanes: jn, _sizeLods: qn, _sigmas: Xn} = ei()
      , Yn = new Ee;
    let Jn = null;
    const Zn = (1 + Math.sqrt(5)) / 2
      , Qn = 1 / Zn
      , Kn = [new rt(1,1,1), new rt(-1,1,1), new rt(1,1,-1), new rt(-1,1,-1), new rt(0,Zn,Qn), new rt(0,Zn,-Qn), new rt(Qn,0,Zn), new rt(-Qn,0,Zn), new rt(Zn,Qn,0), new rt(-Zn,Qn,0)];
    class $n {
        constructor(t) {
            this._renderer = t,
            this._pingPongRenderTarget = null,
            this._blurMaterial = function(t) {
                const e = new Float32Array(20)
                  , n = new rt(0,1,0);
                return new Fn({
                    name: "SphericalGaussianBlur",
                    defines: {
                        n: 20
                    },
                    uniforms: {
                        envMap: {
                            value: null
                        },
                        samples: {
                            value: 1
                        },
                        weights: {
                            value: e
                        },
                        latitudinal: {
                            value: !1
                        },
                        dTheta: {
                            value: 0
                        },
                        mipInt: {
                            value: 0
                        },
                        poleAxis: {
                            value: n
                        },
                        inputEncoding: {
                            value: kn[3e3]
                        },
                        outputEncoding: {
                            value: kn[3e3]
                        }
                    },
                    vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
                    fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
                    blending: 0,
                    depthTest: !1,
                    depthWrite: !1
                })
            }(),
            this._equirectShader = null,
            this._cubemapShader = null,
            this._compileMaterial(this._blurMaterial)
        }
        fromScene(t, e=0, n=.1, i=100) {
            Jn = this._renderer.getRenderTarget();
            const r = this._allocateTargets();
            return this._sceneToCubeUV(t, n, i, r),
            e > 0 && this._blur(r, 0, 0, e),
            this._applyPMREM(r),
            this._cleanup(r),
            r
        }
        fromEquirectangular(t) {
            return this._fromTexture(t)
        }
        fromCubemap(t) {
            return this._fromTexture(t)
        }
        compileCubemapShader() {
            null === this._cubemapShader && (this._cubemapShader = si(),
            this._compileMaterial(this._cubemapShader))
        }
        compileEquirectangularShader() {
            null === this._equirectShader && (this._equirectShader = ri(),
            this._compileMaterial(this._equirectShader))
        }
        dispose() {
            this._blurMaterial.dispose(),
            null !== this._cubemapShader && this._cubemapShader.dispose(),
            null !== this._equirectShader && this._equirectShader.dispose();
            for (let t = 0; t < jn.length; t++)
                jn[t].dispose()
        }
        _cleanup(t) {
            this._pingPongRenderTarget.dispose(),
            this._renderer.setRenderTarget(Jn),
            t.scissorTest = !1,
            ii(t, 0, 0, t.width, t.height)
        }
        _fromTexture(t) {
            Jn = this._renderer.getRenderTarget();
            const e = this._allocateTargets(t);
            return this._textureToCubeUV(t, e),
            this._applyPMREM(e),
            this._cleanup(e),
            e
        }
        _allocateTargets(t) {
            const e = {
                magFilter: o,
                minFilter: o,
                generateMipmaps: !1,
                type: h,
                format: 1023,
                encoding: ti(t) ? t.encoding : R,
                depthBuffer: !1
            }
              , n = ni(e);
            return n.depthBuffer = !t,
            this._pingPongRenderTarget = ni(e),
            n
        }
        _compileMaterial(t) {
            const e = new an(jn[0],t);
            this._renderer.compile(e, Wn)
        }
        _sceneToCubeUV(t, e, n, i) {
            const r = new mn(90,1,e,n)
              , s = [1, -1, 1, 1, 1, 1]
              , a = [1, 1, 1, -1, -1, -1]
              , o = this._renderer
              , l = o.autoClear
              , c = o.outputEncoding
              , h = o.toneMapping;
            o.getClearColor(Yn),
            o.toneMapping = 0,
            o.outputEncoding = E,
            o.autoClear = !1;
            const u = new Ae({
                name: "PMREM.Background",
                side: 1,
                depthWrite: !1,
                depthTest: !1
            })
              , d = new an(new ln,u);
            let p = !1;
            const m = t.background;
            m ? m.isColor && (u.color.copy(m),
            t.background = null,
            p = !0) : (u.color.copy(Yn),
            p = !0);
            for (let e = 0; e < 6; e++) {
                const n = e % 3;
                0 == n ? (r.up.set(0, s[e], 0),
                r.lookAt(a[e], 0, 0)) : 1 == n ? (r.up.set(0, 0, s[e]),
                r.lookAt(0, a[e], 0)) : (r.up.set(0, s[e], 0),
                r.lookAt(0, 0, a[e])),
                ii(i, n * Hn, e > 2 ? Hn : 0, Hn, Hn),
                o.setRenderTarget(i),
                p && o.render(d, r),
                o.render(t, r)
            }
            d.geometry.dispose(),
            d.material.dispose(),
            o.toneMapping = h,
            o.outputEncoding = c,
            o.autoClear = l,
            t.background = m
        }
        _setEncoding(t, e) {
            !0 === this._renderer.capabilities.isWebGL2 && e.format === v && e.type === h && e.encoding === A ? t.value = kn[3e3] : t.value = kn[e.encoding]
        }
        _textureToCubeUV(t, i) {
            const r = this._renderer
              , s = t.mapping === e || t.mapping === n;
            s ? null == this._cubemapShader && (this._cubemapShader = si()) : null == this._equirectShader && (this._equirectShader = ri());
            const a = s ? this._cubemapShader : this._equirectShader
              , o = new an(jn[0],a)
              , l = a.uniforms;
            l.envMap.value = t,
            s || l.texelSize.value.set(1 / t.image.width, 1 / t.image.height),
            this._setEncoding(l.inputEncoding, t),
            this._setEncoding(l.outputEncoding, i.texture),
            ii(i, 0, 0, 3 * Hn, 2 * Hn),
            r.setRenderTarget(i),
            r.render(o, Wn)
        }
        _applyPMREM(t) {
            const e = this._renderer
              , n = e.autoClear;
            e.autoClear = !1;
            for (let e = 1; e < Vn; e++) {
                const n = Math.sqrt(Xn[e] * Xn[e] - Xn[e - 1] * Xn[e - 1])
                  , i = Kn[(e - 1) % Kn.length];
                this._blur(t, e - 1, e, n, i)
            }
            e.autoClear = n
        }
        _blur(t, e, n, i, r) {
            const s = this._pingPongRenderTarget;
            this._halfBlur(t, s, e, n, i, "latitudinal", r),
            this._halfBlur(s, t, n, n, i, "longitudinal", r)
        }
        _halfBlur(t, e, n, i, r, s, a) {
            const o = this._renderer
              , l = this._blurMaterial;
            "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
            const c = new an(jn[i],l)
              , h = l.uniforms
              , u = qn[n] - 1
              , d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39
              , p = r / d
              , m = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
            m > 20 && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
            const f = [];
            let g = 0;
            for (let t = 0; t < 20; ++t) {
                const e = t / p
                  , n = Math.exp(-e * e / 2);
                f.push(n),
                0 == t ? g += n : t < m && (g += 2 * n)
            }
            for (let t = 0; t < f.length; t++)
                f[t] = f[t] / g;
            h.envMap.value = t.texture,
            h.samples.value = m,
            h.weights.value = f,
            h.latitudinal.value = "latitudinal" === s,
            a && (h.poleAxis.value = a),
            h.dTheta.value = d,
            h.mipInt.value = 8 - n,
            this._setEncoding(h.inputEncoding, t.texture),
            this._setEncoding(h.outputEncoding, t.texture);
            const v = qn[i];
            ii(e, 3 * Math.max(0, Hn - 2 * v), (0 === i ? 0 : 2 * Hn) + 2 * v * (i > 4 ? i - 8 + 4 : 0), 3 * v, 2 * v),
            o.setRenderTarget(e),
            o.render(c, Wn)
        }
    }
    function ti(t) {
        return void 0 !== t && t.type === h && (t.encoding === E || t.encoding === A || t.encoding === L)
    }
    function ei() {
        const t = []
          , e = []
          , n = [];
        let i = 8;
        for (let r = 0; r < Vn; r++) {
            const s = Math.pow(2, i);
            e.push(s);
            let a = 1 / s;
            r > 4 ? a = Gn[r - 8 + 4 - 1] : 0 == r && (a = 0),
            n.push(a);
            const o = 1 / (s - 1)
              , l = -o / 2
              , c = 1 + o / 2
              , h = [l, l, c, l, c, c, l, l, c, c, l, c]
              , u = 6
              , d = 6
              , p = 3
              , m = 2
              , f = 1
              , g = new Float32Array(p * d * u)
              , v = new Float32Array(m * d * u)
              , x = new Float32Array(f * d * u);
            for (let t = 0; t < u; t++) {
                const e = t % 3 * 2 / 3 - 1
                  , n = t > 2 ? 0 : -1
                  , i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
                g.set(i, p * d * t),
                v.set(h, m * d * t);
                const r = [t, t, t, t, t, t];
                x.set(r, f * d * t)
            }
            const y = new Ge;
            y.setAttribute("position", new Ce(g,p)),
            y.setAttribute("uv", new Ce(v,m)),
            y.setAttribute("faceIndex", new Ce(x,f)),
            t.push(y),
            i > 4 && i--
        }
        return {
            _lodPlanes: t,
            _sizeLods: e,
            _sigmas: n
        }
    }
    function ni(t) {
        const e = new et(3 * Hn,3 * Hn,t);
        return e.texture.mapping = i,
        e.texture.name = "PMREM.cubeUv",
        e.scissorTest = !0,
        e
    }
    function ii(t, e, n, i, r) {
        t.viewport.set(e, n, i, r),
        t.scissor.set(e, n, i, r)
    }
    function ri() {
        const t = new W(1,1);
        return new Fn({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                texelSize: {
                    value: t
                },
                inputEncoding: {
                    value: kn[3e3]
                },
                outputEncoding: {
                    value: kn[3e3]
                }
            },
            vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
            fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        })
    }
    function si() {
        return new Fn({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                inputEncoding: {
                    value: kn[3e3]
                },
                outputEncoding: {
                    value: kn[3e3]
                }
            },
            vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
            fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        })
    }
    function ai(t) {
        let i = new WeakMap
          , r = null;
        function s(t) {
            const e = t.target;
            e.removeEventListener("dispose", s);
            const n = i.get(e);
            void 0 !== n && (i.delete(e),
            n.dispose())
        }
        return {
            get: function(a) {
                if (a && a.isTexture && !1 === a.isRenderTargetTexture) {
                    const o = a.mapping
                      , l = 303 === o || 304 === o
                      , c = o === e || o === n;
                    if (l || c) {
                        if (i.has(a))
                            return i.get(a).texture;
                        {
                            const e = a.image;
                            if (l && e && e.height > 0 || c && e && function(t) {
                                let e = 0;
                                for (let n = 0; n < 6; n++)
                                    void 0 !== t[n] && e++;
                                return 6 === e
                            }(e)) {
                                const e = t.getRenderTarget();
                                null === r && (r = new $n(t));
                                const n = l ? r.fromEquirectangular(a) : r.fromCubemap(a);
                                return i.set(a, n),
                                t.setRenderTarget(e),
                                a.addEventListener("dispose", s),
                                n.texture
                            }
                            return null
                        }
                    }
                }
                return a
            },
            dispose: function() {
                i = new WeakMap,
                null !== r && (r.dispose(),
                r = null)
            }
        }
    }
    function oi(t) {
        const e = {};
        function n(n) {
            if (void 0 !== e[n])
                return e[n];
            let i;
            switch (n) {
            case "WEBGL_depth_texture":
                i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
            case "EXT_texture_filter_anisotropic":
                i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case "WEBGL_compressed_texture_s3tc":
                i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case "WEBGL_compressed_texture_pvrtc":
                i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                i = t.getExtension(n)
            }
            return e[n] = i,
            i
        }
        return {
            has: function(t) {
                return null !== n(t)
            },
            init: function(t) {
                t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"),
                n("OES_texture_float"),
                n("OES_texture_half_float"),
                n("OES_texture_half_float_linear"),
                n("OES_standard_derivatives"),
                n("OES_element_index_uint"),
                n("OES_vertex_array_object"),
                n("ANGLE_instanced_arrays")),
                n("OES_texture_float_linear"),
                n("EXT_color_buffer_half_float")
            },
            get: function(t) {
                const e = n(t);
                return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."),
                e
            }
        }
    }
    function li(t, e, n, i) {
        const r = {}
          , s = new WeakMap;
        function a(t) {
            const o = t.target;
            null !== o.index && e.remove(o.index);
            for (const t in o.attributes)
                e.remove(o.attributes[t]);
            o.removeEventListener("dispose", a),
            delete r[o.id];
            const l = s.get(o);
            l && (e.remove(l),
            s.delete(o)),
            i.releaseStatesOfGeometry(o),
            !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
            n.memory.geometries--
        }
        function o(t) {
            const n = []
              , i = t.index
              , r = t.attributes.position;
            let a = 0;
            if (null !== i) {
                const t = i.array;
                a = i.version;
                for (let e = 0, i = t.length; e < i; e += 3) {
                    const i = t[e + 0]
                      , r = t[e + 1]
                      , s = t[e + 2];
                    n.push(i, r, r, s, s, i)
                }
            } else {
                const t = r.array;
                a = r.version;
                for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
                    const t = e + 0
                      , i = e + 1
                      , r = e + 2;
                    n.push(t, i, i, r, r, t)
                }
            }
            const o = new (q(n) > 65535 ? De : Pe)(n,1);
            o.version = a;
            const l = s.get(t);
            l && e.remove(l),
            s.set(t, o)
        }
        return {
            get: function(t, e) {
                return !0 === r[e.id] || (e.addEventListener("dispose", a),
                r[e.id] = !0,
                n.memory.geometries++),
                e
            },
            update: function(t) {
                const n = t.attributes;
                for (const t in n)
                    e.update(n[t], 34962);
                const i = t.morphAttributes;
                for (const t in i) {
                    const n = i[t];
                    for (let t = 0, i = n.length; t < i; t++)
                        e.update(n[t], 34962)
                }
            },
            getWireframeAttribute: function(t) {
                const e = s.get(t);
                if (e) {
                    const n = t.index;
                    null !== n && e.version < n.version && o(t)
                } else
                    o(t);
                return s.get(t)
            }
        }
    }
    function ci(t, e, n, i) {
        const r = i.isWebGL2;
        let s, a, o;
        this.setMode = function(t) {
            s = t
        }
        ,
        this.setIndex = function(t) {
            a = t.type,
            o = t.bytesPerElement
        }
        ,
        this.render = function(e, i) {
            t.drawElements(s, i, a, e * o),
            n.update(i, s, 1)
        }
        ,
        this.renderInstances = function(i, l, c) {
            if (0 === c)
                return;
            let h, u;
            if (r)
                h = t,
                u = "drawElementsInstanced";
            else if (h = e.get("ANGLE_instanced_arrays"),
            u = "drawElementsInstancedANGLE",
            null === h)
                return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h[u](s, l, a, i * o, c),
            n.update(l, s, c)
        }
    }
    function hi(t) {
        const e = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: e,
            programs: null,
            autoReset: !0,
            reset: function() {
                e.frame++,
                e.calls = 0,
                e.triangles = 0,
                e.points = 0,
                e.lines = 0
            },
            update: function(t, n, i) {
                switch (e.calls++,
                n) {
                case 4:
                    e.triangles += i * (t / 3);
                    break;
                case 1:
                    e.lines += i * (t / 2);
                    break;
                case 3:
                    e.lines += i * (t - 1);
                    break;
                case 2:
                    e.lines += i * t;
                    break;
                case 0:
                    e.points += i * t;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", n)
                }
            }
        }
    }
    class ui extends K {
        constructor(t=null, e=1, n=1, i=1) {
            super(null),
            this.image = {
                data: t,
                width: e,
                height: n,
                depth: i
            },
            this.magFilter = o,
            this.minFilter = o,
            this.wrapR = s,
            this.generateMipmaps = !1,
            this.flipY = !1,
            this.unpackAlignment = 1,
            this.needsUpdate = !0
        }
    }
    function di(t, e) {
        return t[0] - e[0]
    }
    function pi(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1])
    }
    function mi(t, e) {
        let n = 1;
        const i = e.isInterleavedBufferAttribute ? e.data.array : e.array;
        i instanceof Int8Array ? n = 127 : i instanceof Int16Array ? n = 32767 : i instanceof Int32Array ? n = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", i),
        t.divideScalar(n)
    }
    function fi(t, e, n) {
        const i = {}
          , r = new Float32Array(8)
          , s = new WeakMap
          , a = new rt
          , o = [];
        for (let t = 0; t < 8; t++)
            o[t] = [t, 0];
        return {
            update: function(l, c, h, u) {
                const d = l.morphTargetInfluences;
                if (!0 === e.isWebGL2) {
                    const i = c.morphAttributes.position.length;
                    let r = s.get(c);
                    if (void 0 === r || r.count !== i) {
                        void 0 !== r && r.texture.dispose();
                        const t = void 0 !== c.morphAttributes.normal
                          , n = c.morphAttributes.position
                          , o = c.morphAttributes.normal || []
                          , l = !0 === t ? 2 : 1;
                        let h = c.attributes.position.count * l
                          , u = 1;
                        h > e.maxTextureSize && (u = Math.ceil(h / e.maxTextureSize),
                        h = e.maxTextureSize);
                        const d = new Float32Array(h * u * 4 * i)
                          , m = new ui(d,h,u,i);
                        m.format = v,
                        m.type = p;
                        const f = 4 * l;
                        for (let e = 0; e < i; e++) {
                            const i = n[e]
                              , r = o[e]
                              , s = h * u * 4 * e;
                            for (let e = 0; e < i.count; e++) {
                                a.fromBufferAttribute(i, e),
                                !0 === i.normalized && mi(a, i);
                                const n = e * f;
                                d[s + n + 0] = a.x,
                                d[s + n + 1] = a.y,
                                d[s + n + 2] = a.z,
                                d[s + n + 3] = 0,
                                !0 === t && (a.fromBufferAttribute(r, e),
                                !0 === r.normalized && mi(a, r),
                                d[s + n + 4] = a.x,
                                d[s + n + 5] = a.y,
                                d[s + n + 6] = a.z,
                                d[s + n + 7] = 0)
                            }
                        }
                        r = {
                            count: i,
                            texture: m,
                            size: new W(h,u)
                        },
                        s.set(c, r)
                    }
                    let o = 0;
                    for (let t = 0; t < d.length; t++)
                        o += d[t];
                    const l = c.morphTargetsRelative ? 1 : 1 - o;
                    u.getUniforms().setValue(t, "morphTargetBaseInfluence", l),
                    u.getUniforms().setValue(t, "morphTargetInfluences", d),
                    u.getUniforms().setValue(t, "morphTargetsTexture", r.texture, n),
                    u.getUniforms().setValue(t, "morphTargetsTextureSize", r.size)
                } else {
                    const e = void 0 === d ? 0 : d.length;
                    let n = i[c.id];
                    if (void 0 === n || n.length !== e) {
                        n = [];
                        for (let t = 0; t < e; t++)
                            n[t] = [t, 0];
                        i[c.id] = n
                    }
                    for (let t = 0; t < e; t++) {
                        const e = n[t];
                        e[0] = t,
                        e[1] = d[t]
                    }
                    n.sort(pi);
                    for (let t = 0; t < 8; t++)
                        t < e && n[t][1] ? (o[t][0] = n[t][0],
                        o[t][1] = n[t][1]) : (o[t][0] = Number.MAX_SAFE_INTEGER,
                        o[t][1] = 0);
                    o.sort(di);
                    const s = c.morphAttributes.position
                      , a = c.morphAttributes.normal;
                    let l = 0;
                    for (let t = 0; t < 8; t++) {
                        const e = o[t]
                          , n = e[0]
                          , i = e[1];
                        n !== Number.MAX_SAFE_INTEGER && i ? (s && c.getAttribute("morphTarget" + t) !== s[n] && c.setAttribute("morphTarget" + t, s[n]),
                        a && c.getAttribute("morphNormal" + t) !== a[n] && c.setAttribute("morphNormal" + t, a[n]),
                        r[t] = i,
                        l += i) : (s && !0 === c.hasAttribute("morphTarget" + t) && c.deleteAttribute("morphTarget" + t),
                        a && !0 === c.hasAttribute("morphNormal" + t) && c.deleteAttribute("morphNormal" + t),
                        r[t] = 0)
                    }
                    const h = c.morphTargetsRelative ? 1 : 1 - l;
                    u.getUniforms().setValue(t, "morphTargetBaseInfluence", h),
                    u.getUniforms().setValue(t, "morphTargetInfluences", r)
                }
            }
        }
    }
    function gi(t, e, n, i) {
        let r = new WeakMap;
        function s(t) {
            const e = t.target;
            e.removeEventListener("dispose", s),
            n.remove(e.instanceMatrix),
            null !== e.instanceColor && n.remove(e.instanceColor)
        }
        return {
            update: function(t) {
                const a = i.render.frame
                  , o = t.geometry
                  , l = e.get(t, o);
                return r.get(l) !== a && (e.update(l),
                r.set(l, a)),
                t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s),
                n.update(t.instanceMatrix, 34962),
                null !== t.instanceColor && n.update(t.instanceColor, 34962)),
                l
            },
            dispose: function() {
                r = new WeakMap
            }
        }
    }
    ui.prototype.isDataTexture2DArray = !0;
    class vi extends K {
        constructor(t=null, e=1, n=1, i=1) {
            super(null),
            this.image = {
                data: t,
                width: e,
                height: n,
                depth: i
            },
            this.magFilter = o,
            this.minFilter = o,
            this.wrapR = s,
            this.generateMipmaps = !1,
            this.flipY = !1,
            this.unpackAlignment = 1,
            this.needsUpdate = !0
        }
    }
    vi.prototype.isDataTexture3D = !0;
    const xi = new K
      , yi = new ui
      , _i = new vi
      , Mi = new vn
      , bi = []
      , wi = []
      , Si = new Float32Array(16)
      , Ti = new Float32Array(9)
      , Ei = new Float32Array(4);
    function Ai(t, e, n) {
        const i = t[0];
        if (i <= 0 || i > 0)
            return t;
        const r = e * n;
        let s = bi[r];
        if (void 0 === s && (s = new Float32Array(r),
        bi[r] = s),
        0 !== e) {
            i.toArray(s, 0);
            for (let i = 1, r = 0; i !== e; ++i)
                r += n,
                t[i].toArray(s, r)
        }
        return s
    }
    function Li(t, e) {
        if (t.length !== e.length)
            return !1;
        for (let n = 0, i = t.length; n < i; n++)
            if (t[n] !== e[n])
                return !1;
        return !0
    }
    function Ri(t, e) {
        for (let n = 0, i = e.length; n < i; n++)
            t[n] = e[n]
    }
    function Ci(t, e) {
        let n = wi[e];
        void 0 === n && (n = new Int32Array(e),
        wi[e] = n);
        for (let i = 0; i !== e; ++i)
            n[i] = t.allocateTextureUnit();
        return n
    }
    function Pi(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1f(this.addr, e),
        n[0] = e)
    }
    function Di(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
            n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y),
            n[0] = e.x,
            n[1] = e.y);
        else {
            if (Li(n, e))
                return;
            t.uniform2fv(this.addr, e),
            Ri(n, e)
        }
    }
    function Ii(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
            n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z),
            n[0] = e.x,
            n[1] = e.y,
            n[2] = e.z);
        else if (void 0 !== e.r)
            n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b),
            n[0] = e.r,
            n[1] = e.g,
            n[2] = e.b);
        else {
            if (Li(n, e))
                return;
            t.uniform3fv(this.addr, e),
            Ri(n, e)
        }
    }
    function Ni(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
            n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
            n[0] = e.x,
            n[1] = e.y,
            n[2] = e.z,
            n[3] = e.w);
        else {
            if (Li(n, e))
                return;
            t.uniform4fv(this.addr, e),
            Ri(n, e)
        }
    }
    function zi(t, e) {
        const n = this.cache
          , i = e.elements;
        if (void 0 === i) {
            if (Li(n, e))
                return;
            t.uniformMatrix2fv(this.addr, !1, e),
            Ri(n, e)
        } else {
            if (Li(n, i))
                return;
            Ei.set(i),
            t.uniformMatrix2fv(this.addr, !1, Ei),
            Ri(n, i)
        }
    }
    function Oi(t, e) {
        const n = this.cache
          , i = e.elements;
        if (void 0 === i) {
            if (Li(n, e))
                return;
            t.uniformMatrix3fv(this.addr, !1, e),
            Ri(n, e)
        } else {
            if (Li(n, i))
                return;
            Ti.set(i),
            t.uniformMatrix3fv(this.addr, !1, Ti),
            Ri(n, i)
        }
    }
    function Bi(t, e) {
        const n = this.cache
          , i = e.elements;
        if (void 0 === i) {
            if (Li(n, e))
                return;
            t.uniformMatrix4fv(this.addr, !1, e),
            Ri(n, e)
        } else {
            if (Li(n, i))
                return;
            Si.set(i),
            t.uniformMatrix4fv(this.addr, !1, Si),
            Ri(n, i)
        }
    }
    function Ui(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1i(this.addr, e),
        n[0] = e)
    }
    function Fi(t, e) {
        const n = this.cache;
        Li(n, e) || (t.uniform2iv(this.addr, e),
        Ri(n, e))
    }
    function Hi(t, e) {
        const n = this.cache;
        Li(n, e) || (t.uniform3iv(this.addr, e),
        Ri(n, e))
    }
    function Gi(t, e) {
        const n = this.cache;
        Li(n, e) || (t.uniform4iv(this.addr, e),
        Ri(n, e))
    }
    function Vi(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1ui(this.addr, e),
        n[0] = e)
    }
    function ki(t, e) {
        const n = this.cache;
        Li(n, e) || (t.uniform2uiv(this.addr, e),
        Ri(n, e))
    }
    function Wi(t, e) {
        const n = this.cache;
        Li(n, e) || (t.uniform3uiv(this.addr, e),
        Ri(n, e))
    }
    function ji(t, e) {
        const n = this.cache;
        Li(n, e) || (t.uniform4uiv(this.addr, e),
        Ri(n, e))
    }
    function qi(t, e, n) {
        const i = this.cache
          , r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r),
        i[0] = r),
        n.safeSetTexture2D(e || xi, r)
    }
    function Xi(t, e, n) {
        const i = this.cache
          , r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r),
        i[0] = r),
        n.setTexture3D(e || _i, r)
    }
    function Yi(t, e, n) {
        const i = this.cache
          , r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r),
        i[0] = r),
        n.safeSetTextureCube(e || Mi, r)
    }
    function Ji(t, e, n) {
        const i = this.cache
          , r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r),
        i[0] = r),
        n.setTexture2DArray(e || yi, r)
    }
    function Zi(t, e) {
        t.uniform1fv(this.addr, e)
    }
    function Qi(t, e) {
        const n = Ai(e, this.size, 2);
        t.uniform2fv(this.addr, n)
    }
    function Ki(t, e) {
        const n = Ai(e, this.size, 3);
        t.uniform3fv(this.addr, n)
    }
    function $i(t, e) {
        const n = Ai(e, this.size, 4);
        t.uniform4fv(this.addr, n)
    }
    function tr(t, e) {
        const n = Ai(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, n)
    }
    function er(t, e) {
        const n = Ai(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, n)
    }
    function nr(t, e) {
        const n = Ai(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, n)
    }
    function ir(t, e) {
        t.uniform1iv(this.addr, e)
    }
    function rr(t, e) {
        t.uniform2iv(this.addr, e)
    }
    function sr(t, e) {
        t.uniform3iv(this.addr, e)
    }
    function ar(t, e) {
        t.uniform4iv(this.addr, e)
    }
    function or(t, e) {
        t.uniform1uiv(this.addr, e)
    }
    function lr(t, e) {
        t.uniform2uiv(this.addr, e)
    }
    function cr(t, e) {
        t.uniform3uiv(this.addr, e)
    }
    function hr(t, e) {
        t.uniform4uiv(this.addr, e)
    }
    function ur(t, e, n) {
        const i = e.length
          , r = Ci(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t)
            n.safeSetTexture2D(e[t] || xi, r[t])
    }
    function dr(t, e, n) {
        const i = e.length
          , r = Ci(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t)
            n.safeSetTextureCube(e[t] || Mi, r[t])
    }
    function pr(t, e, n) {
        this.id = t,
        this.addr = n,
        this.cache = [],
        this.setValue = function(t) {
            switch (t) {
            case 5126:
                return Pi;
            case 35664:
                return Di;
            case 35665:
                return Ii;
            case 35666:
                return Ni;
            case 35674:
                return zi;
            case 35675:
                return Oi;
            case 35676:
                return Bi;
            case 5124:
            case 35670:
                return Ui;
            case 35667:
            case 35671:
                return Fi;
            case 35668:
            case 35672:
                return Hi;
            case 35669:
            case 35673:
                return Gi;
            case 5125:
                return Vi;
            case 36294:
                return ki;
            case 36295:
                return Wi;
            case 36296:
                return ji;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return qi;
            case 35679:
            case 36299:
            case 36307:
                return Xi;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return Yi;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return Ji
            }
        }(e.type)
    }
    function mr(t, e, n) {
        this.id = t,
        this.addr = n,
        this.cache = [],
        this.size = e.size,
        this.setValue = function(t) {
            switch (t) {
            case 5126:
                return Zi;
            case 35664:
                return Qi;
            case 35665:
                return Ki;
            case 35666:
                return $i;
            case 35674:
                return tr;
            case 35675:
                return er;
            case 35676:
                return nr;
            case 5124:
            case 35670:
                return ir;
            case 35667:
            case 35671:
                return rr;
            case 35668:
            case 35672:
                return sr;
            case 35669:
            case 35673:
                return ar;
            case 5125:
                return or;
            case 36294:
                return lr;
            case 36295:
                return cr;
            case 36296:
                return hr;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return ur;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return dr
            }
        }(e.type)
    }
    function fr(t) {
        this.id = t,
        this.seq = [],
        this.map = {}
    }
    mr.prototype.updateCache = function(t) {
        const e = this.cache;
        t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)),
        Ri(e, t)
    }
    ,
    fr.prototype.setValue = function(t, e, n) {
        const i = this.seq;
        for (let r = 0, s = i.length; r !== s; ++r) {
            const s = i[r];
            s.setValue(t, e[s.id], n)
        }
    }
    ;
    const gr = /(\w+)(\])?(\[|\.)?/g;
    function vr(t, e) {
        t.seq.push(e),
        t.map[e.id] = e
    }
    function xr(t, e, n) {
        const i = t.name
          , r = i.length;
        for (gr.lastIndex = 0; ; ) {
            const s = gr.exec(i)
              , a = gr.lastIndex;
            let o = s[1];
            const l = "]" === s[2]
              , c = s[3];
            if (l && (o |= 0),
            void 0 === c || "[" === c && a + 2 === r) {
                vr(n, void 0 === c ? new pr(o,t,e) : new mr(o,t,e));
                break
            }
            {
                let t = n.map[o];
                void 0 === t && (t = new fr(o),
                vr(n, t)),
                n = t
            }
        }
    }
    function yr(t, e) {
        this.seq = [],
        this.map = {};
        const n = t.getProgramParameter(e, 35718);
        for (let i = 0; i < n; ++i) {
            const n = t.getActiveUniform(e, i);
            xr(n, t.getUniformLocation(e, n.name), this)
        }
    }
    function _r(t, e, n) {
        const i = t.createShader(e);
        return t.shaderSource(i, n),
        t.compileShader(i),
        i
    }
    yr.prototype.setValue = function(t, e, n, i) {
        const r = this.map[e];
        void 0 !== r && r.setValue(t, n, i)
    }
    ,
    yr.prototype.setOptional = function(t, e, n) {
        const i = e[n];
        void 0 !== i && this.setValue(t, n, i)
    }
    ,
    yr.upload = function(t, e, n, i) {
        for (let r = 0, s = e.length; r !== s; ++r) {
            const s = e[r]
              , a = n[s.id];
            !1 !== a.needsUpdate && s.setValue(t, a.value, i)
        }
    }
    ,
    yr.seqWithValue = function(t, e) {
        const n = [];
        for (let i = 0, r = t.length; i !== r; ++i) {
            const r = t[i];
            r.id in e && n.push(r)
        }
        return n
    }
    ;
    let Mr = 0;
    function br(t) {
        switch (t) {
        case E:
            return ["Linear", "( value )"];
        case A:
            return ["sRGB", "( value )"];
        case R:
            return ["RGBE", "( value )"];
        case 3004:
            return ["RGBM", "( value, 7.0 )"];
        case 3005:
            return ["RGBM", "( value, 16.0 )"];
        case 3006:
            return ["RGBD", "( value, 256.0 )"];
        case L:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        case 3003:
            return ["LogLuv", "( value )"];
        default:
            return console.warn("THREE.WebGLProgram: Unsupported encoding:", t),
            ["Linear", "( value )"]
        }
    }
    function wr(t, e, n) {
        const i = t.getShaderParameter(e, 35713)
          , r = t.getShaderInfoLog(e).trim();
        return i && "" === r ? "" : n.toUpperCase() + "\n\n" + r + "\n\n" + function(t) {
            const e = t.split("\n");
            for (let t = 0; t < e.length; t++)
                e[t] = t + 1 + ": " + e[t];
            return e.join("\n")
        }(t.getShaderSource(e))
    }
    function Sr(t, e) {
        const n = br(e);
        return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
    }
    function Tr(t, e) {
        const n = br(e);
        return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
    }
    function Er(t, e) {
        let n;
        switch (e) {
        case 1:
            n = "Linear";
            break;
        case 2:
            n = "Reinhard";
            break;
        case 3:
            n = "OptimizedCineon";
            break;
        case 4:
            n = "ACESFilmic";
            break;
        case 5:
            n = "Custom";
            break;
        default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
            n = "Linear"
        }
        return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    }
    function Ar(t) {
        return "" !== t
    }
    function Lr(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
    }
    function Rr(t, e) {
        return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
    }
    const Cr = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function Pr(t) {
        return t.replace(Cr, Dr)
    }
    function Dr(t, e) {
        const n = Rn[e];
        if (void 0 === n)
            throw new Error("Can not resolve #include <" + e + ">");
        return Pr(n)
    }
    const Ir = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g
      , Nr = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function zr(t) {
        return t.replace(Nr, Br).replace(Ir, Or)
    }
    function Or(t, e, n, i) {
        return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),
        Br(0, e, n, i)
    }
    function Br(t, e, n, i) {
        let r = "";
        for (let t = parseInt(e); t < parseInt(n); t++)
            r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
        return r
    }
    function Ur(t) {
        let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
        return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
        e
    }
    function Fr(t, r, s, a) {
        const o = t.getContext()
          , l = s.defines;
        let c = s.vertexShader
          , h = s.fragmentShader;
        const u = function(t) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"),
            e
        }(s)
          , d = function(t) {
            let r = "ENVMAP_TYPE_CUBE";
            if (t.envMap)
                switch (t.envMapMode) {
                case e:
                case n:
                    r = "ENVMAP_TYPE_CUBE";
                    break;
                case i:
                case 307:
                    r = "ENVMAP_TYPE_CUBE_UV"
                }
            return r
        }(s)
          , p = function(t) {
            let e = "ENVMAP_MODE_REFLECTION";
            if (t.envMap)
                switch (t.envMapMode) {
                case n:
                case 307:
                    e = "ENVMAP_MODE_REFRACTION"
                }
            return e
        }(s)
          , m = function(t) {
            let e = "ENVMAP_BLENDING_NONE";
            if (t.envMap)
                switch (t.combine) {
                case 0:
                    e = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case 1:
                    e = "ENVMAP_BLENDING_MIX";
                    break;
                case 2:
                    e = "ENVMAP_BLENDING_ADD"
                }
            return e
        }(s)
          , f = t.gammaFactor > 0 ? t.gammaFactor : 1
          , v = s.isWebGL2 ? "" : function(t) {
            return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Ar).join("\n")
        }(s)
          , x = function(t) {
            const e = [];
            for (const n in t) {
                const i = t[n];
                !1 !== i && e.push("#define " + n + " " + i)
            }
            return e.join("\n")
        }(l)
          , y = o.createProgram();
        let _, M, b = s.glslVersion ? "#version " + s.glslVersion + "\n" : "";
        s.isRawShaderMaterial ? (_ = [x].filter(Ar).join("\n"),
        _.length > 0 && (_ += "\n"),
        M = [v, x].filter(Ar).join("\n"),
        M.length > 0 && (M += "\n")) : (_ = [Ur(s), "#define SHADER_NAME " + s.shaderName, x, s.instancing ? "#define USE_INSTANCING" : "", s.instancingColor ? "#define USE_INSTANCING_COLOR" : "", s.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + f, "#define MAX_BONES " + s.maxBones, s.useFog && s.fog ? "#define USE_FOG" : "", s.useFog && s.fogExp2 ? "#define FOG_EXP2" : "", s.map ? "#define USE_MAP" : "", s.envMap ? "#define USE_ENVMAP" : "", s.envMap ? "#define " + p : "", s.lightMap ? "#define USE_LIGHTMAP" : "", s.aoMap ? "#define USE_AOMAP" : "", s.emissiveMap ? "#define USE_EMISSIVEMAP" : "", s.bumpMap ? "#define USE_BUMPMAP" : "", s.normalMap ? "#define USE_NORMALMAP" : "", s.normalMap && s.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", s.normalMap && s.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", s.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", s.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", s.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", s.displacementMap && s.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", s.specularMap ? "#define USE_SPECULARMAP" : "", s.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", s.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", s.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", s.metalnessMap ? "#define USE_METALNESSMAP" : "", s.alphaMap ? "#define USE_ALPHAMAP" : "", s.transmission ? "#define USE_TRANSMISSION" : "", s.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", s.thicknessMap ? "#define USE_THICKNESSMAP" : "", s.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", s.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", s.vertexTangents ? "#define USE_TANGENT" : "", s.vertexColors ? "#define USE_COLOR" : "", s.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", s.vertexUvs ? "#define USE_UV" : "", s.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", s.flatShading ? "#define FLAT_SHADED" : "", s.skinning ? "#define USE_SKINNING" : "", s.useVertexTexture ? "#define BONE_TEXTURE" : "", s.morphTargets ? "#define USE_MORPHTARGETS" : "", s.morphNormals && !1 === s.flatShading ? "#define USE_MORPHNORMALS" : "", s.morphTargets && s.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", s.morphTargets && s.isWebGL2 ? "#define MORPHTARGETS_COUNT " + s.morphTargetsCount : "", s.doubleSided ? "#define DOUBLE_SIDED" : "", s.flipSided ? "#define FLIP_SIDED" : "", s.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", s.shadowMapEnabled ? "#define " + u : "", s.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", s.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", s.logarithmicDepthBuffer && s.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Ar).join("\n"),
        M = [v, Ur(s), "#define SHADER_NAME " + s.shaderName, x, "#define GAMMA_FACTOR " + f, s.useFog && s.fog ? "#define USE_FOG" : "", s.useFog && s.fogExp2 ? "#define FOG_EXP2" : "", s.map ? "#define USE_MAP" : "", s.matcap ? "#define USE_MATCAP" : "", s.envMap ? "#define USE_ENVMAP" : "", s.envMap ? "#define " + d : "", s.envMap ? "#define " + p : "", s.envMap ? "#define " + m : "", s.lightMap ? "#define USE_LIGHTMAP" : "", s.aoMap ? "#define USE_AOMAP" : "", s.emissiveMap ? "#define USE_EMISSIVEMAP" : "", s.bumpMap ? "#define USE_BUMPMAP" : "", s.normalMap ? "#define USE_NORMALMAP" : "", s.normalMap && s.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", s.normalMap && s.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", s.clearcoat ? "#define USE_CLEARCOAT" : "", s.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", s.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", s.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", s.specularMap ? "#define USE_SPECULARMAP" : "", s.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", s.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", s.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", s.metalnessMap ? "#define USE_METALNESSMAP" : "", s.alphaMap ? "#define USE_ALPHAMAP" : "", s.alphaTest ? "#define USE_ALPHATEST" : "", s.sheen ? "#define USE_SHEEN" : "", s.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", s.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", s.transmission ? "#define USE_TRANSMISSION" : "", s.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", s.thicknessMap ? "#define USE_THICKNESSMAP" : "", s.vertexTangents ? "#define USE_TANGENT" : "", s.vertexColors || s.instancingColor ? "#define USE_COLOR" : "", s.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", s.vertexUvs ? "#define USE_UV" : "", s.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", s.gradientMap ? "#define USE_GRADIENTMAP" : "", s.flatShading ? "#define FLAT_SHADED" : "", s.doubleSided ? "#define DOUBLE_SIDED" : "", s.flipSided ? "#define FLIP_SIDED" : "", s.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", s.shadowMapEnabled ? "#define " + u : "", s.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", s.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", s.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", s.logarithmicDepthBuffer && s.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (s.extensionShaderTextureLOD || s.envMap) && s.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== s.toneMapping ? "#define TONE_MAPPING" : "", 0 !== s.toneMapping ? Rn.tonemapping_pars_fragment : "", 0 !== s.toneMapping ? Er("toneMapping", s.toneMapping) : "", s.dithering ? "#define DITHERING" : "", s.format === g ? "#define OPAQUE" : "", Rn.encodings_pars_fragment, s.map ? Sr("mapTexelToLinear", s.mapEncoding) : "", s.matcap ? Sr("matcapTexelToLinear", s.matcapEncoding) : "", s.envMap ? Sr("envMapTexelToLinear", s.envMapEncoding) : "", s.emissiveMap ? Sr("emissiveMapTexelToLinear", s.emissiveMapEncoding) : "", s.specularColorMap ? Sr("specularColorMapTexelToLinear", s.specularColorMapEncoding) : "", s.sheenColorMap ? Sr("sheenColorMapTexelToLinear", s.sheenColorMapEncoding) : "", s.lightMap ? Sr("lightMapTexelToLinear", s.lightMapEncoding) : "", Tr("linearToOutputTexel", s.outputEncoding), s.depthPacking ? "#define DEPTH_PACKING " + s.depthPacking : "", "\n"].filter(Ar).join("\n")),
        c = Pr(c),
        c = Lr(c, s),
        c = Rr(c, s),
        h = Pr(h),
        h = Lr(h, s),
        h = Rr(h, s),
        c = zr(c),
        h = zr(h),
        s.isWebGL2 && !0 !== s.isRawShaderMaterial && (b = "#version 300 es\n",
        _ = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + _,
        M = ["#define varying in", s.glslVersion === I ? "" : "out highp vec4 pc_fragColor;", s.glslVersion === I ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + M);
        const w = b + M + h
          , S = _r(o, 35633, b + _ + c)
          , T = _r(o, 35632, w);
        if (o.attachShader(y, S),
        o.attachShader(y, T),
        void 0 !== s.index0AttributeName ? o.bindAttribLocation(y, 0, s.index0AttributeName) : !0 === s.morphTargets && o.bindAttribLocation(y, 0, "position"),
        o.linkProgram(y),
        t.debug.checkShaderErrors) {
            const t = o.getProgramInfoLog(y).trim()
              , e = o.getShaderInfoLog(S).trim()
              , n = o.getShaderInfoLog(T).trim();
            let i = !0
              , r = !0;
            if (!1 === o.getProgramParameter(y, 35714)) {
                i = !1;
                const e = wr(o, S, "vertex")
                  , n = wr(o, T, "fragment");
                console.error("THREE.WebGLProgram: Shader Error " + o.getError() + " - VALIDATE_STATUS " + o.getProgramParameter(y, 35715) + "\n\nProgram Info Log: " + t + "\n" + e + "\n" + n)
            } else
                "" !== t ? console.warn("THREE.WebGLProgram: Program Info Log:", t) : "" !== e && "" !== n || (r = !1);
            r && (this.diagnostics = {
                runnable: i,
                programLog: t,
                vertexShader: {
                    log: e,
                    prefix: _
                },
                fragmentShader: {
                    log: n,
                    prefix: M
                }
            })
        }
        let E, A;
        return o.deleteShader(S),
        o.deleteShader(T),
        this.getUniforms = function() {
            return void 0 === E && (E = new yr(o,y)),
            E
        }
        ,
        this.getAttributes = function() {
            return void 0 === A && (A = function(t, e) {
                const n = {}
                  , i = t.getProgramParameter(e, 35721);
                for (let r = 0; r < i; r++) {
                    const i = t.getActiveAttrib(e, r)
                      , s = i.name;
                    let a = 1;
                    35674 === i.type && (a = 2),
                    35675 === i.type && (a = 3),
                    35676 === i.type && (a = 4),
                    n[s] = {
                        type: i.type,
                        location: t.getAttribLocation(e, s),
                        locationSize: a
                    }
                }
                return n
            }(o, y)),
            A
        }
        ,
        this.destroy = function() {
            a.releaseStatesOfProgram(this),
            o.deleteProgram(y),
            this.program = void 0
        }
        ,
        this.name = s.shaderName,
        this.id = Mr++,
        this.cacheKey = r,
        this.usedTimes = 1,
        this.program = y,
        this.vertexShader = S,
        this.fragmentShader = T,
        this
    }
    function Hr(t, e, n, r, s, a, o) {
        const l = []
          , c = s.isWebGL2
          , u = s.logarithmicDepthBuffer
          , d = s.floatVertexTextures
          , p = s.maxVertexUniforms
          , m = s.vertexTextures;
        let f = s.precision;
        const g = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        }
          , x = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoat", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", , "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "alphaTest", "combine", "vertexColors", "vertexAlphas", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "morphTargetsCount", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "format", "specularIntensityMap", "specularColorMap", "specularColorMapEncoding", "transmission", "transmissionMap", "thicknessMap", "sheen", "sheenColorMap", "sheenColorMapEncoding", "sheenRoughnessMap"];
        function y(t) {
            let e;
            return t && t.isTexture ? e = t.encoding : t && t.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
            e = t.texture.encoding) : e = E,
            c && t && t.isTexture && t.format === v && t.type === h && t.encoding === A && (e = E),
            e
        }
        return {
            getParameters: function(a, l, h, v, x) {
                const _ = v.fog
                  , M = a.isMeshStandardMaterial ? v.environment : null
                  , b = (a.isMeshStandardMaterial ? n : e).get(a.envMap || M)
                  , w = g[a.type]
                  , S = x.isSkinnedMesh ? function(t) {
                    const e = t.skeleton.bones;
                    if (d)
                        return 1024;
                    {
                        const t = p
                          , n = Math.floor((t - 20) / 4)
                          , i = Math.min(n, e.length);
                        return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."),
                        0) : i
                    }
                }(x) : 0;
                let T, E;
                if (null !== a.precision && (f = s.getMaxPrecision(a.precision),
                f !== a.precision && console.warn("THREE.WebGLProgram.getParameters:", a.precision, "not supported, using", f, "instead.")),
                w) {
                    const t = Pn[w];
                    T = t.vertexShader,
                    E = t.fragmentShader
                } else
                    T = a.vertexShader,
                    E = a.fragmentShader;
                const A = t.getRenderTarget()
                  , L = a.alphaTest > 0
                  , R = a.clearcoat > 0;
                return {
                    isWebGL2: c,
                    shaderID: w,
                    shaderName: a.type,
                    vertexShader: T,
                    fragmentShader: E,
                    defines: a.defines,
                    isRawShaderMaterial: !0 === a.isRawShaderMaterial,
                    glslVersion: a.glslVersion,
                    precision: f,
                    instancing: !0 === x.isInstancedMesh,
                    instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor,
                    supportsVertexTextures: m,
                    outputEncoding: null !== A ? y(A.texture) : t.outputEncoding,
                    map: !!a.map,
                    mapEncoding: y(a.map),
                    matcap: !!a.matcap,
                    matcapEncoding: y(a.matcap),
                    envMap: !!b,
                    envMapMode: b && b.mapping,
                    envMapEncoding: y(b),
                    envMapCubeUV: !!b && (b.mapping === i || 307 === b.mapping),
                    lightMap: !!a.lightMap,
                    lightMapEncoding: y(a.lightMap),
                    aoMap: !!a.aoMap,
                    emissiveMap: !!a.emissiveMap,
                    emissiveMapEncoding: y(a.emissiveMap),
                    bumpMap: !!a.bumpMap,
                    normalMap: !!a.normalMap,
                    objectSpaceNormalMap: 1 === a.normalMapType,
                    tangentSpaceNormalMap: 0 === a.normalMapType,
                    clearcoat: R,
                    clearcoatMap: R && !!a.clearcoatMap,
                    clearcoatRoughnessMap: R && !!a.clearcoatRoughnessMap,
                    clearcoatNormalMap: R && !!a.clearcoatNormalMap,
                    displacementMap: !!a.displacementMap,
                    roughnessMap: !!a.roughnessMap,
                    metalnessMap: !!a.metalnessMap,
                    specularMap: !!a.specularMap,
                    specularIntensityMap: !!a.specularIntensityMap,
                    specularColorMap: !!a.specularColorMap,
                    specularColorMapEncoding: y(a.specularColorMap),
                    alphaMap: !!a.alphaMap,
                    alphaTest: L,
                    gradientMap: !!a.gradientMap,
                    sheen: a.sheen > 0,
                    sheenColorMap: !!a.sheenColorMap,
                    sheenColorMapEncoding: y(a.sheenColorMap),
                    sheenRoughnessMap: !!a.sheenRoughnessMap,
                    transmission: a.transmission > 0,
                    transmissionMap: !!a.transmissionMap,
                    thicknessMap: !!a.thicknessMap,
                    combine: a.combine,
                    vertexTangents: !!a.normalMap && !!x.geometry && !!x.geometry.attributes.tangent,
                    vertexColors: a.vertexColors,
                    vertexAlphas: !0 === a.vertexColors && !!x.geometry && !!x.geometry.attributes.color && 4 === x.geometry.attributes.color.itemSize,
                    vertexUvs: !!a.map || !!a.bumpMap || !!a.normalMap || !!a.specularMap || !!a.alphaMap || !!a.emissiveMap || !!a.roughnessMap || !!a.metalnessMap || !!a.clearcoatMap || !!a.clearcoatRoughnessMap || !!a.clearcoatNormalMap || !!a.displacementMap || !!a.transmissionMap || !!a.thicknessMap || !!a.specularIntensityMap || !!a.specularColorMap || !!a.sheenColorMap || a.sheenRoughnessMap,
                    uvsVertexOnly: !(a.map || a.bumpMap || a.normalMap || a.specularMap || a.alphaMap || a.emissiveMap || a.roughnessMap || a.metalnessMap || a.clearcoatNormalMap || a.transmission > 0 || a.transmissionMap || a.thicknessMap || a.specularIntensityMap || a.specularColorMap || !!a.sheen > 0 || a.sheenColorMap || a.sheenRoughnessMap || !a.displacementMap),
                    fog: !!_,
                    useFog: a.fog,
                    fogExp2: _ && _.isFogExp2,
                    flatShading: !!a.flatShading,
                    sizeAttenuation: a.sizeAttenuation,
                    logarithmicDepthBuffer: u,
                    skinning: !0 === x.isSkinnedMesh && S > 0,
                    maxBones: S,
                    useVertexTexture: d,
                    morphTargets: !!x.geometry && !!x.geometry.morphAttributes.position,
                    morphNormals: !!x.geometry && !!x.geometry.morphAttributes.normal,
                    morphTargetsCount: x.geometry && x.geometry.morphAttributes.position ? x.geometry.morphAttributes.position.length : 0,
                    numDirLights: l.directional.length,
                    numPointLights: l.point.length,
                    numSpotLights: l.spot.length,
                    numRectAreaLights: l.rectArea.length,
                    numHemiLights: l.hemi.length,
                    numDirLightShadows: l.directionalShadowMap.length,
                    numPointLightShadows: l.pointShadowMap.length,
                    numSpotLightShadows: l.spotShadowMap.length,
                    numClippingPlanes: o.numPlanes,
                    numClipIntersection: o.numIntersection,
                    format: a.format,
                    dithering: a.dithering,
                    shadowMapEnabled: t.shadowMap.enabled && h.length > 0,
                    shadowMapType: t.shadowMap.type,
                    toneMapping: a.toneMapped ? t.toneMapping : 0,
                    physicallyCorrectLights: t.physicallyCorrectLights,
                    premultipliedAlpha: a.premultipliedAlpha,
                    doubleSided: 2 === a.side,
                    flipSided: 1 === a.side,
                    depthPacking: void 0 !== a.depthPacking && a.depthPacking,
                    index0AttributeName: a.index0AttributeName,
                    extensionDerivatives: a.extensions && a.extensions.derivatives,
                    extensionFragDepth: a.extensions && a.extensions.fragDepth,
                    extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
                    extensionShaderTextureLOD: a.extensions && a.extensions.shaderTextureLOD,
                    rendererExtensionFragDepth: c || r.has("EXT_frag_depth"),
                    rendererExtensionDrawBuffers: c || r.has("WEBGL_draw_buffers"),
                    rendererExtensionShaderTextureLod: c || r.has("EXT_shader_texture_lod"),
                    customProgramCacheKey: a.customProgramCacheKey()
                }
            },
            getProgramCacheKey: function(e) {
                const n = [];
                if (e.shaderID ? n.push(e.shaderID) : (n.push(Y(e.fragmentShader)),
                n.push(Y(e.vertexShader))),
                void 0 !== e.defines)
                    for (const t in e.defines)
                        n.push(t),
                        n.push(e.defines[t]);
                if (!1 === e.isRawShaderMaterial) {
                    for (let t = 0; t < x.length; t++)
                        n.push(e[x[t]]);
                    n.push(t.outputEncoding),
                    n.push(t.gammaFactor)
                }
                return n.push(e.customProgramCacheKey),
                n.join()
            },
            getUniforms: function(t) {
                const e = g[t.type];
                let n;
                if (e) {
                    const t = Pn[e];
                    n = un.clone(t.uniforms)
                } else
                    n = t.uniforms;
                return n
            },
            acquireProgram: function(e, n) {
                let i;
                for (let t = 0, e = l.length; t < e; t++) {
                    const e = l[t];
                    if (e.cacheKey === n) {
                        i = e,
                        ++i.usedTimes;
                        break
                    }
                }
                return void 0 === i && (i = new Fr(t,n,e,a),
                l.push(i)),
                i
            },
            releaseProgram: function(t) {
                if (0 == --t.usedTimes) {
                    const e = l.indexOf(t);
                    l[e] = l[l.length - 1],
                    l.pop(),
                    t.destroy()
                }
            },
            programs: l
        }
    }
    function Gr() {
        let t = new WeakMap;
        return {
            get: function(e) {
                let n = t.get(e);
                return void 0 === n && (n = {},
                t.set(e, n)),
                n
            },
            remove: function(e) {
                t.delete(e)
            },
            update: function(e, n, i) {
                t.get(e)[n] = i
            },
            dispose: function() {
                t = new WeakMap
            }
        }
    }
    function Vr(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
    }
    function kr(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
    }
    function Wr(t) {
        const e = [];
        let n = 0;
        const i = []
          , r = []
          , s = []
          , a = {
            id: -1
        };
        function o(i, r, s, o, l, c) {
            let h = e[n];
            const u = t.get(s);
            return void 0 === h ? (h = {
                id: i.id,
                object: i,
                geometry: r,
                material: s,
                program: u.program || a,
                groupOrder: o,
                renderOrder: i.renderOrder,
                z: l,
                group: c
            },
            e[n] = h) : (h.id = i.id,
            h.object = i,
            h.geometry = r,
            h.material = s,
            h.program = u.program || a,
            h.groupOrder = o,
            h.renderOrder = i.renderOrder,
            h.z = l,
            h.group = c),
            n++,
            h
        }
        return {
            opaque: i,
            transmissive: r,
            transparent: s,
            init: function() {
                n = 0,
                i.length = 0,
                r.length = 0,
                s.length = 0
            },
            push: function(t, e, n, a, l, c) {
                const h = o(t, e, n, a, l, c);
                n.transmission > 0 ? r.push(h) : !0 === n.transparent ? s.push(h) : i.push(h)
            },
            unshift: function(t, e, n, a, l, c) {
                const h = o(t, e, n, a, l, c);
                n.transmission > 0 ? r.unshift(h) : !0 === n.transparent ? s.unshift(h) : i.unshift(h)
            },
            finish: function() {
                for (let t = n, i = e.length; t < i; t++) {
                    const n = e[t];
                    if (null === n.id)
                        break;
                    n.id = null,
                    n.object = null,
                    n.geometry = null,
                    n.material = null,
                    n.program = null,
                    n.group = null
                }
            },
            sort: function(t, e) {
                i.length > 1 && i.sort(t || Vr),
                r.length > 1 && r.sort(e || kr),
                s.length > 1 && s.sort(e || kr)
            }
        }
    }
    function jr(t) {
        let e = new WeakMap;
        return {
            get: function(n, i) {
                let r;
                return !1 === e.has(n) ? (r = new Wr(t),
                e.set(n, [r])) : i >= e.get(n).length ? (r = new Wr(t),
                e.get(n).push(r)) : r = e.get(n)[i],
                r
            },
            dispose: function() {
                e = new WeakMap
            }
        }
    }
    function qr() {
        const t = {};
        return {
            get: function(e) {
                if (void 0 !== t[e.id])
                    return t[e.id];
                let n;
                switch (e.type) {
                case "DirectionalLight":
                    n = {
                        direction: new rt,
                        color: new Ee
                    };
                    break;
                case "SpotLight":
                    n = {
                        position: new rt,
                        direction: new rt,
                        color: new Ee,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                    };
                    break;
                case "PointLight":
                    n = {
                        position: new rt,
                        color: new Ee,
                        distance: 0,
                        decay: 0
                    };
                    break;
                case "HemisphereLight":
                    n = {
                        direction: new rt,
                        skyColor: new Ee,
                        groundColor: new Ee
                    };
                    break;
                case "RectAreaLight":
                    n = {
                        color: new Ee,
                        position: new rt,
                        halfWidth: new rt,
                        halfHeight: new rt
                    }
                }
                return t[e.id] = n,
                n
            }
        }
    }
    let Xr = 0;
    function Yr(t, e) {
        return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
    }
    function Jr(t, e) {
        const n = new qr
          , i = function() {
            const t = {};
            return {
                get: function(e) {
                    if (void 0 !== t[e.id])
                        return t[e.id];
                    let n;
                    switch (e.type) {
                    case "DirectionalLight":
                    case "SpotLight":
                        n = {
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new W
                        };
                        break;
                    case "PointLight":
                        n = {
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new W,
                            shadowCameraNear: 1,
                            shadowCameraFar: 1e3
                        }
                    }
                    return t[e.id] = n,
                    n
                }
            }
        }()
          , r = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        };
        for (let t = 0; t < 9; t++)
            r.probe.push(new rt);
        const s = new rt
          , a = new zt
          , o = new zt;
        return {
            setup: function(s, a) {
                let o = 0
                  , l = 0
                  , c = 0;
                for (let t = 0; t < 9; t++)
                    r.probe[t].set(0, 0, 0);
                let h = 0
                  , u = 0
                  , d = 0
                  , p = 0
                  , m = 0
                  , f = 0
                  , g = 0
                  , v = 0;
                s.sort(Yr);
                const x = !0 !== a ? Math.PI : 1;
                for (let t = 0, e = s.length; t < e; t++) {
                    const e = s[t]
                      , a = e.color
                      , y = e.intensity
                      , _ = e.distance
                      , M = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                    if (e.isAmbientLight)
                        o += a.r * y * x,
                        l += a.g * y * x,
                        c += a.b * y * x;
                    else if (e.isLightProbe)
                        for (let t = 0; t < 9; t++)
                            r.probe[t].addScaledVector(e.sh.coefficients[t], y);
                    else if (e.isDirectionalLight) {
                        const t = n.get(e);
                        if (t.color.copy(e.color).multiplyScalar(e.intensity * x),
                        e.castShadow) {
                            const t = e.shadow
                              , n = i.get(e);
                            n.shadowBias = t.bias,
                            n.shadowNormalBias = t.normalBias,
                            n.shadowRadius = t.radius,
                            n.shadowMapSize = t.mapSize,
                            r.directionalShadow[h] = n,
                            r.directionalShadowMap[h] = M,
                            r.directionalShadowMatrix[h] = e.shadow.matrix,
                            f++
                        }
                        r.directional[h] = t,
                        h++
                    } else if (e.isSpotLight) {
                        const t = n.get(e);
                        if (t.position.setFromMatrixPosition(e.matrixWorld),
                        t.color.copy(a).multiplyScalar(y * x),
                        t.distance = _,
                        t.coneCos = Math.cos(e.angle),
                        t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)),
                        t.decay = e.decay,
                        e.castShadow) {
                            const t = e.shadow
                              , n = i.get(e);
                            n.shadowBias = t.bias,
                            n.shadowNormalBias = t.normalBias,
                            n.shadowRadius = t.radius,
                            n.shadowMapSize = t.mapSize,
                            r.spotShadow[d] = n,
                            r.spotShadowMap[d] = M,
                            r.spotShadowMatrix[d] = e.shadow.matrix,
                            v++
                        }
                        r.spot[d] = t,
                        d++
                    } else if (e.isRectAreaLight) {
                        const t = n.get(e);
                        t.color.copy(a).multiplyScalar(y),
                        t.halfWidth.set(.5 * e.width, 0, 0),
                        t.halfHeight.set(0, .5 * e.height, 0),
                        r.rectArea[p] = t,
                        p++
                    } else if (e.isPointLight) {
                        const t = n.get(e);
                        if (t.color.copy(e.color).multiplyScalar(e.intensity * x),
                        t.distance = e.distance,
                        t.decay = e.decay,
                        e.castShadow) {
                            const t = e.shadow
                              , n = i.get(e);
                            n.shadowBias = t.bias,
                            n.shadowNormalBias = t.normalBias,
                            n.shadowRadius = t.radius,
                            n.shadowMapSize = t.mapSize,
                            n.shadowCameraNear = t.camera.near,
                            n.shadowCameraFar = t.camera.far,
                            r.pointShadow[u] = n,
                            r.pointShadowMap[u] = M,
                            r.pointShadowMatrix[u] = e.shadow.matrix,
                            g++
                        }
                        r.point[u] = t,
                        u++
                    } else if (e.isHemisphereLight) {
                        const t = n.get(e);
                        t.skyColor.copy(e.color).multiplyScalar(y * x),
                        t.groundColor.copy(e.groundColor).multiplyScalar(y * x),
                        r.hemi[m] = t,
                        m++
                    }
                }
                p > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Cn.LTC_FLOAT_1,
                r.rectAreaLTC2 = Cn.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = Cn.LTC_HALF_1,
                r.rectAreaLTC2 = Cn.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
                r.ambient[0] = o,
                r.ambient[1] = l,
                r.ambient[2] = c;
                const y = r.hash;
                y.directionalLength === h && y.pointLength === u && y.spotLength === d && y.rectAreaLength === p && y.hemiLength === m && y.numDirectionalShadows === f && y.numPointShadows === g && y.numSpotShadows === v || (r.directional.length = h,
                r.spot.length = d,
                r.rectArea.length = p,
                r.point.length = u,
                r.hemi.length = m,
                r.directionalShadow.length = f,
                r.directionalShadowMap.length = f,
                r.pointShadow.length = g,
                r.pointShadowMap.length = g,
                r.spotShadow.length = v,
                r.spotShadowMap.length = v,
                r.directionalShadowMatrix.length = f,
                r.pointShadowMatrix.length = g,
                r.spotShadowMatrix.length = v,
                y.directionalLength = h,
                y.pointLength = u,
                y.spotLength = d,
                y.rectAreaLength = p,
                y.hemiLength = m,
                y.numDirectionalShadows = f,
                y.numPointShadows = g,
                y.numSpotShadows = v,
                r.version = Xr++)
            },
            setupView: function(t, e) {
                let n = 0
                  , i = 0
                  , l = 0
                  , c = 0
                  , h = 0;
                const u = e.matrixWorldInverse;
                for (let e = 0, d = t.length; e < d; e++) {
                    const d = t[e];
                    if (d.isDirectionalLight) {
                        const t = r.directional[n];
                        t.direction.setFromMatrixPosition(d.matrixWorld),
                        s.setFromMatrixPosition(d.target.matrixWorld),
                        t.direction.sub(s),
                        t.direction.transformDirection(u),
                        n++
                    } else if (d.isSpotLight) {
                        const t = r.spot[l];
                        t.position.setFromMatrixPosition(d.matrixWorld),
                        t.position.applyMatrix4(u),
                        t.direction.setFromMatrixPosition(d.matrixWorld),
                        s.setFromMatrixPosition(d.target.matrixWorld),
                        t.direction.sub(s),
                        t.direction.transformDirection(u),
                        l++
                    } else if (d.isRectAreaLight) {
                        const t = r.rectArea[c];
                        t.position.setFromMatrixPosition(d.matrixWorld),
                        t.position.applyMatrix4(u),
                        o.identity(),
                        a.copy(d.matrixWorld),
                        a.premultiply(u),
                        o.extractRotation(a),
                        t.halfWidth.set(.5 * d.width, 0, 0),
                        t.halfHeight.set(0, .5 * d.height, 0),
                        t.halfWidth.applyMatrix4(o),
                        t.halfHeight.applyMatrix4(o),
                        c++
                    } else if (d.isPointLight) {
                        const t = r.point[i];
                        t.position.setFromMatrixPosition(d.matrixWorld),
                        t.position.applyMatrix4(u),
                        i++
                    } else if (d.isHemisphereLight) {
                        const t = r.hemi[h];
                        t.direction.setFromMatrixPosition(d.matrixWorld),
                        t.direction.transformDirection(u),
                        t.direction.normalize(),
                        h++
                    }
                }
            },
            state: r
        }
    }
    function Zr(t, e) {
        const n = new Jr(t,e)
          , i = []
          , r = [];
        return {
            init: function() {
                i.length = 0,
                r.length = 0
            },
            state: {
                lightsArray: i,
                shadowsArray: r,
                lights: n
            },
            setupLights: function(t) {
                n.setup(i, t)
            },
            setupLightsView: function(t) {
                n.setupView(i, t)
            },
            pushLight: function(t) {
                i.push(t)
            },
            pushShadow: function(t) {
                r.push(t)
            }
        }
    }
    function Qr(t, e) {
        let n = new WeakMap;
        return {
            get: function(i, r=0) {
                let s;
                return !1 === n.has(i) ? (s = new Zr(t,e),
                n.set(i, [s])) : r >= n.get(i).length ? (s = new Zr(t,e),
                n.get(i).push(s)) : s = n.get(i)[r],
                s
            },
            dispose: function() {
                n = new WeakMap
            }
        }
    }
    class Kr extends ye {
        constructor(t) {
            super(),
            this.type = "MeshDepthMaterial",
            this.depthPacking = 3200,
            this.map = null,
            this.alphaMap = null,
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.fog = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.depthPacking = t.depthPacking,
            this.map = t.map,
            this.alphaMap = t.alphaMap,
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this
        }
    }
    Kr.prototype.isMeshDepthMaterial = !0;
    class $r extends ye {
        constructor(t) {
            super(),
            this.type = "MeshDistanceMaterial",
            this.referencePosition = new rt,
            this.nearDistance = 1,
            this.farDistance = 1e3,
            this.map = null,
            this.alphaMap = null,
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.fog = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.referencePosition.copy(t.referencePosition),
            this.nearDistance = t.nearDistance,
            this.farDistance = t.farDistance,
            this.map = t.map,
            this.alphaMap = t.alphaMap,
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this
        }
    }
    function ts(t, e, n) {
        let i = new Tn;
        const r = new W
          , s = new W
          , a = new tt
          , c = new Kr({
            depthPacking: 3201
        })
          , h = new $r
          , u = {}
          , d = n.maxTextureSize
          , p = {
            0: 1,
            1: 0,
            2: 2
        }
          , m = new dn({
            defines: {
                VSM_SAMPLES: 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new W
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
        })
          , f = m.clone();
        f.defines.HORIZONTAL_PASS = 1;
        const g = new Ge;
        g.setAttribute("position", new Ce(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
        const x = new an(g,m)
          , y = this;
        function _(n, i) {
            const r = e.update(x);
            m.defines.VSM_SAMPLES !== n.blurSamples && (m.defines.VSM_SAMPLES = n.blurSamples,
            f.defines.VSM_SAMPLES = n.blurSamples,
            m.needsUpdate = !0,
            f.needsUpdate = !0),
            m.uniforms.shadow_pass.value = n.map.texture,
            m.uniforms.resolution.value = n.mapSize,
            m.uniforms.radius.value = n.radius,
            t.setRenderTarget(n.mapPass),
            t.clear(),
            t.renderBufferDirect(i, null, r, m, x, null),
            f.uniforms.shadow_pass.value = n.mapPass.texture,
            f.uniforms.resolution.value = n.mapSize,
            f.uniforms.radius.value = n.radius,
            t.setRenderTarget(n.map),
            t.clear(),
            t.renderBufferDirect(i, null, r, f, x, null)
        }
        function M(e, n, i, r, s, a, o) {
            let l = null;
            const d = !0 === r.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
            if (l = void 0 !== d ? d : !0 === r.isPointLight ? h : c,
            t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length || i.displacementMap && 0 !== i.displacementScale || i.alphaMap && i.alphaTest > 0) {
                const t = l.uuid
                  , e = i.uuid;
                let n = u[t];
                void 0 === n && (n = {},
                u[t] = n);
                let r = n[e];
                void 0 === r && (r = l.clone(),
                n[e] = r),
                l = r
            }
            return l.visible = i.visible,
            l.wireframe = i.wireframe,
            l.side = 3 === o ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : p[i.side],
            l.alphaMap = i.alphaMap,
            l.alphaTest = i.alphaTest,
            l.clipShadows = i.clipShadows,
            l.clippingPlanes = i.clippingPlanes,
            l.clipIntersection = i.clipIntersection,
            l.displacementMap = i.displacementMap,
            l.displacementScale = i.displacementScale,
            l.displacementBias = i.displacementBias,
            l.wireframeLinewidth = i.wireframeLinewidth,
            l.linewidth = i.linewidth,
            !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld),
            l.nearDistance = s,
            l.farDistance = a),
            l
        }
        function b(n, r, s, a, o) {
            if (!1 === n.visible)
                return;
            if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
                n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
                const i = e.update(n)
                  , r = n.material;
                if (Array.isArray(r)) {
                    const e = i.groups;
                    for (let l = 0, c = e.length; l < c; l++) {
                        const c = e[l]
                          , h = r[c.materialIndex];
                        if (h && h.visible) {
                            const e = M(n, 0, h, a, s.near, s.far, o);
                            t.renderBufferDirect(s, null, i, e, n, c)
                        }
                    }
                } else if (r.visible) {
                    const e = M(n, 0, r, a, s.near, s.far, o);
                    t.renderBufferDirect(s, null, i, e, n, null)
                }
            }
            const l = n.children;
            for (let t = 0, e = l.length; t < e; t++)
                b(l[t], r, s, a, o)
        }
        this.enabled = !1,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this.type = 1,
        this.render = function(e, n, c) {
            if (!1 === y.enabled)
                return;
            if (!1 === y.autoUpdate && !1 === y.needsUpdate)
                return;
            if (0 === e.length)
                return;
            const h = t.getRenderTarget()
              , u = t.getActiveCubeFace()
              , p = t.getActiveMipmapLevel()
              , m = t.state;
            m.setBlending(0),
            m.buffers.color.setClear(1, 1, 1, 1),
            m.buffers.depth.setTest(!0),
            m.setScissorTest(!1);
            for (let h = 0, u = e.length; h < u; h++) {
                const u = e[h]
                  , p = u.shadow;
                if (void 0 === p) {
                    console.warn("THREE.WebGLShadowMap:", u, "has no shadow.");
                    continue
                }
                if (!1 === p.autoUpdate && !1 === p.needsUpdate)
                    continue;
                r.copy(p.mapSize);
                const f = p.getFrameExtents();
                if (r.multiply(f),
                s.copy(p.mapSize),
                (r.x > d || r.y > d) && (r.x > d && (s.x = Math.floor(d / f.x),
                r.x = s.x * f.x,
                p.mapSize.x = s.x),
                r.y > d && (s.y = Math.floor(d / f.y),
                r.y = s.y * f.y,
                p.mapSize.y = s.y)),
                null === p.map && !p.isPointLightShadow && 3 === this.type) {
                    const t = {
                        minFilter: l,
                        magFilter: l,
                        format: v
                    };
                    p.map = new et(r.x,r.y,t),
                    p.map.texture.name = u.name + ".shadowMap",
                    p.mapPass = new et(r.x,r.y,t),
                    p.camera.updateProjectionMatrix()
                }
                if (null === p.map) {
                    const t = {
                        minFilter: o,
                        magFilter: o,
                        format: v
                    };
                    p.map = new et(r.x,r.y,t),
                    p.map.texture.name = u.name + ".shadowMap",
                    p.camera.updateProjectionMatrix()
                }
                t.setRenderTarget(p.map),
                t.clear();
                const g = p.getViewportCount();
                for (let t = 0; t < g; t++) {
                    const e = p.getViewport(t);
                    a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w),
                    m.viewport(a),
                    p.updateMatrices(u, t),
                    i = p.getFrustum(),
                    b(n, c, p.camera, u, this.type)
                }
                p.isPointLightShadow || 3 !== this.type || _(p, c),
                p.needsUpdate = !1
            }
            y.needsUpdate = !1,
            t.setRenderTarget(h, u, p)
        }
    }
    function es(e, n, i) {
        const r = i.isWebGL2
          , s = new function() {
            let t = !1;
            const n = new tt;
            let i = null;
            const r = new tt(0,0,0,0);
            return {
                setMask: function(n) {
                    i === n || t || (e.colorMask(n, n, n, n),
                    i = n)
                },
                setLocked: function(e) {
                    t = e
                },
                setClear: function(t, i, s, a, o) {
                    !0 === o && (t *= a,
                    i *= a,
                    s *= a),
                    n.set(t, i, s, a),
                    !1 === r.equals(n) && (e.clearColor(t, i, s, a),
                    r.copy(n))
                },
                reset: function() {
                    t = !1,
                    i = null,
                    r.set(-1, 0, 0, 0)
                }
            }
        }
          , a = new function() {
            let t = !1
              , n = null
              , i = null
              , r = null;
            return {
                setTest: function(t) {
                    t ? U(2929) : F(2929)
                },
                setMask: function(i) {
                    n === i || t || (e.depthMask(i),
                    n = i)
                },
                setFunc: function(t) {
                    if (i !== t) {
                        if (t)
                            switch (t) {
                            case 0:
                                e.depthFunc(512);
                                break;
                            case 1:
                                e.depthFunc(519);
                                break;
                            case 2:
                                e.depthFunc(513);
                                break;
                            default:
                                e.depthFunc(515);
                                break;
                            case 4:
                                e.depthFunc(514);
                                break;
                            case 5:
                                e.depthFunc(518);
                                break;
                            case 6:
                                e.depthFunc(516);
                                break;
                            case 7:
                                e.depthFunc(517)
                            }
                        else
                            e.depthFunc(515);
                        i = t
                    }
                },
                setLocked: function(e) {
                    t = e
                },
                setClear: function(t) {
                    r !== t && (e.clearDepth(t),
                    r = t)
                },
                reset: function() {
                    t = !1,
                    n = null,
                    i = null,
                    r = null
                }
            }
        }
          , o = new function() {
            let t = !1
              , n = null
              , i = null
              , r = null
              , s = null
              , a = null
              , o = null
              , l = null
              , c = null;
            return {
                setTest: function(e) {
                    t || (e ? U(2960) : F(2960))
                },
                setMask: function(i) {
                    n === i || t || (e.stencilMask(i),
                    n = i)
                },
                setFunc: function(t, n, a) {
                    i === t && r === n && s === a || (e.stencilFunc(t, n, a),
                    i = t,
                    r = n,
                    s = a)
                },
                setOp: function(t, n, i) {
                    a === t && o === n && l === i || (e.stencilOp(t, n, i),
                    a = t,
                    o = n,
                    l = i)
                },
                setLocked: function(e) {
                    t = e
                },
                setClear: function(t) {
                    c !== t && (e.clearStencil(t),
                    c = t)
                },
                reset: function() {
                    t = !1,
                    n = null,
                    i = null,
                    r = null,
                    s = null,
                    a = null,
                    o = null,
                    l = null,
                    c = null
                }
            }
        }
        ;
        let l = {}
          , c = null
          , h = {}
          , u = null
          , d = !1
          , p = null
          , m = null
          , f = null
          , g = null
          , v = null
          , x = null
          , y = null
          , _ = !1
          , M = null
          , b = null
          , w = null
          , S = null
          , T = null;
        const E = e.getParameter(35661);
        let A = !1
          , L = 0;
        const R = e.getParameter(7938);
        -1 !== R.indexOf("WebGL") ? (L = parseFloat(/^WebGL (\d)/.exec(R)[1]),
        A = L >= 1) : -1 !== R.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),
        A = L >= 2);
        let C = null
          , P = {};
        const D = e.getParameter(3088)
          , I = e.getParameter(2978)
          , N = (new tt).fromArray(D)
          , z = (new tt).fromArray(I);
        function O(t, n, i) {
            const r = new Uint8Array(4)
              , s = e.createTexture();
            e.bindTexture(t, s),
            e.texParameteri(t, 10241, 9728),
            e.texParameteri(t, 10240, 9728);
            for (let t = 0; t < i; t++)
                e.texImage2D(n + t, 0, 6408, 1, 1, 0, 6408, 5121, r);
            return s
        }
        const B = {};
        function U(t) {
            !0 !== l[t] && (e.enable(t),
            l[t] = !0)
        }
        function F(t) {
            !1 !== l[t] && (e.disable(t),
            l[t] = !1)
        }
        B[3553] = O(3553, 3553, 1),
        B[34067] = O(34067, 34069, 6),
        s.setClear(0, 0, 0, 1),
        a.setClear(1),
        o.setClear(0),
        U(2929),
        a.setFunc(3),
        k(!1),
        W(1),
        U(2884),
        V(0);
        const H = {
            [t]: 32774,
            101: 32778,
            102: 32779
        };
        if (r)
            H[103] = 32775,
            H[104] = 32776;
        else {
            const t = n.get("EXT_blend_minmax");
            null !== t && (H[103] = t.MIN_EXT,
            H[104] = t.MAX_EXT)
        }
        const G = {
            200: 0,
            201: 1,
            202: 768,
            204: 770,
            210: 776,
            208: 774,
            206: 772,
            203: 769,
            205: 771,
            209: 775,
            207: 773
        };
        function V(n, i, r, s, a, o, l, c) {
            if (0 !== n) {
                if (!1 === d && (U(3042),
                d = !0),
                5 === n)
                    a = a || i,
                    o = o || r,
                    l = l || s,
                    i === m && a === v || (e.blendEquationSeparate(H[i], H[a]),
                    m = i,
                    v = a),
                    r === f && s === g && o === x && l === y || (e.blendFuncSeparate(G[r], G[s], G[o], G[l]),
                    f = r,
                    g = s,
                    x = o,
                    y = l),
                    p = n,
                    _ = null;
                else if (n !== p || c !== _) {
                    if (m === t && v === t || (e.blendEquation(32774),
                    m = t,
                    v = t),
                    c)
                        switch (n) {
                        case 1:
                            e.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case 2:
                            e.blendFunc(1, 1);
                            break;
                        case 3:
                            e.blendFuncSeparate(0, 0, 769, 771);
                            break;
                        case 4:
                            e.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", n)
                        }
                    else
                        switch (n) {
                        case 1:
                            e.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case 2:
                            e.blendFunc(770, 1);
                            break;
                        case 3:
                            e.blendFunc(0, 769);
                            break;
                        case 4:
                            e.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", n)
                        }
                    f = null,
                    g = null,
                    x = null,
                    y = null,
                    p = n,
                    _ = c
                }
            } else
                !0 === d && (F(3042),
                d = !1)
        }
        function k(t) {
            M !== t && (t ? e.frontFace(2304) : e.frontFace(2305),
            M = t)
        }
        function W(t) {
            0 !== t ? (U(2884),
            t !== b && (1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032))) : F(2884),
            b = t
        }
        function j(t, n, i) {
            t ? (U(32823),
            S === n && T === i || (e.polygonOffset(n, i),
            S = n,
            T = i)) : F(32823)
        }
        function q(t) {
            void 0 === t && (t = 33984 + E - 1),
            C !== t && (e.activeTexture(t),
            C = t)
        }
        return {
            buffers: {
                color: s,
                depth: a,
                stencil: o
            },
            enable: U,
            disable: F,
            bindFramebuffer: function(t, n) {
                return null === n && null !== c && (n = c),
                h[t] !== n && (e.bindFramebuffer(t, n),
                h[t] = n,
                r && (36009 === t && (h[36160] = n),
                36160 === t && (h[36009] = n)),
                !0)
            },
            bindXRFramebuffer: function(t) {
                t !== c && (e.bindFramebuffer(36160, t),
                c = t)
            },
            useProgram: function(t) {
                return u !== t && (e.useProgram(t),
                u = t,
                !0)
            },
            setBlending: V,
            setMaterial: function(t, e) {
                2 === t.side ? F(2884) : U(2884);
                let n = 1 === t.side;
                e && (n = !n),
                k(n),
                1 === t.blending && !1 === t.transparent ? V(0) : V(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha),
                a.setFunc(t.depthFunc),
                a.setTest(t.depthTest),
                a.setMask(t.depthWrite),
                s.setMask(t.colorWrite);
                const i = t.stencilWrite;
                o.setTest(i),
                i && (o.setMask(t.stencilWriteMask),
                o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
                o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
                j(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
                !0 === t.alphaToCoverage ? U(32926) : F(32926)
            },
            setFlipSided: k,
            setCullFace: W,
            setLineWidth: function(t) {
                t !== w && (A && e.lineWidth(t),
                w = t)
            },
            setPolygonOffset: j,
            setScissorTest: function(t) {
                t ? U(3089) : F(3089)
            },
            activeTexture: q,
            bindTexture: function(t, n) {
                null === C && q();
                let i = P[C];
                void 0 === i && (i = {
                    type: void 0,
                    texture: void 0
                },
                P[C] = i),
                i.type === t && i.texture === n || (e.bindTexture(t, n || B[t]),
                i.type = t,
                i.texture = n)
            },
            unbindTexture: function() {
                const t = P[C];
                void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null),
                t.type = void 0,
                t.texture = void 0)
            },
            compressedTexImage2D: function() {
                try {
                    e.compressedTexImage2D.apply(e, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage2D: function() {
                try {
                    e.texImage2D.apply(e, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage3D: function() {
                try {
                    e.texImage3D.apply(e, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            scissor: function(t) {
                !1 === N.equals(t) && (e.scissor(t.x, t.y, t.z, t.w),
                N.copy(t))
            },
            viewport: function(t) {
                !1 === z.equals(t) && (e.viewport(t.x, t.y, t.z, t.w),
                z.copy(t))
            },
            reset: function() {
                e.disable(3042),
                e.disable(2884),
                e.disable(2929),
                e.disable(32823),
                e.disable(3089),
                e.disable(2960),
                e.disable(32926),
                e.blendEquation(32774),
                e.blendFunc(1, 0),
                e.blendFuncSeparate(1, 0, 1, 0),
                e.colorMask(!0, !0, !0, !0),
                e.clearColor(0, 0, 0, 0),
                e.depthMask(!0),
                e.depthFunc(513),
                e.clearDepth(1),
                e.stencilMask(4294967295),
                e.stencilFunc(519, 0, 4294967295),
                e.stencilOp(7680, 7680, 7680),
                e.clearStencil(0),
                e.cullFace(1029),
                e.frontFace(2305),
                e.polygonOffset(0, 0),
                e.activeTexture(33984),
                e.bindFramebuffer(36160, null),
                !0 === r && (e.bindFramebuffer(36009, null),
                e.bindFramebuffer(36008, null)),
                e.useProgram(null),
                e.lineWidth(1),
                e.scissor(0, 0, e.canvas.width, e.canvas.height),
                e.viewport(0, 0, e.canvas.width, e.canvas.height),
                l = {},
                C = null,
                P = {},
                c = null,
                h = {},
                u = null,
                d = !1,
                p = null,
                m = null,
                f = null,
                g = null,
                v = null,
                x = null,
                y = null,
                _ = !1,
                M = null,
                b = null,
                w = null,
                S = null,
                T = null,
                N.set(0, 0, e.canvas.width, e.canvas.height),
                z.set(0, 0, e.canvas.width, e.canvas.height),
                s.reset(),
                a.reset(),
                o.reset()
            }
        }
    }
    function ns(t, e, n, i, h, _, M) {
        const b = h.isWebGL2
          , w = h.maxTextures
          , S = h.maxCubemapSize
          , T = h.maxTextureSize
          , E = h.maxSamples
          , L = new WeakMap;
        let R, C = !1;
        try {
            C = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1,1).getContext("2d")
        } catch (t) {}
        function P(t, e) {
            return C ? new OffscreenCanvas(t,e) : X("canvas")
        }
        function D(t, e, n, i) {
            let r = 1;
            if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)),
            r < 1 || !0 === e) {
                if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                    const i = e ? k : Math.floor
                      , s = i(r * t.width)
                      , a = i(r * t.height);
                    void 0 === R && (R = P(s, a));
                    const o = n ? P(s, a) : R;
                    return o.width = s,
                    o.height = a,
                    o.getContext("2d").drawImage(t, 0, 0, s, a),
                    console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + a + ")."),
                    o
                }
                return "data"in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."),
                t
            }
            return t
        }
        function I(t) {
            return V(t.width) && V(t.height)
        }
        function N(t, e) {
            return t.generateMipmaps && e && t.minFilter !== o && t.minFilter !== l
        }
        function z(e, n, r, s, a=1) {
            t.generateMipmap(e),
            i.get(n).__maxMipLevel = Math.log2(Math.max(r, s, a))
        }
        function O(n, i, r, s) {
            if (!1 === b)
                return i;
            if (null !== n) {
                if (void 0 !== t[n])
                    return t[n];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
            }
            let a = i;
            return 6403 === i && (5126 === r && (a = 33326),
            5131 === r && (a = 33325),
            5121 === r && (a = 33321)),
            6407 === i && (5126 === r && (a = 34837),
            5131 === r && (a = 34843),
            5121 === r && (a = 32849)),
            6408 === i && (5126 === r && (a = 34836),
            5131 === r && (a = 34842),
            5121 === r && (a = s === A ? 35907 : 32856)),
            33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a || e.get("EXT_color_buffer_float"),
            a
        }
        function B(t) {
            return t === o || 1004 === t || 1005 === t ? 9728 : 9729
        }
        function U(e) {
            const n = e.target;
            n.removeEventListener("dispose", U),
            function(e) {
                const n = i.get(e);
                void 0 !== n.__webglInit && (t.deleteTexture(n.__webglTexture),
                i.remove(e))
            }(n),
            n.isVideoTexture && L.delete(n),
            M.memory.textures--
        }
        function F(e) {
            const n = e.target;
            n.removeEventListener("dispose", F),
            function(e) {
                const n = e.texture
                  , r = i.get(e)
                  , s = i.get(n);
                if (e) {
                    if (void 0 !== s.__webglTexture && (t.deleteTexture(s.__webglTexture),
                    M.memory.textures--),
                    e.depthTexture && e.depthTexture.dispose(),
                    e.isWebGLCubeRenderTarget)
                        for (let e = 0; e < 6; e++)
                            t.deleteFramebuffer(r.__webglFramebuffer[e]),
                            r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
                    else
                        t.deleteFramebuffer(r.__webglFramebuffer),
                        r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer),
                        r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer),
                        r.__webglColorRenderbuffer && t.deleteRenderbuffer(r.__webglColorRenderbuffer),
                        r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
                    if (e.isWebGLMultipleRenderTargets)
                        for (let e = 0, r = n.length; e < r; e++) {
                            const r = i.get(n[e]);
                            r.__webglTexture && (t.deleteTexture(r.__webglTexture),
                            M.memory.textures--),
                            i.remove(n[e])
                        }
                    i.remove(n),
                    i.remove(e)
                }
            }(n)
        }
        let H = 0;
        function G(t, e) {
            const r = i.get(t);
            if (t.isVideoTexture && function(t) {
                const e = M.render.frame;
                L.get(t) !== e && (L.set(t, e),
                t.update())
            }(t),
            t.version > 0 && r.__version !== t.version) {
                const n = t.image;
                if (void 0 === n)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else {
                    if (!1 !== n.complete)
                        return void Z(r, t, e);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                }
            }
            n.activeTexture(33984 + e),
            n.bindTexture(3553, r.__webglTexture)
        }
        function W(e, r) {
            const s = i.get(e);
            e.version > 0 && s.__version !== e.version ? function(e, i, r) {
                if (6 !== i.image.length)
                    return;
                J(e, i),
                n.activeTexture(33984 + r),
                n.bindTexture(34067, e.__webglTexture),
                t.pixelStorei(37440, i.flipY),
                t.pixelStorei(37441, i.premultiplyAlpha),
                t.pixelStorei(3317, i.unpackAlignment),
                t.pixelStorei(37443, 0);
                const s = i && (i.isCompressedTexture || i.image[0].isCompressedTexture)
                  , a = i.image[0] && i.image[0].isDataTexture
                  , o = [];
                for (let t = 0; t < 6; t++)
                    o[t] = s || a ? a ? i.image[t].image : i.image[t] : D(i.image[t], !1, !0, S);
                const l = o[0]
                  , c = I(l) || b
                  , h = _.convert(i.format)
                  , u = _.convert(i.type)
                  , d = O(i.internalFormat, h, u, i.encoding);
                let p;
                if (Y(34067, i, c),
                s) {
                    for (let t = 0; t < 6; t++) {
                        p = o[t].mipmaps;
                        for (let e = 0; e < p.length; e++) {
                            const r = p[e];
                            i.format !== v && i.format !== g ? null !== h ? n.compressedTexImage2D(34069 + t, e, d, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + t, e, d, r.width, r.height, 0, h, u, r.data)
                        }
                    }
                    e.__maxMipLevel = p.length - 1
                } else {
                    p = i.mipmaps;
                    for (let t = 0; t < 6; t++)
                        if (a) {
                            n.texImage2D(34069 + t, 0, d, o[t].width, o[t].height, 0, h, u, o[t].data);
                            for (let e = 0; e < p.length; e++) {
                                const i = p[e].image[t].image;
                                n.texImage2D(34069 + t, e + 1, d, i.width, i.height, 0, h, u, i.data)
                            }
                        } else {
                            n.texImage2D(34069 + t, 0, d, h, u, o[t]);
                            for (let e = 0; e < p.length; e++) {
                                const i = p[e];
                                n.texImage2D(34069 + t, e + 1, d, h, u, i.image[t])
                            }
                        }
                    e.__maxMipLevel = p.length
                }
                N(i, c) && z(34067, i, l.width, l.height),
                e.__version = i.version,
                i.onUpdate && i.onUpdate(i)
            }(s, e, r) : (n.activeTexture(33984 + r),
            n.bindTexture(34067, s.__webglTexture))
        }
        const j = {
            [r]: 10497,
            [s]: 33071,
            [a]: 33648
        }
          , q = {
            [o]: 9728,
            1004: 9984,
            1005: 9986,
            [l]: 9729,
            1007: 9985,
            [c]: 9987
        };
        function Y(n, r, a) {
            if (a ? (t.texParameteri(n, 10242, j[r.wrapS]),
            t.texParameteri(n, 10243, j[r.wrapT]),
            32879 !== n && 35866 !== n || t.texParameteri(n, 32882, j[r.wrapR]),
            t.texParameteri(n, 10240, q[r.magFilter]),
            t.texParameteri(n, 10241, q[r.minFilter])) : (t.texParameteri(n, 10242, 33071),
            t.texParameteri(n, 10243, 33071),
            32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071),
            r.wrapS === s && r.wrapT === s || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
            t.texParameteri(n, 10240, B(r.magFilter)),
            t.texParameteri(n, 10241, B(r.minFilter)),
            r.minFilter !== o && r.minFilter !== l && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
            !0 === e.has("EXT_texture_filter_anisotropic")) {
                const s = e.get("EXT_texture_filter_anisotropic");
                if (r.type === p && !1 === e.has("OES_texture_float_linear"))
                    return;
                if (!1 === b && r.type === m && !1 === e.has("OES_texture_half_float_linear"))
                    return;
                (r.anisotropy > 1 || i.get(r).__currentAnisotropy) && (t.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(r.anisotropy, h.getMaxAnisotropy())),
                i.get(r).__currentAnisotropy = r.anisotropy)
            }
        }
        function J(e, n) {
            void 0 === e.__webglInit && (e.__webglInit = !0,
            n.addEventListener("dispose", U),
            e.__webglTexture = t.createTexture(),
            M.memory.textures++)
        }
        function Z(e, i, r) {
            let a = 3553;
            i.isDataTexture2DArray && (a = 35866),
            i.isDataTexture3D && (a = 32879),
            J(e, i),
            n.activeTexture(33984 + r),
            n.bindTexture(a, e.__webglTexture),
            t.pixelStorei(37440, i.flipY),
            t.pixelStorei(37441, i.premultiplyAlpha),
            t.pixelStorei(3317, i.unpackAlignment),
            t.pixelStorei(37443, 0);
            const c = function(t) {
                return !b && (t.wrapS !== s || t.wrapT !== s || t.minFilter !== o && t.minFilter !== l)
            }(i) && !1 === I(i.image)
              , h = D(i.image, c, !1, T)
              , m = I(h) || b
              , M = _.convert(i.format);
            let w, S = _.convert(i.type), E = O(i.internalFormat, M, S, i.encoding);
            Y(a, i, m);
            const A = i.mipmaps;
            if (i.isDepthTexture)
                E = 6402,
                b ? E = i.type === p ? 36012 : i.type === d ? 33190 : i.type === f ? 35056 : 33189 : i.type === p && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
                i.format === x && 6402 === E && i.type !== u && i.type !== d && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                i.type = u,
                S = _.convert(i.type)),
                i.format === y && 6402 === E && (E = 34041,
                i.type !== f && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                i.type = f,
                S = _.convert(i.type))),
                n.texImage2D(3553, 0, E, h.width, h.height, 0, M, S, null);
            else if (i.isDataTexture)
                if (A.length > 0 && m) {
                    for (let t = 0, e = A.length; t < e; t++)
                        w = A[t],
                        n.texImage2D(3553, t, E, w.width, w.height, 0, M, S, w.data);
                    i.generateMipmaps = !1,
                    e.__maxMipLevel = A.length - 1
                } else
                    n.texImage2D(3553, 0, E, h.width, h.height, 0, M, S, h.data),
                    e.__maxMipLevel = 0;
            else if (i.isCompressedTexture) {
                for (let t = 0, e = A.length; t < e; t++)
                    w = A[t],
                    i.format !== v && i.format !== g ? null !== M ? n.compressedTexImage2D(3553, t, E, w.width, w.height, 0, w.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, t, E, w.width, w.height, 0, M, S, w.data);
                e.__maxMipLevel = A.length - 1
            } else if (i.isDataTexture2DArray)
                n.texImage3D(35866, 0, E, h.width, h.height, h.depth, 0, M, S, h.data),
                e.__maxMipLevel = 0;
            else if (i.isDataTexture3D)
                n.texImage3D(32879, 0, E, h.width, h.height, h.depth, 0, M, S, h.data),
                e.__maxMipLevel = 0;
            else if (A.length > 0 && m) {
                for (let t = 0, e = A.length; t < e; t++)
                    w = A[t],
                    n.texImage2D(3553, t, E, M, S, w);
                i.generateMipmaps = !1,
                e.__maxMipLevel = A.length - 1
            } else
                n.texImage2D(3553, 0, E, M, S, h),
                e.__maxMipLevel = 0;
            N(i, m) && z(a, i, h.width, h.height),
            e.__version = i.version,
            i.onUpdate && i.onUpdate(i)
        }
        function Q(e, r, s, a, o) {
            const l = _.convert(s.format)
              , c = _.convert(s.type)
              , h = O(s.internalFormat, l, c, s.encoding);
            32879 === o || 35866 === o ? n.texImage3D(o, 0, h, r.width, r.height, r.depth, 0, l, c, null) : n.texImage2D(o, 0, h, r.width, r.height, 0, l, c, null),
            n.bindFramebuffer(36160, e),
            t.framebufferTexture2D(36160, a, o, i.get(s).__webglTexture, 0),
            n.bindFramebuffer(36160, null)
        }
        function K(e, n, i) {
            if (t.bindRenderbuffer(36161, e),
            n.depthBuffer && !n.stencilBuffer) {
                let r = 33189;
                if (i) {
                    const e = n.depthTexture;
                    e && e.isDepthTexture && (e.type === p ? r = 36012 : e.type === d && (r = 33190));
                    const i = $(n);
                    t.renderbufferStorageMultisample(36161, i, r, n.width, n.height)
                } else
                    t.renderbufferStorage(36161, r, n.width, n.height);
                t.framebufferRenderbuffer(36160, 36096, 36161, e)
            } else if (n.depthBuffer && n.stencilBuffer) {
                if (i) {
                    const e = $(n);
                    t.renderbufferStorageMultisample(36161, e, 35056, n.width, n.height)
                } else
                    t.renderbufferStorage(36161, 34041, n.width, n.height);
                t.framebufferRenderbuffer(36160, 33306, 36161, e)
            } else {
                const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture[0] : n.texture
                  , r = _.convert(e.format)
                  , s = _.convert(e.type)
                  , a = O(e.internalFormat, r, s, e.encoding);
                if (i) {
                    const e = $(n);
                    t.renderbufferStorageMultisample(36161, e, a, n.width, n.height)
                } else
                    t.renderbufferStorage(36161, a, n.width, n.height)
            }
            t.bindRenderbuffer(36161, null)
        }
        function $(t) {
            return b && t.isWebGLMultisampleRenderTarget ? Math.min(E, t.samples) : 0
        }
        let tt = !1
          , et = !1;
        this.allocateTextureUnit = function() {
            const t = H;
            return t >= w && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + w),
            H += 1,
            t
        }
        ,
        this.resetTextureUnits = function() {
            H = 0
        }
        ,
        this.setTexture2D = G,
        this.setTexture2DArray = function(t, e) {
            const r = i.get(t);
            t.version > 0 && r.__version !== t.version ? Z(r, t, e) : (n.activeTexture(33984 + e),
            n.bindTexture(35866, r.__webglTexture))
        }
        ,
        this.setTexture3D = function(t, e) {
            const r = i.get(t);
            t.version > 0 && r.__version !== t.version ? Z(r, t, e) : (n.activeTexture(33984 + e),
            n.bindTexture(32879, r.__webglTexture))
        }
        ,
        this.setTextureCube = W,
        this.setupRenderTarget = function(e) {
            const r = e.texture
              , s = i.get(e)
              , a = i.get(r);
            e.addEventListener("dispose", F),
            !0 !== e.isWebGLMultipleRenderTargets && (a.__webglTexture = t.createTexture(),
            a.__version = r.version,
            M.memory.textures++);
            const o = !0 === e.isWebGLCubeRenderTarget
              , l = !0 === e.isWebGLMultipleRenderTargets
              , c = !0 === e.isWebGLMultisampleRenderTarget
              , u = r.isDataTexture3D || r.isDataTexture2DArray
              , d = I(e) || b;
            if (!b || r.format !== g || r.type !== p && r.type !== m || (r.format = v,
            console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),
            o) {
                s.__webglFramebuffer = [];
                for (let e = 0; e < 6; e++)
                    s.__webglFramebuffer[e] = t.createFramebuffer()
            } else if (s.__webglFramebuffer = t.createFramebuffer(),
            l)
                if (h.drawBuffers) {
                    const n = e.texture;
                    for (let e = 0, r = n.length; e < r; e++) {
                        const r = i.get(n[e]);
                        void 0 === r.__webglTexture && (r.__webglTexture = t.createTexture(),
                        M.memory.textures++)
                    }
                } else
                    console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
            else if (c)
                if (b) {
                    s.__webglMultisampledFramebuffer = t.createFramebuffer(),
                    s.__webglColorRenderbuffer = t.createRenderbuffer(),
                    t.bindRenderbuffer(36161, s.__webglColorRenderbuffer);
                    const i = _.convert(r.format)
                      , a = _.convert(r.type)
                      , o = O(r.internalFormat, i, a, r.encoding)
                      , l = $(e);
                    t.renderbufferStorageMultisample(36161, l, o, e.width, e.height),
                    n.bindFramebuffer(36160, s.__webglMultisampledFramebuffer),
                    t.framebufferRenderbuffer(36160, 36064, 36161, s.__webglColorRenderbuffer),
                    t.bindRenderbuffer(36161, null),
                    e.depthBuffer && (s.__webglDepthRenderbuffer = t.createRenderbuffer(),
                    K(s.__webglDepthRenderbuffer, e, !0)),
                    n.bindFramebuffer(36160, null)
                } else
                    console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
            if (o) {
                n.bindTexture(34067, a.__webglTexture),
                Y(34067, r, d);
                for (let t = 0; t < 6; t++)
                    Q(s.__webglFramebuffer[t], e, r, 36064, 34069 + t);
                N(r, d) && z(34067, r, e.width, e.height),
                n.unbindTexture()
            } else if (l) {
                const t = e.texture;
                for (let r = 0, a = t.length; r < a; r++) {
                    const a = t[r]
                      , o = i.get(a);
                    n.bindTexture(3553, o.__webglTexture),
                    Y(3553, a, d),
                    Q(s.__webglFramebuffer, e, a, 36064 + r, 3553),
                    N(a, d) && z(3553, a, e.width, e.height)
                }
                n.unbindTexture()
            } else {
                let t = 3553;
                u && (b ? t = r.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),
                n.bindTexture(t, a.__webglTexture),
                Y(t, r, d),
                Q(s.__webglFramebuffer, e, r, 36064, t),
                N(r, d) && z(t, r, e.width, e.height, e.depth),
                n.unbindTexture()
            }
            e.depthBuffer && function(e) {
                const r = i.get(e)
                  , s = !0 === e.isWebGLCubeRenderTarget;
                if (e.depthTexture) {
                    if (s)
                        throw new Error("target.depthTexture not supported in Cube render targets");
                    !function(e, r) {
                        if (r && r.isWebGLCubeRenderTarget)
                            throw new Error("Depth Texture with cube render targets is not supported");
                        if (n.bindFramebuffer(36160, e),
                        !r.depthTexture || !r.depthTexture.isDepthTexture)
                            throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                        i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width,
                        r.depthTexture.image.height = r.height,
                        r.depthTexture.needsUpdate = !0),
                        G(r.depthTexture, 0);
                        const s = i.get(r.depthTexture).__webglTexture;
                        if (r.depthTexture.format === x)
                            t.framebufferTexture2D(36160, 36096, 3553, s, 0);
                        else {
                            if (r.depthTexture.format !== y)
                                throw new Error("Unknown depthTexture format");
                            t.framebufferTexture2D(36160, 33306, 3553, s, 0)
                        }
                    }(r.__webglFramebuffer, e)
                } else if (s) {
                    r.__webglDepthbuffer = [];
                    for (let i = 0; i < 6; i++)
                        n.bindFramebuffer(36160, r.__webglFramebuffer[i]),
                        r.__webglDepthbuffer[i] = t.createRenderbuffer(),
                        K(r.__webglDepthbuffer[i], e, !1)
                } else
                    n.bindFramebuffer(36160, r.__webglFramebuffer),
                    r.__webglDepthbuffer = t.createRenderbuffer(),
                    K(r.__webglDepthbuffer, e, !1);
                n.bindFramebuffer(36160, null)
            }(e)
        }
        ,
        this.updateRenderTargetMipmap = function(t) {
            const e = I(t) || b
              , r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];
            for (let s = 0, a = r.length; s < a; s++) {
                const a = r[s];
                if (N(a, e)) {
                    const e = t.isWebGLCubeRenderTarget ? 34067 : 3553
                      , r = i.get(a).__webglTexture;
                    n.bindTexture(e, r),
                    z(e, a, t.width, t.height),
                    n.unbindTexture()
                }
            }
        }
        ,
        this.updateMultisampleRenderTarget = function(e) {
            if (e.isWebGLMultisampleRenderTarget)
                if (b) {
                    const r = e.width
                      , s = e.height;
                    let a = 16384;
                    e.depthBuffer && (a |= 256),
                    e.stencilBuffer && (a |= 1024);
                    const o = i.get(e);
                    n.bindFramebuffer(36008, o.__webglMultisampledFramebuffer),
                    n.bindFramebuffer(36009, o.__webglFramebuffer),
                    t.blitFramebuffer(0, 0, r, s, 0, 0, r, s, a, 9728),
                    n.bindFramebuffer(36008, null),
                    n.bindFramebuffer(36009, o.__webglMultisampledFramebuffer)
                } else
                    console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
        }
        ,
        this.safeSetTexture2D = function(t, e) {
            t && t.isWebGLRenderTarget && (!1 === tt && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),
            tt = !0),
            t = t.texture),
            G(t, e)
        }
        ,
        this.safeSetTextureCube = function(t, e) {
            t && t.isWebGLCubeRenderTarget && (!1 === et && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
            et = !0),
            t = t.texture),
            W(t, e)
        }
    }
    function is(t, e, n) {
        const i = n.isWebGL2;
        return {
            convert: function(t) {
                let n;
                if (t === h)
                    return 5121;
                if (1017 === t)
                    return 32819;
                if (1018 === t)
                    return 32820;
                if (1019 === t)
                    return 33635;
                if (1010 === t)
                    return 5120;
                if (1011 === t)
                    return 5122;
                if (t === u)
                    return 5123;
                if (1013 === t)
                    return 5124;
                if (t === d)
                    return 5125;
                if (t === p)
                    return 5126;
                if (t === m)
                    return i ? 5131 : (n = e.get("OES_texture_half_float"),
                    null !== n ? n.HALF_FLOAT_OES : null);
                if (1021 === t)
                    return 6406;
                if (t === g)
                    return 6407;
                if (t === v)
                    return 6408;
                if (1024 === t)
                    return 6409;
                if (1025 === t)
                    return 6410;
                if (t === x)
                    return 6402;
                if (t === y)
                    return 34041;
                if (1028 === t)
                    return 6403;
                if (1029 === t)
                    return 36244;
                if (1030 === t)
                    return 33319;
                if (1031 === t)
                    return 33320;
                if (1032 === t)
                    return 36248;
                if (1033 === t)
                    return 36249;
                if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
                    if (n = e.get("WEBGL_compressed_texture_s3tc"),
                    null === n)
                        return null;
                    if (33776 === t)
                        return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (33777 === t)
                        return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (33778 === t)
                        return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (33779 === t)
                        return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
                    if (n = e.get("WEBGL_compressed_texture_pvrtc"),
                    null === n)
                        return null;
                    if (35840 === t)
                        return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (35841 === t)
                        return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (35842 === t)
                        return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (35843 === t)
                        return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (36196 === t)
                    return n = e.get("WEBGL_compressed_texture_etc1"),
                    null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
                if ((37492 === t || 37496 === t) && (n = e.get("WEBGL_compressed_texture_etc"),
                null !== n)) {
                    if (37492 === t)
                        return n.COMPRESSED_RGB8_ETC2;
                    if (37496 === t)
                        return n.COMPRESSED_RGBA8_ETC2_EAC
                }
                return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? (n = e.get("WEBGL_compressed_texture_astc"),
                null !== n ? t : null) : 36492 === t ? (n = e.get("EXT_texture_compression_bptc"),
                null !== n ? t : null) : t === f ? i ? 34042 : (n = e.get("WEBGL_depth_texture"),
                null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0
            }
        }
    }
    $r.prototype.isMeshDistanceMaterial = !0;
    class rs extends mn {
        constructor(t=[]) {
            super(),
            this.cameras = t
        }
    }
    rs.prototype.isArrayCamera = !0;
    class ss extends ae {
        constructor() {
            super(),
            this.type = "Group"
        }
    }
    ss.prototype.isGroup = !0;
    const as = {
        type: "move"
    };
    class os {
        constructor() {
            this._targetRay = null,
            this._grip = null,
            this._hand = null
        }
        getHandSpace() {
            return null === this._hand && (this._hand = new ss,
            this._hand.matrixAutoUpdate = !1,
            this._hand.visible = !1,
            this._hand.joints = {},
            this._hand.inputState = {
                pinching: !1
            }),
            this._hand
        }
        getTargetRaySpace() {
            return null === this._targetRay && (this._targetRay = new ss,
            this._targetRay.matrixAutoUpdate = !1,
            this._targetRay.visible = !1,
            this._targetRay.hasLinearVelocity = !1,
            this._targetRay.linearVelocity = new rt,
            this._targetRay.hasAngularVelocity = !1,
            this._targetRay.angularVelocity = new rt),
            this._targetRay
        }
        getGripSpace() {
            return null === this._grip && (this._grip = new ss,
            this._grip.matrixAutoUpdate = !1,
            this._grip.visible = !1,
            this._grip.hasLinearVelocity = !1,
            this._grip.linearVelocity = new rt,
            this._grip.hasAngularVelocity = !1,
            this._grip.angularVelocity = new rt),
            this._grip
        }
        dispatchEvent(t) {
            return null !== this._targetRay && this._targetRay.dispatchEvent(t),
            null !== this._grip && this._grip.dispatchEvent(t),
            null !== this._hand && this._hand.dispatchEvent(t),
            this
        }
        disconnect(t) {
            return this.dispatchEvent({
                type: "disconnected",
                data: t
            }),
            null !== this._targetRay && (this._targetRay.visible = !1),
            null !== this._grip && (this._grip.visible = !1),
            null !== this._hand && (this._hand.visible = !1),
            this
        }
        update(t, e, n) {
            let i = null
              , r = null
              , s = null;
            const a = this._targetRay
              , o = this._grip
              , l = this._hand;
            if (t && "visible-blurred" !== e.session.visibilityState)
                if (null !== a && (i = e.getPose(t.targetRaySpace, n),
                null !== i && (a.matrix.fromArray(i.transform.matrix),
                a.matrix.decompose(a.position, a.rotation, a.scale),
                i.linearVelocity ? (a.hasLinearVelocity = !0,
                a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1,
                i.angularVelocity ? (a.hasAngularVelocity = !0,
                a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1,
                this.dispatchEvent(as))),
                l && t.hand) {
                    s = !0;
                    for (const i of t.hand.values()) {
                        const t = e.getJointPose(i, n);
                        if (void 0 === l.joints[i.jointName]) {
                            const t = new ss;
                            t.matrixAutoUpdate = !1,
                            t.visible = !1,
                            l.joints[i.jointName] = t,
                            l.add(t)
                        }
                        const r = l.joints[i.jointName];
                        null !== t && (r.matrix.fromArray(t.transform.matrix),
                        r.matrix.decompose(r.position, r.rotation, r.scale),
                        r.jointRadius = t.radius),
                        r.visible = null !== t
                    }
                    const i = l.joints["index-finger-tip"]
                      , r = l.joints["thumb-tip"]
                      , a = i.position.distanceTo(r.position)
                      , o = .02
                      , c = .005;
                    l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1,
                    this.dispatchEvent({
                        type: "pinchend",
                        handedness: t.handedness,
                        target: this
                    })) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0,
                    this.dispatchEvent({
                        type: "pinchstart",
                        handedness: t.handedness,
                        target: this
                    }))
                } else
                    null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n),
                    null !== r && (o.matrix.fromArray(r.transform.matrix),
                    o.matrix.decompose(o.position, o.rotation, o.scale),
                    r.linearVelocity ? (o.hasLinearVelocity = !0,
                    o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1,
                    r.angularVelocity ? (o.hasAngularVelocity = !0,
                    o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
            return null !== a && (a.visible = null !== i),
            null !== o && (o.visible = null !== r),
            null !== l && (l.visible = null !== s),
            this
        }
    }
    class ls extends N {
        constructor(t, e) {
            super();
            const n = this
              , i = t.state;
            let r = null
              , s = 1
              , a = null
              , o = "local-floor"
              , l = null
              , c = null
              , h = null
              , u = null
              , d = null
              , p = !1
              , m = null
              , f = null
              , g = null
              , v = null
              , x = null
              , y = null;
            const _ = []
              , M = new Map
              , b = new mn;
            b.layers.enable(1),
            b.viewport = new tt;
            const w = new mn;
            w.layers.enable(2),
            w.viewport = new tt;
            const S = [b, w]
              , T = new rs;
            T.layers.enable(1),
            T.layers.enable(2);
            let E = null
              , A = null;
            function L(t) {
                const e = M.get(t.inputSource);
                e && e.dispatchEvent({
                    type: t.type,
                    data: t.inputSource
                })
            }
            function R() {
                M.forEach((function(t, e) {
                    t.disconnect(e)
                }
                )),
                M.clear(),
                E = null,
                A = null,
                i.bindXRFramebuffer(null),
                t.setRenderTarget(t.getRenderTarget()),
                h && e.deleteFramebuffer(h),
                m && e.deleteFramebuffer(m),
                f && e.deleteRenderbuffer(f),
                g && e.deleteRenderbuffer(g),
                h = null,
                m = null,
                f = null,
                g = null,
                d = null,
                u = null,
                c = null,
                r = null,
                z.stop(),
                n.isPresenting = !1,
                n.dispatchEvent({
                    type: "sessionend"
                })
            }
            function C(t) {
                const e = r.inputSources;
                for (let t = 0; t < _.length; t++)
                    M.set(e[t], _[t]);
                for (let e = 0; e < t.removed.length; e++) {
                    const n = t.removed[e]
                      , i = M.get(n);
                    i && (i.dispatchEvent({
                        type: "disconnected",
                        data: n
                    }),
                    M.delete(n))
                }
                for (let e = 0; e < t.added.length; e++) {
                    const n = t.added[e]
                      , i = M.get(n);
                    i && i.dispatchEvent({
                        type: "connected",
                        data: n
                    })
                }
            }
            this.cameraAutoUpdate = !0,
            this.enabled = !1,
            this.isPresenting = !1,
            this.getController = function(t) {
                let e = _[t];
                return void 0 === e && (e = new os,
                _[t] = e),
                e.getTargetRaySpace()
            }
            ,
            this.getControllerGrip = function(t) {
                let e = _[t];
                return void 0 === e && (e = new os,
                _[t] = e),
                e.getGripSpace()
            }
            ,
            this.getHand = function(t) {
                let e = _[t];
                return void 0 === e && (e = new os,
                _[t] = e),
                e.getHandSpace()
            }
            ,
            this.setFramebufferScaleFactor = function(t) {
                s = t,
                !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
            }
            ,
            this.setReferenceSpaceType = function(t) {
                o = t,
                !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
            }
            ,
            this.getReferenceSpace = function() {
                return a
            }
            ,
            this.getBaseLayer = function() {
                return null !== u ? u : d
            }
            ,
            this.getBinding = function() {
                return c
            }
            ,
            this.getFrame = function() {
                return v
            }
            ,
            this.getSession = function() {
                return r
            }
            ,
            this.setSession = async function(t) {
                if (r = t,
                null !== r) {
                    r.addEventListener("select", L),
                    r.addEventListener("selectstart", L),
                    r.addEventListener("selectend", L),
                    r.addEventListener("squeeze", L),
                    r.addEventListener("squeezestart", L),
                    r.addEventListener("squeezeend", L),
                    r.addEventListener("end", R),
                    r.addEventListener("inputsourceschange", C);
                    const t = e.getContextAttributes();
                    if (!0 !== t.xrCompatible && await e.makeXRCompatible(),
                    void 0 === r.renderState.layers) {
                        const n = {
                            antialias: t.antialias,
                            alpha: t.alpha,
                            depth: t.depth,
                            stencil: t.stencil,
                            framebufferScaleFactor: s
                        };
                        d = new XRWebGLLayer(r,e,n),
                        r.updateRenderState({
                            baseLayer: d
                        })
                    } else if (e instanceof WebGLRenderingContext) {
                        const n = {
                            antialias: !0,
                            alpha: t.alpha,
                            depth: t.depth,
                            stencil: t.stencil,
                            framebufferScaleFactor: s
                        };
                        d = new XRWebGLLayer(r,e,n),
                        r.updateRenderState({
                            layers: [d]
                        })
                    } else {
                        p = t.antialias;
                        let n = null;
                        t.depth && (y = 256,
                        t.stencil && (y |= 1024),
                        x = t.stencil ? 33306 : 36096,
                        n = t.stencil ? 35056 : 33190);
                        const a = {
                            colorFormat: t.alpha ? 32856 : 32849,
                            depthFormat: n,
                            scaleFactor: s
                        };
                        c = new XRWebGLBinding(r,e),
                        u = c.createProjectionLayer(a),
                        h = e.createFramebuffer(),
                        r.updateRenderState({
                            layers: [u]
                        }),
                        p && (m = e.createFramebuffer(),
                        f = e.createRenderbuffer(),
                        e.bindRenderbuffer(36161, f),
                        e.renderbufferStorageMultisample(36161, 4, 32856, u.textureWidth, u.textureHeight),
                        i.bindFramebuffer(36160, m),
                        e.framebufferRenderbuffer(36160, 36064, 36161, f),
                        e.bindRenderbuffer(36161, null),
                        null !== n && (g = e.createRenderbuffer(),
                        e.bindRenderbuffer(36161, g),
                        e.renderbufferStorageMultisample(36161, 4, n, u.textureWidth, u.textureHeight),
                        e.framebufferRenderbuffer(36160, x, 36161, g),
                        e.bindRenderbuffer(36161, null)),
                        i.bindFramebuffer(36160, null))
                    }
                    a = await r.requestReferenceSpace(o),
                    z.setContext(r),
                    z.start(),
                    n.isPresenting = !0,
                    n.dispatchEvent({
                        type: "sessionstart"
                    })
                }
            }
            ;
            const P = new rt
              , D = new rt;
            function I(t, e) {
                null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
                t.matrixWorldInverse.copy(t.matrixWorld).invert()
            }
            this.updateCamera = function(t) {
                if (null === r)
                    return;
                T.near = w.near = b.near = t.near,
                T.far = w.far = b.far = t.far,
                E === T.near && A === T.far || (r.updateRenderState({
                    depthNear: T.near,
                    depthFar: T.far
                }),
                E = T.near,
                A = T.far);
                const e = t.parent
                  , n = T.cameras;
                I(T, e);
                for (let t = 0; t < n.length; t++)
                    I(n[t], e);
                T.matrixWorld.decompose(T.position, T.quaternion, T.scale),
                t.position.copy(T.position),
                t.quaternion.copy(T.quaternion),
                t.scale.copy(T.scale),
                t.matrix.copy(T.matrix),
                t.matrixWorld.copy(T.matrixWorld);
                const i = t.children;
                for (let t = 0, e = i.length; t < e; t++)
                    i[t].updateMatrixWorld(!0);
                2 === n.length ? function(t, e, n) {
                    P.setFromMatrixPosition(e.matrixWorld),
                    D.setFromMatrixPosition(n.matrixWorld);
                    const i = P.distanceTo(D)
                      , r = e.projectionMatrix.elements
                      , s = n.projectionMatrix.elements
                      , a = r[14] / (r[10] - 1)
                      , o = r[14] / (r[10] + 1)
                      , l = (r[9] + 1) / r[5]
                      , c = (r[9] - 1) / r[5]
                      , h = (r[8] - 1) / r[0]
                      , u = (s[8] + 1) / s[0]
                      , d = a * h
                      , p = a * u
                      , m = i / (-h + u)
                      , f = m * -h;
                    e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                    t.translateX(f),
                    t.translateZ(m),
                    t.matrixWorld.compose(t.position, t.quaternion, t.scale),
                    t.matrixWorldInverse.copy(t.matrixWorld).invert();
                    const g = a + m
                      , v = o + m
                      , x = d - f
                      , y = p + (i - f)
                      , _ = l * o / v * g
                      , M = c * o / v * g;
                    t.projectionMatrix.makePerspective(x, y, _, M, g, v)
                }(T, b, w) : T.projectionMatrix.copy(b.projectionMatrix)
            }
            ,
            this.getCamera = function() {
                return T
            }
            ,
            this.getFoveation = function() {
                return null !== u ? u.fixedFoveation : null !== d ? d.fixedFoveation : void 0
            }
            ,
            this.setFoveation = function(t) {
                null !== u && (u.fixedFoveation = t),
                null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = t)
            }
            ;
            let N = null;
            const z = new En;
            z.setAnimationLoop((function(t, n) {
                if (l = n.getViewerPose(a),
                v = n,
                null !== l) {
                    const t = l.views;
                    null !== d && i.bindXRFramebuffer(d.framebuffer);
                    let n = !1;
                    t.length !== T.cameras.length && (T.cameras.length = 0,
                    n = !0);
                    for (let r = 0; r < t.length; r++) {
                        const s = t[r];
                        let a = null;
                        if (null !== d)
                            a = d.getViewport(s);
                        else {
                            const t = c.getViewSubImage(u, s);
                            i.bindXRFramebuffer(h),
                            void 0 !== t.depthStencilTexture && e.framebufferTexture2D(36160, x, 3553, t.depthStencilTexture, 0),
                            e.framebufferTexture2D(36160, 36064, 3553, t.colorTexture, 0),
                            a = t.viewport
                        }
                        const o = S[r];
                        o.matrix.fromArray(s.transform.matrix),
                        o.projectionMatrix.fromArray(s.projectionMatrix),
                        o.viewport.set(a.x, a.y, a.width, a.height),
                        0 === r && T.matrix.copy(o.matrix),
                        !0 === n && T.cameras.push(o)
                    }
                    p && (i.bindXRFramebuffer(m),
                    null !== y && e.clear(y))
                }
                const s = r.inputSources;
                for (let t = 0; t < _.length; t++) {
                    const e = _[t]
                      , i = s[t];
                    e.update(i, n, a)
                }
                if (N && N(t, n),
                p) {
                    const t = u.textureWidth
                      , n = u.textureHeight;
                    i.bindFramebuffer(36008, m),
                    i.bindFramebuffer(36009, h),
                    e.invalidateFramebuffer(36008, [x]),
                    e.invalidateFramebuffer(36009, [x]),
                    e.blitFramebuffer(0, 0, t, n, 0, 0, t, n, 16384, 9728),
                    e.invalidateFramebuffer(36008, [36064]),
                    i.bindFramebuffer(36008, null),
                    i.bindFramebuffer(36009, null),
                    i.bindFramebuffer(36160, m)
                }
                v = null
            }
            )),
            this.setAnimationLoop = function(t) {
                N = t
            }
            ,
            this.dispose = function() {}
        }
    }
    function cs(t) {
        function e(e, n) {
            e.opacity.value = n.opacity,
            n.color && e.diffuse.value.copy(n.color),
            n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
            n.map && (e.map.value = n.map),
            n.alphaMap && (e.alphaMap.value = n.alphaMap),
            n.specularMap && (e.specularMap.value = n.specularMap),
            n.alphaTest > 0 && (e.alphaTest.value = n.alphaTest);
            const i = t.get(n).envMap;
            if (i) {
                e.envMap.value = i,
                e.flipEnvMap.value = i.isCubeTexture && !1 === i.isRenderTargetTexture ? -1 : 1,
                e.reflectivity.value = n.reflectivity,
                e.ior.value = n.ior,
                e.refractionRatio.value = n.refractionRatio;
                const r = t.get(i).__maxMipLevel;
                void 0 !== r && (e.maxMipLevel.value = r)
            }
            let r, s;
            n.lightMap && (e.lightMap.value = n.lightMap,
            e.lightMapIntensity.value = n.lightMapIntensity),
            n.aoMap && (e.aoMap.value = n.aoMap,
            e.aoMapIntensity.value = n.aoMapIntensity),
            n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap ? r = n.clearcoatRoughnessMap : n.specularIntensityMap ? r = n.specularIntensityMap : n.specularColorMap ? r = n.specularColorMap : n.transmissionMap ? r = n.transmissionMap : n.thicknessMap ? r = n.thicknessMap : n.sheenColorMap ? r = n.sheenColorMap : n.sheenRoughnessMap && (r = n.sheenRoughnessMap),
            void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture),
            !0 === r.matrixAutoUpdate && r.updateMatrix(),
            e.uvTransform.value.copy(r.matrix)),
            n.aoMap ? s = n.aoMap : n.lightMap && (s = n.lightMap),
            void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture),
            !0 === s.matrixAutoUpdate && s.updateMatrix(),
            e.uv2Transform.value.copy(s.matrix))
        }
        function n(e, n) {
            e.roughness.value = n.roughness,
            e.metalness.value = n.metalness,
            n.roughnessMap && (e.roughnessMap.value = n.roughnessMap),
            n.metalnessMap && (e.metalnessMap.value = n.metalnessMap),
            n.emissiveMap && (e.emissiveMap.value = n.emissiveMap),
            n.bumpMap && (e.bumpMap.value = n.bumpMap,
            e.bumpScale.value = n.bumpScale,
            1 === n.side && (e.bumpScale.value *= -1)),
            n.normalMap && (e.normalMap.value = n.normalMap,
            e.normalScale.value.copy(n.normalScale),
            1 === n.side && e.normalScale.value.negate()),
            n.displacementMap && (e.displacementMap.value = n.displacementMap,
            e.displacementScale.value = n.displacementScale,
            e.displacementBias.value = n.displacementBias),
            t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity)
        }
        return {
            refreshFogUniforms: function(t, e) {
                t.fogColor.value.copy(e.color),
                e.isFog ? (t.fogNear.value = e.near,
                t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
            },
            refreshMaterialUniforms: function(t, i, r, s, a) {
                i.isMeshBasicMaterial ? e(t, i) : i.isMeshLambertMaterial ? (e(t, i),
                function(t, e) {
                    e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
                }(t, i)) : i.isMeshToonMaterial ? (e(t, i),
                function(t, e) {
                    e.gradientMap && (t.gradientMap.value = e.gradientMap),
                    e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
                    e.bumpMap && (t.bumpMap.value = e.bumpMap,
                    t.bumpScale.value = e.bumpScale,
                    1 === e.side && (t.bumpScale.value *= -1)),
                    e.normalMap && (t.normalMap.value = e.normalMap,
                    t.normalScale.value.copy(e.normalScale),
                    1 === e.side && t.normalScale.value.negate()),
                    e.displacementMap && (t.displacementMap.value = e.displacementMap,
                    t.displacementScale.value = e.displacementScale,
                    t.displacementBias.value = e.displacementBias)
                }(t, i)) : i.isMeshPhongMaterial ? (e(t, i),
                function(t, e) {
                    t.specular.value.copy(e.specular),
                    t.shininess.value = Math.max(e.shininess, 1e-4),
                    e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
                    e.bumpMap && (t.bumpMap.value = e.bumpMap,
                    t.bumpScale.value = e.bumpScale,
                    1 === e.side && (t.bumpScale.value *= -1)),
                    e.normalMap && (t.normalMap.value = e.normalMap,
                    t.normalScale.value.copy(e.normalScale),
                    1 === e.side && t.normalScale.value.negate()),
                    e.displacementMap && (t.displacementMap.value = e.displacementMap,
                    t.displacementScale.value = e.displacementScale,
                    t.displacementBias.value = e.displacementBias)
                }(t, i)) : i.isMeshStandardMaterial ? (e(t, i),
                i.isMeshPhysicalMaterial ? function(t, e, i) {
                    n(t, e),
                    t.ior.value = e.ior,
                    e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen),
                    t.sheenRoughness.value = e.sheenRoughness,
                    e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap),
                    e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap)),
                    e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat,
                    t.clearcoatRoughness.value = e.clearcoatRoughness,
                    e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap),
                    e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap),
                    e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
                    t.clearcoatNormalMap.value = e.clearcoatNormalMap,
                    1 === e.side && t.clearcoatNormalScale.value.negate())),
                    e.transmission > 0 && (t.transmission.value = e.transmission,
                    t.transmissionSamplerMap.value = i.texture,
                    t.transmissionSamplerSize.value.set(i.width, i.height),
                    e.transmissionMap && (t.transmissionMap.value = e.transmissionMap),
                    t.thickness.value = e.thickness,
                    e.thicknessMap && (t.thicknessMap.value = e.thicknessMap),
                    t.attenuationDistance.value = e.attenuationDistance,
                    t.attenuationColor.value.copy(e.attenuationColor)),
                    t.specularIntensity.value = e.specularIntensity,
                    t.specularColor.value.copy(e.specularColor),
                    e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap),
                    e.specularColorMap && (t.specularColorMap.value = e.specularColorMap)
                }(t, i, a) : n(t, i)) : i.isMeshMatcapMaterial ? (e(t, i),
                function(t, e) {
                    e.matcap && (t.matcap.value = e.matcap),
                    e.bumpMap && (t.bumpMap.value = e.bumpMap,
                    t.bumpScale.value = e.bumpScale,
                    1 === e.side && (t.bumpScale.value *= -1)),
                    e.normalMap && (t.normalMap.value = e.normalMap,
                    t.normalScale.value.copy(e.normalScale),
                    1 === e.side && t.normalScale.value.negate()),
                    e.displacementMap && (t.displacementMap.value = e.displacementMap,
                    t.displacementScale.value = e.displacementScale,
                    t.displacementBias.value = e.displacementBias)
                }(t, i)) : i.isMeshDepthMaterial ? (e(t, i),
                function(t, e) {
                    e.displacementMap && (t.displacementMap.value = e.displacementMap,
                    t.displacementScale.value = e.displacementScale,
                    t.displacementBias.value = e.displacementBias)
                }(t, i)) : i.isMeshDistanceMaterial ? (e(t, i),
                function(t, e) {
                    e.displacementMap && (t.displacementMap.value = e.displacementMap,
                    t.displacementScale.value = e.displacementScale,
                    t.displacementBias.value = e.displacementBias),
                    t.referencePosition.value.copy(e.referencePosition),
                    t.nearDistance.value = e.nearDistance,
                    t.farDistance.value = e.farDistance
                }(t, i)) : i.isMeshNormalMaterial ? (e(t, i),
                function(t, e) {
                    e.bumpMap && (t.bumpMap.value = e.bumpMap,
                    t.bumpScale.value = e.bumpScale,
                    1 === e.side && (t.bumpScale.value *= -1)),
                    e.normalMap && (t.normalMap.value = e.normalMap,
                    t.normalScale.value.copy(e.normalScale),
                    1 === e.side && t.normalScale.value.negate()),
                    e.displacementMap && (t.displacementMap.value = e.displacementMap,
                    t.displacementScale.value = e.displacementScale,
                    t.displacementBias.value = e.displacementBias)
                }(t, i)) : i.isLineBasicMaterial ? (function(t, e) {
                    t.diffuse.value.copy(e.color),
                    t.opacity.value = e.opacity
                }(t, i),
                i.isLineDashedMaterial && function(t, e) {
                    t.dashSize.value = e.dashSize,
                    t.totalSize.value = e.dashSize + e.gapSize,
                    t.scale.value = e.scale
                }(t, i)) : i.isPointsMaterial ? function(t, e, n, i) {
                    let r;
                    t.diffuse.value.copy(e.color),
                    t.opacity.value = e.opacity,
                    t.size.value = e.size * n,
                    t.scale.value = .5 * i,
                    e.map && (t.map.value = e.map),
                    e.alphaMap && (t.alphaMap.value = e.alphaMap),
                    e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest),
                    e.map ? r = e.map : e.alphaMap && (r = e.alphaMap),
                    void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                    t.uvTransform.value.copy(r.matrix))
                }(t, i, r, s) : i.isSpriteMaterial ? function(t, e) {
                    let n;
                    t.diffuse.value.copy(e.color),
                    t.opacity.value = e.opacity,
                    t.rotation.value = e.rotation,
                    e.map && (t.map.value = e.map),
                    e.alphaMap && (t.alphaMap.value = e.alphaMap),
                    e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest),
                    e.map ? n = e.map : e.alphaMap && (n = e.alphaMap),
                    void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                    t.uvTransform.value.copy(n.matrix))
                }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color),
                t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
            }
        }
    }
    function hs(t={}) {
        const e = void 0 !== t.canvas ? t.canvas : function() {
            const t = X("canvas");
            return t.style.display = "block",
            t
        }()
          , n = void 0 !== t.context ? t.context : null
          , i = void 0 !== t.alpha && t.alpha
          , r = void 0 === t.depth || t.depth
          , a = void 0 === t.stencil || t.stencil
          , l = void 0 !== t.antialias && t.antialias
          , u = void 0 === t.premultipliedAlpha || t.premultipliedAlpha
          , d = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer
          , f = void 0 !== t.powerPreference ? t.powerPreference : "default"
          , g = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
        let x = null
          , y = null;
        const _ = []
          , M = [];
        this.domElement = e,
        this.debug = {
            checkShaderErrors: !0
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.gammaFactor = 2,
        this.outputEncoding = E,
        this.physicallyCorrectLights = !1,
        this.toneMapping = 0,
        this.toneMappingExposure = 1;
        const b = this;
        let w = !1
          , S = 0
          , T = 0
          , A = null
          , L = -1
          , R = null;
        const C = new tt
          , P = new tt;
        let D = null
          , I = e.width
          , N = e.height
          , z = 1
          , O = null
          , B = null;
        const U = new tt(0,0,I,N)
          , F = new tt(0,0,I,N);
        let H = !1;
        const G = []
          , V = new Tn;
        let k = !1
          , W = !1
          , j = null;
        const q = new zt
          , Y = new rt
          , J = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        function Z() {
            return null === A ? z : 1
        }
        let Q, K, $, it, st, at, ot, lt, ct, ht, ut, dt, pt, mt, ft, gt, vt, xt, yt, _t, Mt, bt, wt, St = n;
        function Tt(t, n) {
            for (let i = 0; i < t.length; i++) {
                const r = t[i]
                  , s = e.getContext(r, n);
                if (null !== s)
                    return s
            }
            return null
        }
        try {
            const t = {
                alpha: i,
                depth: r,
                stencil: a,
                antialias: l,
                premultipliedAlpha: u,
                preserveDrawingBuffer: d,
                powerPreference: f,
                failIfMajorPerformanceCaveat: g
            };
            if (e.addEventListener("webglcontextlost", Lt, !1),
            e.addEventListener("webglcontextrestored", Rt, !1),
            null === St) {
                const e = ["webgl2", "webgl", "experimental-webgl"];
                if (!0 === b.isWebGL1Renderer && e.shift(),
                St = Tt(e, t),
                null === St)
                    throw Tt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
            }
            void 0 === St.getShaderPrecisionFormat && (St.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }
            )
        } catch (t) {
            throw console.error("THREE.WebGLRenderer: " + t.message),
            t
        }
        function Et() {
            Q = new oi(St),
            K = new zn(St,Q,t),
            Q.init(K),
            bt = new is(St,Q,K),
            $ = new es(St,Q,K),
            G[0] = 1029,
            it = new hi(St),
            st = new Gr,
            at = new ns(St,Q,$,st,K,bt,it),
            ot = new Bn(b),
            lt = new ai(b),
            ct = new An(St,K),
            wt = new In(St,Q,ct,K),
            ht = new li(St,ct,it,wt),
            ut = new gi(St,ht,ct,it),
            yt = new fi(St,K,at),
            gt = new On(st),
            dt = new Hr(b,ot,lt,Q,K,wt,gt),
            pt = new cs(st),
            mt = new jr(st),
            ft = new Qr(Q,K),
            xt = new Dn(b,ot,$,ut,u),
            vt = new ts(b,ut,K),
            _t = new Nn(St,Q,it,K),
            Mt = new ci(St,Q,it,K),
            it.programs = dt.programs,
            b.capabilities = K,
            b.extensions = Q,
            b.properties = st,
            b.renderLists = mt,
            b.shadowMap = vt,
            b.state = $,
            b.info = it
        }
        Et();
        const At = new ls(b,St);
        function Lt(t) {
            t.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            w = !0
        }
        function Rt() {
            console.log("THREE.WebGLRenderer: Context Restored."),
            w = !1;
            const t = it.autoReset
              , e = vt.enabled
              , n = vt.autoUpdate
              , i = vt.needsUpdate
              , r = vt.type;
            Et(),
            it.autoReset = t,
            vt.enabled = e,
            vt.autoUpdate = n,
            vt.needsUpdate = i,
            vt.type = r
        }
        function Ct(t) {
            const e = t.target;
            e.removeEventListener("dispose", Ct),
            function(t) {
                (function(t) {
                    const e = st.get(t).programs;
                    void 0 !== e && e.forEach((function(t) {
                        dt.releaseProgram(t)
                    }
                    ))
                }
                )(t),
                st.remove(t)
            }(e)
        }
        this.xr = At,
        this.getContext = function() {
            return St
        }
        ,
        this.getContextAttributes = function() {
            return St.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            const t = Q.get("WEBGL_lose_context");
            t && t.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            const t = Q.get("WEBGL_lose_context");
            t && t.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return z
        }
        ,
        this.setPixelRatio = function(t) {
            void 0 !== t && (z = t,
            this.setSize(I, N, !1))
        }
        ,
        this.getSize = function(t) {
            return t.set(I, N)
        }
        ,
        this.setSize = function(t, n, i) {
            At.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (I = t,
            N = n,
            e.width = Math.floor(t * z),
            e.height = Math.floor(n * z),
            !1 !== i && (e.style.width = t + "px",
            e.style.height = n + "px"),
            this.setViewport(0, 0, t, n))
        }
        ,
        this.getDrawingBufferSize = function(t) {
            return t.set(I * z, N * z).floor()
        }
        ,
        this.setDrawingBufferSize = function(t, n, i) {
            I = t,
            N = n,
            z = i,
            e.width = Math.floor(t * i),
            e.height = Math.floor(n * i),
            this.setViewport(0, 0, t, n)
        }
        ,
        this.getCurrentViewport = function(t) {
            return t.copy(C)
        }
        ,
        this.getViewport = function(t) {
            return t.copy(U)
        }
        ,
        this.setViewport = function(t, e, n, i) {
            t.isVector4 ? U.set(t.x, t.y, t.z, t.w) : U.set(t, e, n, i),
            $.viewport(C.copy(U).multiplyScalar(z).floor())
        }
        ,
        this.getScissor = function(t) {
            return t.copy(F)
        }
        ,
        this.setScissor = function(t, e, n, i) {
            t.isVector4 ? F.set(t.x, t.y, t.z, t.w) : F.set(t, e, n, i),
            $.scissor(P.copy(F).multiplyScalar(z).floor())
        }
        ,
        this.getScissorTest = function() {
            return H
        }
        ,
        this.setScissorTest = function(t) {
            $.setScissorTest(H = t)
        }
        ,
        this.setOpaqueSort = function(t) {
            O = t
        }
        ,
        this.setTransparentSort = function(t) {
            B = t
        }
        ,
        this.getClearColor = function(t) {
            return t.copy(xt.getClearColor())
        }
        ,
        this.setClearColor = function() {
            xt.setClearColor.apply(xt, arguments)
        }
        ,
        this.getClearAlpha = function() {
            return xt.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            xt.setClearAlpha.apply(xt, arguments)
        }
        ,
        this.clear = function(t, e, n) {
            let i = 0;
            (void 0 === t || t) && (i |= 16384),
            (void 0 === e || e) && (i |= 256),
            (void 0 === n || n) && (i |= 1024),
            St.clear(i)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            e.removeEventListener("webglcontextlost", Lt, !1),
            e.removeEventListener("webglcontextrestored", Rt, !1),
            mt.dispose(),
            ft.dispose(),
            st.dispose(),
            ot.dispose(),
            lt.dispose(),
            ut.dispose(),
            wt.dispose(),
            At.dispose(),
            At.removeEventListener("sessionstart", Dt),
            At.removeEventListener("sessionend", It),
            j && (j.dispose(),
            j = null),
            Nt.stop()
        }
        ,
        this.renderBufferDirect = function(t, e, n, i, r, s) {
            null === e && (e = J);
            const a = r.isMesh && r.matrixWorld.determinant() < 0
              , o = function(t, e, n, i, r) {
                !0 !== e.isScene && (e = J),
                at.resetTextureUnits();
                const s = e.fog
                  , a = i.isMeshStandardMaterial ? e.environment : null
                  , o = null === A ? b.outputEncoding : A.texture.encoding
                  , l = (i.isMeshStandardMaterial ? lt : ot).get(i.envMap || a)
                  , c = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize
                  , h = !!i.normalMap && !!n.attributes.tangent
                  , u = !!n.morphAttributes.position
                  , d = !!n.morphAttributes.normal
                  , p = n.morphAttributes.position ? n.morphAttributes.position.length : 0
                  , m = st.get(i)
                  , f = y.state.lights;
                if (!0 === k && (!0 === W || t !== R)) {
                    const e = t === R && i.id === L;
                    gt.setState(i, t, e)
                }
                let g = !1;
                i.version === m.__version ? m.needsLights && m.lightsStateVersion !== f.state.version || m.outputEncoding !== o || r.isInstancedMesh && !1 === m.instancing ? g = !0 : r.isInstancedMesh || !0 !== m.instancing ? r.isSkinnedMesh && !1 === m.skinning ? g = !0 : r.isSkinnedMesh || !0 !== m.skinning ? m.envMap !== l || i.fog && m.fog !== s ? g = !0 : void 0 === m.numClippingPlanes || m.numClippingPlanes === gt.numPlanes && m.numIntersection === gt.numIntersection ? (m.vertexAlphas !== c || m.vertexTangents !== h || m.morphTargets !== u || m.morphNormals !== d || !0 === K.isWebGL2 && m.morphTargetsCount !== p) && (g = !0) : g = !0 : g = !0 : g = !0 : (g = !0,
                m.__version = i.version);
                let v = m.currentProgram;
                !0 === g && (v = Ht(i, e, r));
                let x = !1
                  , _ = !1
                  , M = !1;
                const w = v.getUniforms()
                  , S = m.uniforms;
                if ($.useProgram(v.program) && (x = !0,
                _ = !0,
                M = !0),
                i.id !== L && (L = i.id,
                _ = !0),
                x || R !== t) {
                    if (w.setValue(St, "projectionMatrix", t.projectionMatrix),
                    K.logarithmicDepthBuffer && w.setValue(St, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)),
                    R !== t && (R = t,
                    _ = !0,
                    M = !0),
                    i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
                        const e = w.map.cameraPosition;
                        void 0 !== e && e.setValue(St, Y.setFromMatrixPosition(t.matrixWorld))
                    }
                    (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && w.setValue(St, "isOrthographic", !0 === t.isOrthographicCamera),
                    (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.isShadowMaterial || r.isSkinnedMesh) && w.setValue(St, "viewMatrix", t.matrixWorldInverse)
                }
                if (r.isSkinnedMesh) {
                    w.setOptional(St, r, "bindMatrix"),
                    w.setOptional(St, r, "bindMatrixInverse");
                    const t = r.skeleton;
                    t && (K.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(),
                    w.setValue(St, "boneTexture", t.boneTexture, at),
                    w.setValue(St, "boneTextureSize", t.boneTextureSize)) : w.setOptional(St, t, "boneMatrices"))
                }
                var T, E;
                return !n || void 0 === n.morphAttributes.position && void 0 === n.morphAttributes.normal || yt.update(r, n, i, v),
                (_ || m.receiveShadow !== r.receiveShadow) && (m.receiveShadow = r.receiveShadow,
                w.setValue(St, "receiveShadow", r.receiveShadow)),
                _ && (w.setValue(St, "toneMappingExposure", b.toneMappingExposure),
                m.needsLights && (E = M,
                (T = S).ambientLightColor.needsUpdate = E,
                T.lightProbe.needsUpdate = E,
                T.directionalLights.needsUpdate = E,
                T.directionalLightShadows.needsUpdate = E,
                T.pointLights.needsUpdate = E,
                T.pointLightShadows.needsUpdate = E,
                T.spotLights.needsUpdate = E,
                T.spotLightShadows.needsUpdate = E,
                T.rectAreaLights.needsUpdate = E,
                T.hemisphereLights.needsUpdate = E),
                s && i.fog && pt.refreshFogUniforms(S, s),
                pt.refreshMaterialUniforms(S, i, z, N, j),
                yr.upload(St, m.uniformsList, S, at)),
                i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (yr.upload(St, m.uniformsList, S, at),
                i.uniformsNeedUpdate = !1),
                i.isSpriteMaterial && w.setValue(St, "center", r.center),
                w.setValue(St, "modelViewMatrix", r.modelViewMatrix),
                w.setValue(St, "normalMatrix", r.normalMatrix),
                w.setValue(St, "modelMatrix", r.matrixWorld),
                v
            }(t, e, n, i, r);
            $.setMaterial(i, a);
            let l = n.index;
            const c = n.attributes.position;
            if (null === l) {
                if (void 0 === c || 0 === c.count)
                    return
            } else if (0 === l.count)
                return;
            let h, u = 1;
            !0 === i.wireframe && (l = ht.getWireframeAttribute(n),
            u = 2),
            wt.setup(r, i, o, n, l);
            let d = _t;
            null !== l && (h = ct.get(l),
            d = Mt,
            d.setIndex(h));
            const p = null !== l ? l.count : c.count
              , m = n.drawRange.start * u
              , f = n.drawRange.count * u
              , g = null !== s ? s.start * u : 0
              , v = null !== s ? s.count * u : 1 / 0
              , x = Math.max(m, g)
              , _ = Math.min(p, m + f, g + v) - 1
              , M = Math.max(0, _ - x + 1);
            if (0 !== M) {
                if (r.isMesh)
                    !0 === i.wireframe ? ($.setLineWidth(i.wireframeLinewidth * Z()),
                    d.setMode(1)) : d.setMode(4);
                else if (r.isLine) {
                    let t = i.linewidth;
                    void 0 === t && (t = 1),
                    $.setLineWidth(t * Z()),
                    r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
                } else
                    r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
                if (r.isInstancedMesh)
                    d.renderInstances(x, M, r.count);
                else if (n.isInstancedBufferGeometry) {
                    const t = Math.min(n.instanceCount, n._maxInstanceCount);
                    d.renderInstances(x, M, t)
                } else
                    d.render(x, M)
            }
        }
        ,
        this.compile = function(t, e) {
            y = ft.get(t),
            y.init(),
            M.push(y),
            t.traverseVisible((function(t) {
                t.isLight && t.layers.test(e.layers) && (y.pushLight(t),
                t.castShadow && y.pushShadow(t))
            }
            )),
            y.setupLights(b.physicallyCorrectLights),
            t.traverse((function(e) {
                const n = e.material;
                if (n)
                    if (Array.isArray(n))
                        for (let i = 0; i < n.length; i++)
                            Ht(n[i], t, e);
                    else
                        Ht(n, t, e)
            }
            )),
            M.pop(),
            y = null
        }
        ;
        let Pt = null;
        function Dt() {
            Nt.stop()
        }
        function It() {
            Nt.start()
        }
        const Nt = new En;
        function Ot(t, e, n, i) {
            if (!1 === t.visible)
                return;
            if (t.layers.test(e.layers))
                if (t.isGroup)
                    n = t.renderOrder;
                else if (t.isLOD)
                    !0 === t.autoUpdate && t.update(e);
                else if (t.isLight)
                    y.pushLight(t),
                    t.castShadow && y.pushShadow(t);
                else if (t.isSprite) {
                    if (!t.frustumCulled || V.intersectsSprite(t)) {
                        i && Y.setFromMatrixPosition(t.matrixWorld).applyMatrix4(q);
                        const e = ut.update(t)
                          , r = t.material;
                        r.visible && x.push(t, e, r, n, Y.z, null)
                    }
                } else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== it.render.frame && (t.skeleton.update(),
                t.skeleton.frame = it.render.frame),
                !t.frustumCulled || V.intersectsObject(t))) {
                    i && Y.setFromMatrixPosition(t.matrixWorld).applyMatrix4(q);
                    const e = ut.update(t)
                      , r = t.material;
                    if (Array.isArray(r)) {
                        const i = e.groups;
                        for (let s = 0, a = i.length; s < a; s++) {
                            const a = i[s]
                              , o = r[a.materialIndex];
                            o && o.visible && x.push(t, e, o, n, Y.z, a)
                        }
                    } else
                        r.visible && x.push(t, e, r, n, Y.z, null)
                }
            const r = t.children;
            for (let t = 0, s = r.length; t < s; t++)
                Ot(r[t], e, n, i)
        }
        function Bt(t, e, n, i) {
            const r = t.opaque
              , a = t.transmissive
              , u = t.transparent;
            y.setupLightsView(n),
            a.length > 0 && function(t, e, n) {
                if (null === j) {
                    const t = !0 === l && !0 === K.isWebGL2;
                    j = new (t ? nt : et)(1024,1024,{
                        generateMipmaps: !0,
                        type: null !== bt.convert(m) ? m : h,
                        minFilter: c,
                        magFilter: o,
                        wrapS: s,
                        wrapT: s
                    })
                }
                const i = b.getRenderTarget();
                b.setRenderTarget(j),
                b.clear();
                const r = b.toneMapping;
                b.toneMapping = 0,
                Ut(t, e, n),
                b.toneMapping = r,
                at.updateMultisampleRenderTarget(j),
                at.updateRenderTargetMipmap(j),
                b.setRenderTarget(i)
            }(r, e, n),
            i && $.viewport(C.copy(i)),
            r.length > 0 && Ut(r, e, n),
            a.length > 0 && Ut(a, e, n),
            u.length > 0 && Ut(u, e, n)
        }
        function Ut(t, e, n) {
            const i = !0 === e.isScene ? e.overrideMaterial : null;
            for (let r = 0, s = t.length; r < s; r++) {
                const s = t[r]
                  , a = s.object
                  , o = s.geometry
                  , l = null === i ? s.material : i
                  , c = s.group;
                a.layers.test(n.layers) && Ft(a, e, n, o, l, c)
            }
        }
        function Ft(t, e, n, i, r, s) {
            t.onBeforeRender(b, e, n, i, r, s),
            t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
            t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
            r.onBeforeRender(b, e, n, i, t, s),
            !0 === r.transparent && 2 === r.side ? (r.side = 1,
            r.needsUpdate = !0,
            b.renderBufferDirect(n, e, i, r, t, s),
            r.side = 0,
            r.needsUpdate = !0,
            b.renderBufferDirect(n, e, i, r, t, s),
            r.side = 2) : b.renderBufferDirect(n, e, i, r, t, s),
            t.onAfterRender(b, e, n, i, r, s)
        }
        function Ht(t, e, n) {
            !0 !== e.isScene && (e = J);
            const i = st.get(t)
              , r = y.state.lights
              , s = y.state.shadowsArray
              , a = r.state.version
              , o = dt.getParameters(t, r.state, s, e, n)
              , l = dt.getProgramCacheKey(o);
            let c = i.programs;
            i.environment = t.isMeshStandardMaterial ? e.environment : null,
            i.fog = e.fog,
            i.envMap = (t.isMeshStandardMaterial ? lt : ot).get(t.envMap || i.environment),
            void 0 === c && (t.addEventListener("dispose", Ct),
            c = new Map,
            i.programs = c);
            let h = c.get(l);
            if (void 0 !== h) {
                if (i.currentProgram === h && i.lightsStateVersion === a)
                    return Gt(t, o),
                    h
            } else
                o.uniforms = dt.getUniforms(t),
                t.onBuild(n, o, b),
                t.onBeforeCompile(o, b),
                h = dt.acquireProgram(o, l),
                c.set(l, h),
                i.uniforms = o.uniforms;
            const u = i.uniforms;
            (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = gt.uniform),
            Gt(t, o),
            i.needsLights = function(t) {
                return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
            }(t),
            i.lightsStateVersion = a,
            i.needsLights && (u.ambientLightColor.value = r.state.ambient,
            u.lightProbe.value = r.state.probe,
            u.directionalLights.value = r.state.directional,
            u.directionalLightShadows.value = r.state.directionalShadow,
            u.spotLights.value = r.state.spot,
            u.spotLightShadows.value = r.state.spotShadow,
            u.rectAreaLights.value = r.state.rectArea,
            u.ltc_1.value = r.state.rectAreaLTC1,
            u.ltc_2.value = r.state.rectAreaLTC2,
            u.pointLights.value = r.state.point,
            u.pointLightShadows.value = r.state.pointShadow,
            u.hemisphereLights.value = r.state.hemi,
            u.directionalShadowMap.value = r.state.directionalShadowMap,
            u.directionalShadowMatrix.value = r.state.directionalShadowMatrix,
            u.spotShadowMap.value = r.state.spotShadowMap,
            u.spotShadowMatrix.value = r.state.spotShadowMatrix,
            u.pointShadowMap.value = r.state.pointShadowMap,
            u.pointShadowMatrix.value = r.state.pointShadowMatrix);
            const d = h.getUniforms()
              , p = yr.seqWithValue(d.seq, u);
            return i.currentProgram = h,
            i.uniformsList = p,
            h
        }
        function Gt(t, e) {
            const n = st.get(t);
            n.outputEncoding = e.outputEncoding,
            n.instancing = e.instancing,
            n.skinning = e.skinning,
            n.morphTargets = e.morphTargets,
            n.morphNormals = e.morphNormals,
            n.morphTargetsCount = e.morphTargetsCount,
            n.numClippingPlanes = e.numClippingPlanes,
            n.numIntersection = e.numClipIntersection,
            n.vertexAlphas = e.vertexAlphas,
            n.vertexTangents = e.vertexTangents
        }
        Nt.setAnimationLoop((function(t) {
            Pt && Pt(t)
        }
        )),
        "undefined" != typeof window && Nt.setContext(window),
        this.setAnimationLoop = function(t) {
            Pt = t,
            At.setAnimationLoop(t),
            null === t ? Nt.stop() : Nt.start()
        }
        ,
        At.addEventListener("sessionstart", Dt),
        At.addEventListener("sessionend", It),
        this.render = function(t, e) {
            if (void 0 !== e && !0 !== e.isCamera)
                return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            if (!0 === w)
                return;
            !0 === t.autoUpdate && t.updateMatrixWorld(),
            null === e.parent && e.updateMatrixWorld(),
            !0 === At.enabled && !0 === At.isPresenting && (!0 === At.cameraAutoUpdate && At.updateCamera(e),
            e = At.getCamera()),
            !0 === t.isScene && t.onBeforeRender(b, t, e, A),
            y = ft.get(t, M.length),
            y.init(),
            M.push(y),
            q.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
            V.setFromProjectionMatrix(q),
            W = this.localClippingEnabled,
            k = gt.init(this.clippingPlanes, W, e),
            x = mt.get(t, _.length),
            x.init(),
            _.push(x),
            Ot(t, e, 0, b.sortObjects),
            x.finish(),
            !0 === b.sortObjects && x.sort(O, B),
            !0 === k && gt.beginShadows();
            const n = y.state.shadowsArray;
            if (vt.render(n, t, e),
            !0 === k && gt.endShadows(),
            !0 === this.info.autoReset && this.info.reset(),
            xt.render(x, t),
            y.setupLights(b.physicallyCorrectLights),
            e.isArrayCamera) {
                const n = e.cameras;
                for (let e = 0, i = n.length; e < i; e++) {
                    const i = n[e];
                    Bt(x, t, i, i.viewport)
                }
            } else
                Bt(x, t, e);
            null !== A && (at.updateMultisampleRenderTarget(A),
            at.updateRenderTargetMipmap(A)),
            !0 === t.isScene && t.onAfterRender(b, t, e),
            $.buffers.depth.setTest(!0),
            $.buffers.depth.setMask(!0),
            $.buffers.color.setMask(!0),
            $.setPolygonOffset(!1),
            wt.resetDefaultState(),
            L = -1,
            R = null,
            M.pop(),
            y = M.length > 0 ? M[M.length - 1] : null,
            _.pop(),
            x = _.length > 0 ? _[_.length - 1] : null
        }
        ,
        this.getActiveCubeFace = function() {
            return S
        }
        ,
        this.getActiveMipmapLevel = function() {
            return T
        }
        ,
        this.getRenderTarget = function() {
            return A
        }
        ,
        this.setRenderTarget = function(t, e=0, n=0) {
            A = t,
            S = e,
            T = n,
            t && void 0 === st.get(t).__webglFramebuffer && at.setupRenderTarget(t);
            let i = null
              , r = !1
              , s = !1;
            if (t) {
                const n = t.texture;
                (n.isDataTexture3D || n.isDataTexture2DArray) && (s = !0);
                const a = st.get(t).__webglFramebuffer;
                t.isWebGLCubeRenderTarget ? (i = a[e],
                r = !0) : i = t.isWebGLMultisampleRenderTarget ? st.get(t).__webglMultisampledFramebuffer : a,
                C.copy(t.viewport),
                P.copy(t.scissor),
                D = t.scissorTest
            } else
                C.copy(U).multiplyScalar(z).floor(),
                P.copy(F).multiplyScalar(z).floor(),
                D = H;
            if ($.bindFramebuffer(36160, i) && K.drawBuffers) {
                let e = !1;
                if (t)
                    if (t.isWebGLMultipleRenderTargets) {
                        const n = t.texture;
                        if (G.length !== n.length || 36064 !== G[0]) {
                            for (let t = 0, e = n.length; t < e; t++)
                                G[t] = 36064 + t;
                            G.length = n.length,
                            e = !0
                        }
                    } else
                        1 === G.length && 36064 === G[0] || (G[0] = 36064,
                        G.length = 1,
                        e = !0);
                else
                    1 === G.length && 1029 === G[0] || (G[0] = 1029,
                    G.length = 1,
                    e = !0);
                e && (K.isWebGL2 ? St.drawBuffers(G) : Q.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))
            }
            if ($.viewport(C),
            $.scissor(P),
            $.setScissorTest(D),
            r) {
                const i = st.get(t.texture);
                St.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n)
            } else if (s) {
                const i = st.get(t.texture)
                  , r = e || 0;
                St.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r)
            }
            L = -1
        }
        ,
        this.readRenderTargetPixels = function(t, e, n, i, r, s, a) {
            if (!t || !t.isWebGLRenderTarget)
                return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let o = st.get(t).__webglFramebuffer;
            if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]),
            o) {
                $.bindFramebuffer(36160, o);
                try {
                    const a = t.texture
                      , o = a.format
                      , l = a.type;
                    if (o !== v && bt.convert(o) !== St.getParameter(35739))
                        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    const c = l === m && (Q.has("EXT_color_buffer_half_float") || K.isWebGL2 && Q.has("EXT_color_buffer_float"));
                    if (!(l === h || bt.convert(l) === St.getParameter(35738) || l === p && (K.isWebGL2 || Q.has("OES_texture_float") || Q.has("WEBGL_color_buffer_float")) || c))
                        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    36053 === St.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && St.readPixels(e, n, i, r, bt.convert(o), bt.convert(l), s) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                } finally {
                    const t = null !== A ? st.get(A).__webglFramebuffer : null;
                    $.bindFramebuffer(36160, t)
                }
            }
        }
        ,
        this.copyFramebufferToTexture = function(t, e, n=0) {
            const i = Math.pow(2, -n)
              , r = Math.floor(e.image.width * i)
              , s = Math.floor(e.image.height * i);
            let a = bt.convert(e.format);
            K.isWebGL2 && (6407 === a && (a = 32849),
            6408 === a && (a = 32856)),
            at.setTexture2D(e, 0),
            St.copyTexImage2D(3553, n, a, t.x, t.y, r, s, 0),
            $.unbindTexture()
        }
        ,
        this.copyTextureToTexture = function(t, e, n, i=0) {
            const r = e.image.width
              , s = e.image.height
              , a = bt.convert(n.format)
              , o = bt.convert(n.type);
            at.setTexture2D(n, 0),
            St.pixelStorei(37440, n.flipY),
            St.pixelStorei(37441, n.premultiplyAlpha),
            St.pixelStorei(3317, n.unpackAlignment),
            e.isDataTexture ? St.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? St.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : St.texSubImage2D(3553, i, t.x, t.y, a, o, e.image),
            0 === i && n.generateMipmaps && St.generateMipmap(3553),
            $.unbindTexture()
        }
        ,
        this.copyTextureToTexture3D = function(t, e, n, i, r=0) {
            if (b.isWebGL1Renderer)
                return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            const s = t.max.x - t.min.x + 1
              , a = t.max.y - t.min.y + 1
              , o = t.max.z - t.min.z + 1
              , l = bt.convert(i.format)
              , c = bt.convert(i.type);
            let h;
            if (i.isDataTexture3D)
                at.setTexture3D(i, 0),
                h = 32879;
            else {
                if (!i.isDataTexture2DArray)
                    return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                at.setTexture2DArray(i, 0),
                h = 35866
            }
            St.pixelStorei(37440, i.flipY),
            St.pixelStorei(37441, i.premultiplyAlpha),
            St.pixelStorei(3317, i.unpackAlignment);
            const u = St.getParameter(3314)
              , d = St.getParameter(32878)
              , p = St.getParameter(3316)
              , m = St.getParameter(3315)
              , f = St.getParameter(32877)
              , g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
            St.pixelStorei(3314, g.width),
            St.pixelStorei(32878, g.height),
            St.pixelStorei(3316, t.min.x),
            St.pixelStorei(3315, t.min.y),
            St.pixelStorei(32877, t.min.z),
            n.isDataTexture || n.isDataTexture3D ? St.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g.data) : n.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),
            St.compressedTexSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, g.data)) : St.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g),
            St.pixelStorei(3314, u),
            St.pixelStorei(32878, d),
            St.pixelStorei(3316, p),
            St.pixelStorei(3315, m),
            St.pixelStorei(32877, f),
            0 === r && i.generateMipmaps && St.generateMipmap(h),
            $.unbindTexture()
        }
        ,
        this.initTexture = function(t) {
            at.setTexture2D(t, 0),
            $.unbindTexture()
        }
        ,
        this.resetState = function() {
            S = 0,
            T = 0,
            A = null,
            $.reset(),
            wt.reset()
        }
        ,
        "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    hs.prototype.isWebGLRenderer = !0,
    class extends hs {
    }
    .prototype.isWebGL1Renderer = !0;
    class us {
        constructor(t, e=25e-5) {
            this.name = "",
            this.color = new Ee(t),
            this.density = e
        }
        clone() {
            return new us(this.color,this.density)
        }
        toJSON() {
            return {
                type: "FogExp2",
                color: this.color.getHex(),
                density: this.density
            }
        }
    }
    us.prototype.isFogExp2 = !0;
    class ds {
        constructor(t, e=1, n=1e3) {
            this.name = "",
            this.color = new Ee(t),
            this.near = e,
            this.far = n
        }
        clone() {
            return new ds(this.color,this.near,this.far)
        }
        toJSON() {
            return {
                type: "Fog",
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            }
        }
    }
    ds.prototype.isFog = !0;
    class ps extends ae {
        constructor() {
            super(),
            this.type = "Scene",
            this.background = null,
            this.environment = null,
            this.fog = null,
            this.overrideMaterial = null,
            this.autoUpdate = !0,
            "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
                detail: this
            }))
        }
        copy(t, e) {
            return super.copy(t, e),
            null !== t.background && (this.background = t.background.clone()),
            null !== t.environment && (this.environment = t.environment.clone()),
            null !== t.fog && (this.fog = t.fog.clone()),
            null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
            this.autoUpdate = t.autoUpdate,
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return null !== this.fog && (e.object.fog = this.fog.toJSON()),
            e
        }
    }
    ps.prototype.isScene = !0;
    class ms {
        constructor(t, e) {
            this.array = t,
            this.stride = e,
            this.count = void 0 !== t ? t.length / e : 0,
            this.usage = P,
            this.updateRange = {
                offset: 0,
                count: -1
            },
            this.version = 0,
            this.uuid = F()
        }
        onUploadCallback() {}
        set needsUpdate(t) {
            !0 === t && this.version++
        }
        setUsage(t) {
            return this.usage = t,
            this
        }
        copy(t) {
            return this.array = new t.array.constructor(t.array),
            this.count = t.count,
            this.stride = t.stride,
            this.usage = t.usage,
            this
        }
        copyAt(t, e, n) {
            t *= this.stride,
            n *= e.stride;
            for (let i = 0, r = this.stride; i < r; i++)
                this.array[t + i] = e.array[n + i];
            return this
        }
        set(t, e=0) {
            return this.array.set(t, e),
            this
        }
        clone(t) {
            void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
            void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = F()),
            void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
            const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid])
              , n = new this.constructor(e,this.stride);
            return n.setUsage(this.usage),
            n
        }
        onUpload(t) {
            return this.onUploadCallback = t,
            this
        }
        toJSON(t) {
            return void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
            void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = F()),
            void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))),
            {
                uuid: this.uuid,
                buffer: this.array.buffer._uuid,
                type: this.array.constructor.name,
                stride: this.stride
            }
        }
    }
    ms.prototype.isInterleavedBuffer = !0;
    const fs = new rt;
    class gs {
        constructor(t, e, n, i=!1) {
            this.name = "",
            this.data = t,
            this.itemSize = e,
            this.offset = n,
            this.normalized = !0 === i
        }
        get count() {
            return this.data.count
        }
        get array() {
            return this.data.array
        }
        set needsUpdate(t) {
            this.data.needsUpdate = t
        }
        applyMatrix4(t) {
            for (let e = 0, n = this.data.count; e < n; e++)
                fs.x = this.getX(e),
                fs.y = this.getY(e),
                fs.z = this.getZ(e),
                fs.applyMatrix4(t),
                this.setXYZ(e, fs.x, fs.y, fs.z);
            return this
        }
        applyNormalMatrix(t) {
            for (let e = 0, n = this.count; e < n; e++)
                fs.x = this.getX(e),
                fs.y = this.getY(e),
                fs.z = this.getZ(e),
                fs.applyNormalMatrix(t),
                this.setXYZ(e, fs.x, fs.y, fs.z);
            return this
        }
        transformDirection(t) {
            for (let e = 0, n = this.count; e < n; e++)
                fs.x = this.getX(e),
                fs.y = this.getY(e),
                fs.z = this.getZ(e),
                fs.transformDirection(t),
                this.setXYZ(e, fs.x, fs.y, fs.z);
            return this
        }
        setX(t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e,
            this
        }
        setY(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e,
            this
        }
        setZ(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e,
            this
        }
        setW(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e,
            this
        }
        getX(t) {
            return this.data.array[t * this.data.stride + this.offset]
        }
        getY(t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        }
        getZ(t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        }
        getW(t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        }
        setXY(t, e, n) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = n,
            this
        }
        setXYZ(t, e, n, i) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = n,
            this.data.array[t + 2] = i,
            this
        }
        setXYZW(t, e, n, i, r) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = n,
            this.data.array[t + 2] = i,
            this.data.array[t + 3] = r,
            this
        }
        clone(t) {
            if (void 0 === t) {
                console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
                const t = [];
                for (let e = 0; e < this.count; e++) {
                    const n = e * this.data.stride + this.offset;
                    for (let e = 0; e < this.itemSize; e++)
                        t.push(this.data.array[n + e])
                }
                return new Ce(new this.array.constructor(t),this.itemSize,this.normalized)
            }
            return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
            void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
            new gs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)
        }
        toJSON(t) {
            if (void 0 === t) {
                console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
                const t = [];
                for (let e = 0; e < this.count; e++) {
                    const n = e * this.data.stride + this.offset;
                    for (let e = 0; e < this.itemSize; e++)
                        t.push(this.data.array[n + e])
                }
                return {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: t,
                    normalized: this.normalized
                }
            }
            return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
            void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
            {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            }
        }
    }
    gs.prototype.isInterleavedBufferAttribute = !0;
    class vs extends ye {
        constructor(t) {
            super(),
            this.type = "SpriteMaterial",
            this.color = new Ee(16777215),
            this.map = null,
            this.alphaMap = null,
            this.rotation = 0,
            this.sizeAttenuation = !0,
            this.transparent = !0,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.map = t.map,
            this.alphaMap = t.alphaMap,
            this.rotation = t.rotation,
            this.sizeAttenuation = t.sizeAttenuation,
            this
        }
    }
    let xs;
    vs.prototype.isSpriteMaterial = !0;
    const ys = new rt
      , _s = new rt
      , Ms = new rt
      , bs = new W
      , ws = new W
      , Ss = new zt
      , Ts = new rt
      , Es = new rt
      , As = new rt
      , Ls = new W
      , Rs = new W
      , Cs = new W;
    function Ps(t, e, n, i, r, s) {
        bs.subVectors(t, n).addScalar(.5).multiply(i),
        void 0 !== r ? (ws.x = s * bs.x - r * bs.y,
        ws.y = r * bs.x + s * bs.y) : ws.copy(bs),
        t.copy(e),
        t.x += ws.x,
        t.y += ws.y,
        t.applyMatrix4(Ss)
    }
    (class extends ae {
        constructor(t) {
            if (super(),
            this.type = "Sprite",
            void 0 === xs) {
                xs = new Ge;
                const t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1])
                  , e = new ms(t,5);
                xs.setIndex([0, 1, 2, 0, 2, 3]),
                xs.setAttribute("position", new gs(e,3,0,!1)),
                xs.setAttribute("uv", new gs(e,2,3,!1))
            }
            this.geometry = xs,
            this.material = void 0 !== t ? t : new vs,
            this.center = new W(.5,.5)
        }
        raycast(t, e) {
            null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),
            _s.setFromMatrixScale(this.matrixWorld),
            Ss.copy(t.camera.matrixWorld),
            this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld),
            Ms.setFromMatrixPosition(this.modelViewMatrix),
            t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && _s.multiplyScalar(-Ms.z);
            const n = this.material.rotation;
            let i, r;
            0 !== n && (r = Math.cos(n),
            i = Math.sin(n));
            const s = this.center;
            Ps(Ts.set(-.5, -.5, 0), Ms, s, _s, i, r),
            Ps(Es.set(.5, -.5, 0), Ms, s, _s, i, r),
            Ps(As.set(.5, .5, 0), Ms, s, _s, i, r),
            Ls.set(0, 0),
            Rs.set(1, 0),
            Cs.set(1, 1);
            let a = t.ray.intersectTriangle(Ts, Es, As, !1, ys);
            if (null === a && (Ps(Es.set(-.5, .5, 0), Ms, s, _s, i, r),
            Rs.set(0, 1),
            a = t.ray.intersectTriangle(Ts, As, Es, !1, ys),
            null === a))
                return;
            const o = t.ray.origin.distanceTo(ys);
            o < t.near || o > t.far || e.push({
                distance: o,
                point: ys.clone(),
                uv: ve.getUV(ys, Ts, Es, As, Ls, Rs, Cs, new W),
                face: null,
                object: this
            })
        }
        copy(t) {
            return super.copy(t),
            void 0 !== t.center && this.center.copy(t.center),
            this.material = t.material,
            this
        }
    }
    ).prototype.isSprite = !0;
    const Ds = new rt
      , Is = new tt
      , Ns = new tt
      , zs = new rt
      , Os = new zt;
    class Bs extends an {
        constructor(t, e) {
            super(t, e),
            this.type = "SkinnedMesh",
            this.bindMode = "attached",
            this.bindMatrix = new zt,
            this.bindMatrixInverse = new zt
        }
        copy(t) {
            return super.copy(t),
            this.bindMode = t.bindMode,
            this.bindMatrix.copy(t.bindMatrix),
            this.bindMatrixInverse.copy(t.bindMatrixInverse),
            this.skeleton = t.skeleton,
            this
        }
        bind(t, e) {
            this.skeleton = t,
            void 0 === e && (this.updateMatrixWorld(!0),
            this.skeleton.calculateInverses(),
            e = this.matrixWorld),
            this.bindMatrix.copy(e),
            this.bindMatrixInverse.copy(e).invert()
        }
        pose() {
            this.skeleton.pose()
        }
        normalizeSkinWeights() {
            const t = new tt
              , e = this.geometry.attributes.skinWeight;
            for (let n = 0, i = e.count; n < i; n++) {
                t.x = e.getX(n),
                t.y = e.getY(n),
                t.z = e.getZ(n),
                t.w = e.getW(n);
                const i = 1 / t.manhattanLength();
                i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0),
                e.setXYZW(n, t.x, t.y, t.z, t.w)
            }
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t),
            "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        }
        boneTransform(t, e) {
            const n = this.skeleton
              , i = this.geometry;
            Is.fromBufferAttribute(i.attributes.skinIndex, t),
            Ns.fromBufferAttribute(i.attributes.skinWeight, t),
            Ds.copy(e).applyMatrix4(this.bindMatrix),
            e.set(0, 0, 0);
            for (let t = 0; t < 4; t++) {
                const i = Ns.getComponent(t);
                if (0 !== i) {
                    const r = Is.getComponent(t);
                    Os.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]),
                    e.addScaledVector(zs.copy(Ds).applyMatrix4(Os), i)
                }
            }
            return e.applyMatrix4(this.bindMatrixInverse)
        }
    }
    Bs.prototype.isSkinnedMesh = !0;
    (class extends ae {
        constructor() {
            super(),
            this.type = "Bone"
        }
    }
    ).prototype.isBone = !0;
    (class extends K {
        constructor(t=null, e=1, n=1, i, r, s, a, o, l=1003, c=1003, h, u) {
            super(null, s, a, o, l, c, i, r, h, u),
            this.image = {
                data: t,
                width: e,
                height: n
            },
            this.magFilter = l,
            this.minFilter = c,
            this.generateMipmaps = !1,
            this.flipY = !1,
            this.unpackAlignment = 1,
            this.needsUpdate = !0
        }
    }
    ).prototype.isDataTexture = !0;
    class Us extends Ce {
        constructor(t, e, n, i=1) {
            "number" == typeof n && (i = n,
            n = !1,
            console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),
            super(t, e, n),
            this.meshPerAttribute = i
        }
        copy(t) {
            return super.copy(t),
            this.meshPerAttribute = t.meshPerAttribute,
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.meshPerAttribute = this.meshPerAttribute,
            t.isInstancedBufferAttribute = !0,
            t
        }
    }
    Us.prototype.isInstancedBufferAttribute = !0;
    const Fs = new zt
      , Hs = new zt
      , Gs = []
      , Vs = new an;
    (class extends an {
        constructor(t, e, n) {
            super(t, e),
            this.instanceMatrix = new Us(new Float32Array(16 * n),16),
            this.instanceColor = null,
            this.count = n,
            this.frustumCulled = !1
        }
        copy(t) {
            return super.copy(t),
            this.instanceMatrix.copy(t.instanceMatrix),
            null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()),
            this.count = t.count,
            this
        }
        getColorAt(t, e) {
            e.fromArray(this.instanceColor.array, 3 * t)
        }
        getMatrixAt(t, e) {
            e.fromArray(this.instanceMatrix.array, 16 * t)
        }
        raycast(t, e) {
            const n = this.matrixWorld
              , i = this.count;
            if (Vs.geometry = this.geometry,
            Vs.material = this.material,
            void 0 !== Vs.material)
                for (let r = 0; r < i; r++) {
                    this.getMatrixAt(r, Fs),
                    Hs.multiplyMatrices(n, Fs),
                    Vs.matrixWorld = Hs,
                    Vs.raycast(t, Gs);
                    for (let t = 0, n = Gs.length; t < n; t++) {
                        const n = Gs[t];
                        n.instanceId = r,
                        n.object = this,
                        e.push(n)
                    }
                    Gs.length = 0
                }
        }
        setColorAt(t, e) {
            null === this.instanceColor && (this.instanceColor = new Us(new Float32Array(3 * this.instanceMatrix.count),3)),
            e.toArray(this.instanceColor.array, 3 * t)
        }
        setMatrixAt(t, e) {
            e.toArray(this.instanceMatrix.array, 16 * t)
        }
        updateMorphTargets() {}
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    ).prototype.isInstancedMesh = !0;
    class ks extends ye {
        constructor(t) {
            super(),
            this.type = "LineBasicMaterial",
            this.color = new Ee(16777215),
            this.linewidth = 1,
            this.linecap = "round",
            this.linejoin = "round",
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.linewidth = t.linewidth,
            this.linecap = t.linecap,
            this.linejoin = t.linejoin,
            this
        }
    }
    ks.prototype.isLineBasicMaterial = !0;
    const Ws = new rt
      , js = new rt
      , qs = new zt
      , Xs = new Nt
      , Ys = new Et;
    class Js extends ae {
        constructor(t=new Ge, e=new ks) {
            super(),
            this.type = "Line",
            this.geometry = t,
            this.material = e,
            this.updateMorphTargets()
        }
        copy(t) {
            return super.copy(t),
            this.material = t.material,
            this.geometry = t.geometry,
            this
        }
        computeLineDistances() {
            const t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    const e = t.attributes.position
                      , n = [0];
                    for (let t = 1, i = e.count; t < i; t++)
                        Ws.fromBufferAttribute(e, t - 1),
                        js.fromBufferAttribute(e, t),
                        n[t] = n[t - 1],
                        n[t] += Ws.distanceTo(js);
                    t.setAttribute("lineDistance", new Ie(n,1))
                } else
                    console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else
                t.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            return this
        }
        raycast(t, e) {
            const n = this.geometry
              , i = this.matrixWorld
              , r = t.params.Line.threshold
              , s = n.drawRange;
            if (null === n.boundingSphere && n.computeBoundingSphere(),
            Ys.copy(n.boundingSphere),
            Ys.applyMatrix4(i),
            Ys.radius += r,
            !1 === t.ray.intersectsSphere(Ys))
                return;
            qs.copy(i).invert(),
            Xs.copy(t.ray).applyMatrix4(qs);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
              , o = a * a
              , l = new rt
              , c = new rt
              , h = new rt
              , u = new rt
              , d = this.isLineSegments ? 2 : 1;
            if (n.isBufferGeometry) {
                const i = n.index
                  , r = n.attributes.position;
                if (null !== i)
                    for (let n = Math.max(0, s.start), a = Math.min(i.count, s.start + s.count) - 1; n < a; n += d) {
                        const s = i.getX(n)
                          , a = i.getX(n + 1);
                        if (l.fromBufferAttribute(r, s),
                        c.fromBufferAttribute(r, a),
                        Xs.distanceSqToSegment(l, c, u, h) > o)
                            continue;
                        u.applyMatrix4(this.matrixWorld);
                        const d = t.ray.origin.distanceTo(u);
                        d < t.near || d > t.far || e.push({
                            distance: d,
                            point: h.clone().applyMatrix4(this.matrixWorld),
                            index: n,
                            face: null,
                            faceIndex: null,
                            object: this
                        })
                    }
                else
                    for (let n = Math.max(0, s.start), i = Math.min(r.count, s.start + s.count) - 1; n < i; n += d) {
                        if (l.fromBufferAttribute(r, n),
                        c.fromBufferAttribute(r, n + 1),
                        Xs.distanceSqToSegment(l, c, u, h) > o)
                            continue;
                        u.applyMatrix4(this.matrixWorld);
                        const i = t.ray.origin.distanceTo(u);
                        i < t.near || i > t.far || e.push({
                            distance: i,
                            point: h.clone().applyMatrix4(this.matrixWorld),
                            index: n,
                            face: null,
                            faceIndex: null,
                            object: this
                        })
                    }
            } else
                n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
        updateMorphTargets() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes
                  , n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {};
                        for (let e = 0, n = t.length; e < n; e++) {
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0),
                            this.morphTargetDictionary[n] = e
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        }
    }
    Js.prototype.isLine = !0;
    const Zs = new rt
      , Qs = new rt;
    class Ks extends Js {
        constructor(t, e) {
            super(t, e),
            this.type = "LineSegments"
        }
        computeLineDistances() {
            const t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    const e = t.attributes.position
                      , n = [];
                    for (let t = 0, i = e.count; t < i; t += 2)
                        Zs.fromBufferAttribute(e, t),
                        Qs.fromBufferAttribute(e, t + 1),
                        n[t] = 0 === t ? 0 : n[t - 1],
                        n[t + 1] = n[t] + Zs.distanceTo(Qs);
                    t.setAttribute("lineDistance", new Ie(n,1))
                } else
                    console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else
                t.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            return this
        }
    }
    Ks.prototype.isLineSegments = !0;
    (class extends Js {
        constructor(t, e) {
            super(t, e),
            this.type = "LineLoop"
        }
    }
    ).prototype.isLineLoop = !0;
    class $s extends ye {
        constructor(t) {
            super(),
            this.type = "PointsMaterial",
            this.color = new Ee(16777215),
            this.map = null,
            this.alphaMap = null,
            this.size = 1,
            this.sizeAttenuation = !0,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.map = t.map,
            this.alphaMap = t.alphaMap,
            this.size = t.size,
            this.sizeAttenuation = t.sizeAttenuation,
            this
        }
    }
    $s.prototype.isPointsMaterial = !0;
    const ta = new zt
      , ea = new Nt
      , na = new Et
      , ia = new rt;
    class ra extends ae {
        constructor(t=new Ge, e=new $s) {
            super(),
            this.type = "Points",
            this.geometry = t,
            this.material = e,
            this.updateMorphTargets()
        }
        copy(t) {
            return super.copy(t),
            this.material = t.material,
            this.geometry = t.geometry,
            this
        }
        raycast(t, e) {
            const n = this.geometry
              , i = this.matrixWorld
              , r = t.params.Points.threshold
              , s = n.drawRange;
            if (null === n.boundingSphere && n.computeBoundingSphere(),
            na.copy(n.boundingSphere),
            na.applyMatrix4(i),
            na.radius += r,
            !1 === t.ray.intersectsSphere(na))
                return;
            ta.copy(i).invert(),
            ea.copy(t.ray).applyMatrix4(ta);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
              , o = a * a;
            if (n.isBufferGeometry) {
                const r = n.index
                  , a = n.attributes.position;
                if (null !== r)
                    for (let n = Math.max(0, s.start), l = Math.min(r.count, s.start + s.count); n < l; n++) {
                        const s = r.getX(n);
                        ia.fromBufferAttribute(a, s),
                        sa(ia, s, o, i, t, e, this)
                    }
                else
                    for (let n = Math.max(0, s.start), r = Math.min(a.count, s.start + s.count); n < r; n++)
                        ia.fromBufferAttribute(a, n),
                        sa(ia, n, o, i, t, e, this)
            } else
                console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
        updateMorphTargets() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes
                  , n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {};
                        for (let e = 0, n = t.length; e < n; e++) {
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0),
                            this.morphTargetDictionary[n] = e
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        }
    }
    function sa(t, e, n, i, r, s, a) {
        const o = ea.distanceSqToPoint(t);
        if (o < n) {
            const n = new rt;
            ea.closestPointToPoint(t, n),
            n.applyMatrix4(i);
            const l = r.ray.origin.distanceTo(n);
            if (l < r.near || l > r.far)
                return;
            s.push({
                distance: l,
                distanceToRay: Math.sqrt(o),
                point: n,
                index: e,
                face: null,
                object: a
            })
        }
    }
    ra.prototype.isPoints = !0,
    class extends K {
        constructor(t, e, n, i, r, s, a, o, c) {
            super(t, e, n, i, r, s, a, o, c),
            this.format = void 0 !== a ? a : g,
            this.minFilter = void 0 !== s ? s : l,
            this.magFilter = void 0 !== r ? r : l,
            this.generateMipmaps = !1;
            const h = this;
            "requestVideoFrameCallback"in t && t.requestVideoFrameCallback((function e() {
                h.needsUpdate = !0,
                t.requestVideoFrameCallback(e)
            }
            ))
        }
        clone() {
            return new this.constructor(this.image).copy(this)
        }
        update() {
            const t = this.image;
            !1 == "requestVideoFrameCallback"in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
        }
    }
    .prototype.isVideoTexture = !0;
    (class extends K {
        constructor(t, e, n, i, r, s, a, o, l, c, h, u) {
            super(null, s, a, o, l, c, i, r, h, u),
            this.image = {
                width: e,
                height: n
            },
            this.mipmaps = t,
            this.flipY = !1,
            this.generateMipmaps = !1
        }
    }
    ).prototype.isCompressedTexture = !0,
    class extends K {
        constructor(t, e, n, i, r, s, a, o, l) {
            super(t, e, n, i, r, s, a, o, l),
            this.needsUpdate = !0
        }
    }
    .prototype.isCanvasTexture = !0,
    class extends K {
        constructor(t, e, n, i, r, s, a, l, c, h) {
            if ((h = void 0 !== h ? h : x) !== x && h !== y)
                throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === n && h === x && (n = u),
            void 0 === n && h === y && (n = f),
            super(null, i, r, s, a, l, h, n, c),
            this.image = {
                width: t,
                height: e
            },
            this.magFilter = void 0 !== a ? a : o,
            this.minFilter = void 0 !== l ? l : o,
            this.flipY = !1,
            this.generateMipmaps = !1
        }
    }
    .prototype.isDepthTexture = !0,
    new rt,
    new rt,
    new rt,
    new ve;
    class aa {
        constructor() {
            this.type = "Curve",
            this.arcLengthDivisions = 200
        }
        getPoint() {
            return console.warn("THREE.Curve: .getPoint() not implemented."),
            null
        }
        getPointAt(t, e) {
            const n = this.getUtoTmapping(t);
            return this.getPoint(n, e)
        }
        getPoints(t=5) {
            const e = [];
            for (let n = 0; n <= t; n++)
                e.push(this.getPoint(n / t));
            return e
        }
        getSpacedPoints(t=5) {
            const e = [];
            for (let n = 0; n <= t; n++)
                e.push(this.getPointAt(n / t));
            return e
        }
        getLength() {
            const t = this.getLengths();
            return t[t.length - 1]
        }
        getLengths(t=this.arcLengthDivisions) {
            if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
                return this.cacheArcLengths;
            this.needsUpdate = !1;
            const e = [];
            let n, i = this.getPoint(0), r = 0;
            e.push(0);
            for (let s = 1; s <= t; s++)
                n = this.getPoint(s / t),
                r += n.distanceTo(i),
                e.push(r),
                i = n;
            return this.cacheArcLengths = e,
            e
        }
        updateArcLengths() {
            this.needsUpdate = !0,
            this.getLengths()
        }
        getUtoTmapping(t, e) {
            const n = this.getLengths();
            let i = 0;
            const r = n.length;
            let s;
            s = e || t * n[r - 1];
            let a, o = 0, l = r - 1;
            for (; o <= l; )
                if (i = Math.floor(o + (l - o) / 2),
                a = n[i] - s,
                a < 0)
                    o = i + 1;
                else {
                    if (!(a > 0)) {
                        l = i;
                        break
                    }
                    l = i - 1
                }
            if (i = l,
            n[i] === s)
                return i / (r - 1);
            const c = n[i];
            return (i + (s - c) / (n[i + 1] - c)) / (r - 1)
        }
        getTangent(t, e) {
            const n = 1e-4;
            let i = t - n
              , r = t + n;
            i < 0 && (i = 0),
            r > 1 && (r = 1);
            const s = this.getPoint(i)
              , a = this.getPoint(r)
              , o = e || (s.isVector2 ? new W : new rt);
            return o.copy(a).sub(s).normalize(),
            o
        }
        getTangentAt(t, e) {
            const n = this.getUtoTmapping(t);
            return this.getTangent(n, e)
        }
        computeFrenetFrames(t, e) {
            const n = new rt
              , i = []
              , r = []
              , s = []
              , a = new rt
              , o = new zt;
            for (let e = 0; e <= t; e++) {
                const n = e / t;
                i[e] = this.getTangentAt(n, new rt)
            }
            r[0] = new rt,
            s[0] = new rt;
            let l = Number.MAX_VALUE;
            const c = Math.abs(i[0].x)
              , h = Math.abs(i[0].y)
              , u = Math.abs(i[0].z);
            c <= l && (l = c,
            n.set(1, 0, 0)),
            h <= l && (l = h,
            n.set(0, 1, 0)),
            u <= l && n.set(0, 0, 1),
            a.crossVectors(i[0], n).normalize(),
            r[0].crossVectors(i[0], a),
            s[0].crossVectors(i[0], r[0]);
            for (let e = 1; e <= t; e++) {
                if (r[e] = r[e - 1].clone(),
                s[e] = s[e - 1].clone(),
                a.crossVectors(i[e - 1], i[e]),
                a.length() > Number.EPSILON) {
                    a.normalize();
                    const t = Math.acos(H(i[e - 1].dot(i[e]), -1, 1));
                    r[e].applyMatrix4(o.makeRotationAxis(a, t))
                }
                s[e].crossVectors(i[e], r[e])
            }
            if (!0 === e) {
                let e = Math.acos(H(r[0].dot(r[t]), -1, 1));
                e /= t,
                i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
                for (let n = 1; n <= t; n++)
                    r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)),
                    s[n].crossVectors(i[n], r[n])
            }
            return {
                tangents: i,
                normals: r,
                binormals: s
            }
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions,
            this
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t.arcLengthDivisions = this.arcLengthDivisions,
            t.type = this.type,
            t
        }
        fromJSON(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions,
            this
        }
    }
    class oa extends aa {
        constructor(t=0, e=0, n=1, i=1, r=0, s=2 * Math.PI, a=!1, o=0) {
            super(),
            this.type = "EllipseCurve",
            this.aX = t,
            this.aY = e,
            this.xRadius = n,
            this.yRadius = i,
            this.aStartAngle = r,
            this.aEndAngle = s,
            this.aClockwise = a,
            this.aRotation = o
        }
        getPoint(t, e) {
            const n = e || new W
              , i = 2 * Math.PI;
            let r = this.aEndAngle - this.aStartAngle;
            const s = Math.abs(r) < Number.EPSILON;
            for (; r < 0; )
                r += i;
            for (; r > i; )
                r -= i;
            r < Number.EPSILON && (r = s ? 0 : i),
            !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
            const a = this.aStartAngle + t * r;
            let o = this.aX + this.xRadius * Math.cos(a)
              , l = this.aY + this.yRadius * Math.sin(a);
            if (0 !== this.aRotation) {
                const t = Math.cos(this.aRotation)
                  , e = Math.sin(this.aRotation)
                  , n = o - this.aX
                  , i = l - this.aY;
                o = n * t - i * e + this.aX,
                l = n * e + i * t + this.aY
            }
            return n.set(o, l)
        }
        copy(t) {
            return super.copy(t),
            this.aX = t.aX,
            this.aY = t.aY,
            this.xRadius = t.xRadius,
            this.yRadius = t.yRadius,
            this.aStartAngle = t.aStartAngle,
            this.aEndAngle = t.aEndAngle,
            this.aClockwise = t.aClockwise,
            this.aRotation = t.aRotation,
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.aX = this.aX,
            t.aY = this.aY,
            t.xRadius = this.xRadius,
            t.yRadius = this.yRadius,
            t.aStartAngle = this.aStartAngle,
            t.aEndAngle = this.aEndAngle,
            t.aClockwise = this.aClockwise,
            t.aRotation = this.aRotation,
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.aX = t.aX,
            this.aY = t.aY,
            this.xRadius = t.xRadius,
            this.yRadius = t.yRadius,
            this.aStartAngle = t.aStartAngle,
            this.aEndAngle = t.aEndAngle,
            this.aClockwise = t.aClockwise,
            this.aRotation = t.aRotation,
            this
        }
    }
    oa.prototype.isEllipseCurve = !0;
    class la extends oa {
        constructor(t, e, n, i, r, s) {
            super(t, e, n, n, i, r, s),
            this.type = "ArcCurve"
        }
    }
    function ca() {
        let t = 0
          , e = 0
          , n = 0
          , i = 0;
        function r(r, s, a, o) {
            t = r,
            e = a,
            n = -3 * r + 3 * s - 2 * a - o,
            i = 2 * r - 2 * s + a + o
        }
        return {
            initCatmullRom: function(t, e, n, i, s) {
                r(e, n, s * (n - t), s * (i - e))
            },
            initNonuniformCatmullRom: function(t, e, n, i, s, a, o) {
                let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a
                  , c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
                l *= a,
                c *= a,
                r(e, n, l, c)
            },
            calc: function(r) {
                const s = r * r;
                return t + e * r + n * s + i * (s * r)
            }
        }
    }
    la.prototype.isArcCurve = !0;
    const ha = new rt
      , ua = new ca
      , da = new ca
      , pa = new ca;
    class ma extends aa {
        constructor(t=[], e=!1, n="centripetal", i=.5) {
            super(),
            this.type = "CatmullRomCurve3",
            this.points = t,
            this.closed = e,
            this.curveType = n,
            this.tension = i
        }
        getPoint(t, e=new rt) {
            const n = e
              , i = this.points
              , r = i.length
              , s = (r - (this.closed ? 0 : 1)) * t;
            let a, o, l = Math.floor(s), c = s - l;
            this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2,
            c = 1),
            this.closed || l > 0 ? a = i[(l - 1) % r] : (ha.subVectors(i[0], i[1]).add(i[0]),
            a = ha);
            const h = i[l % r]
              , u = i[(l + 1) % r];
            if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (ha.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]),
            o = ha),
            "centripetal" === this.curveType || "chordal" === this.curveType) {
                const t = "chordal" === this.curveType ? .5 : .25;
                let e = Math.pow(a.distanceToSquared(h), t)
                  , n = Math.pow(h.distanceToSquared(u), t)
                  , i = Math.pow(u.distanceToSquared(o), t);
                n < 1e-4 && (n = 1),
                e < 1e-4 && (e = n),
                i < 1e-4 && (i = n),
                ua.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i),
                da.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i),
                pa.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i)
            } else
                "catmullrom" === this.curveType && (ua.initCatmullRom(a.x, h.x, u.x, o.x, this.tension),
                da.initCatmullRom(a.y, h.y, u.y, o.y, this.tension),
                pa.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
            return n.set(ua.calc(c), da.calc(c), pa.calc(c)),
            n
        }
        copy(t) {
            super.copy(t),
            this.points = [];
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push(n.clone())
            }
            return this.closed = t.closed,
            this.curveType = t.curveType,
            this.tension = t.tension,
            this
        }
        toJSON() {
            const t = super.toJSON();
            t.points = [];
            for (let e = 0, n = this.points.length; e < n; e++) {
                const n = this.points[e];
                t.points.push(n.toArray())
            }
            return t.closed = this.closed,
            t.curveType = this.curveType,
            t.tension = this.tension,
            t
        }
        fromJSON(t) {
            super.fromJSON(t),
            this.points = [];
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push((new rt).fromArray(n))
            }
            return this.closed = t.closed,
            this.curveType = t.curveType,
            this.tension = t.tension,
            this
        }
    }
    function fa(t, e, n, i, r) {
        const s = .5 * (i - e)
          , a = .5 * (r - n)
          , o = t * t;
        return (2 * n - 2 * i + s + a) * (t * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t + n
    }
    function ga(t, e, n, i) {
        return function(t, e) {
            const n = 1 - t;
            return n * n * e
        }(t, e) + function(t, e) {
            return 2 * (1 - t) * t * e
        }(t, n) + function(t, e) {
            return t * t * e
        }(t, i)
    }
    function va(t, e, n, i, r) {
        return function(t, e) {
            const n = 1 - t;
            return n * n * n * e
        }(t, e) + function(t, e) {
            const n = 1 - t;
            return 3 * n * n * t * e
        }(t, n) + function(t, e) {
            return 3 * (1 - t) * t * t * e
        }(t, i) + function(t, e) {
            return t * t * t * e
        }(t, r)
    }
    ma.prototype.isCatmullRomCurve3 = !0;
    class xa extends aa {
        constructor(t=new W, e=new W, n=new W, i=new W) {
            super(),
            this.type = "CubicBezierCurve",
            this.v0 = t,
            this.v1 = e,
            this.v2 = n,
            this.v3 = i
        }
        getPoint(t, e=new W) {
            const n = e
              , i = this.v0
              , r = this.v1
              , s = this.v2
              , a = this.v3;
            return n.set(va(t, i.x, r.x, s.x, a.x), va(t, i.y, r.y, s.y, a.y)),
            n
        }
        copy(t) {
            return super.copy(t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this.v3.copy(t.v3),
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(),
            t.v1 = this.v1.toArray(),
            t.v2 = this.v2.toArray(),
            t.v3 = this.v3.toArray(),
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this.v3.fromArray(t.v3),
            this
        }
    }
    xa.prototype.isCubicBezierCurve = !0;
    class ya extends aa {
        constructor(t=new rt, e=new rt, n=new rt, i=new rt) {
            super(),
            this.type = "CubicBezierCurve3",
            this.v0 = t,
            this.v1 = e,
            this.v2 = n,
            this.v3 = i
        }
        getPoint(t, e=new rt) {
            const n = e
              , i = this.v0
              , r = this.v1
              , s = this.v2
              , a = this.v3;
            return n.set(va(t, i.x, r.x, s.x, a.x), va(t, i.y, r.y, s.y, a.y), va(t, i.z, r.z, s.z, a.z)),
            n
        }
        copy(t) {
            return super.copy(t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this.v3.copy(t.v3),
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(),
            t.v1 = this.v1.toArray(),
            t.v2 = this.v2.toArray(),
            t.v3 = this.v3.toArray(),
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this.v3.fromArray(t.v3),
            this
        }
    }
    ya.prototype.isCubicBezierCurve3 = !0;
    class _a extends aa {
        constructor(t=new W, e=new W) {
            super(),
            this.type = "LineCurve",
            this.v1 = t,
            this.v2 = e
        }
        getPoint(t, e=new W) {
            const n = e;
            return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
            n.multiplyScalar(t).add(this.v1)),
            n
        }
        getPointAt(t, e) {
            return this.getPoint(t, e)
        }
        getTangent(t, e) {
            const n = e || new W;
            return n.copy(this.v2).sub(this.v1).normalize(),
            n
        }
        copy(t) {
            return super.copy(t),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v1 = this.v1.toArray(),
            t.v2 = this.v2.toArray(),
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
        }
    }
    _a.prototype.isLineCurve = !0;
    class Ma extends aa {
        constructor(t=new W, e=new W, n=new W) {
            super(),
            this.type = "QuadraticBezierCurve",
            this.v0 = t,
            this.v1 = e,
            this.v2 = n
        }
        getPoint(t, e=new W) {
            const n = e
              , i = this.v0
              , r = this.v1
              , s = this.v2;
            return n.set(ga(t, i.x, r.x, s.x), ga(t, i.y, r.y, s.y)),
            n
        }
        copy(t) {
            return super.copy(t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(),
            t.v1 = this.v1.toArray(),
            t.v2 = this.v2.toArray(),
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
        }
    }
    Ma.prototype.isQuadraticBezierCurve = !0;
    class ba extends aa {
        constructor(t=new rt, e=new rt, n=new rt) {
            super(),
            this.type = "QuadraticBezierCurve3",
            this.v0 = t,
            this.v1 = e,
            this.v2 = n
        }
        getPoint(t, e=new rt) {
            const n = e
              , i = this.v0
              , r = this.v1
              , s = this.v2;
            return n.set(ga(t, i.x, r.x, s.x), ga(t, i.y, r.y, s.y), ga(t, i.z, r.z, s.z)),
            n
        }
        copy(t) {
            return super.copy(t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(),
            t.v1 = this.v1.toArray(),
            t.v2 = this.v2.toArray(),
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
        }
    }
    ba.prototype.isQuadraticBezierCurve3 = !0;
    class wa extends aa {
        constructor(t=[]) {
            super(),
            this.type = "SplineCurve",
            this.points = t
        }
        getPoint(t, e=new W) {
            const n = e
              , i = this.points
              , r = (i.length - 1) * t
              , s = Math.floor(r)
              , a = r - s
              , o = i[0 === s ? s : s - 1]
              , l = i[s]
              , c = i[s > i.length - 2 ? i.length - 1 : s + 1]
              , h = i[s > i.length - 3 ? i.length - 1 : s + 2];
            return n.set(fa(a, o.x, l.x, c.x, h.x), fa(a, o.y, l.y, c.y, h.y)),
            n
        }
        copy(t) {
            super.copy(t),
            this.points = [];
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push(n.clone())
            }
            return this
        }
        toJSON() {
            const t = super.toJSON();
            t.points = [];
            for (let e = 0, n = this.points.length; e < n; e++) {
                const n = this.points[e];
                t.points.push(n.toArray())
            }
            return t
        }
        fromJSON(t) {
            super.fromJSON(t),
            this.points = [];
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push((new W).fromArray(n))
            }
            return this
        }
    }
    wa.prototype.isSplineCurve = !0;
    var Sa = Object.freeze({
        __proto__: null,
        ArcCurve: la,
        CatmullRomCurve3: ma,
        CubicBezierCurve: xa,
        CubicBezierCurve3: ya,
        EllipseCurve: oa,
        LineCurve: _a,
        LineCurve3: class extends aa {
            constructor(t=new rt, e=new rt) {
                super(),
                this.type = "LineCurve3",
                this.isLineCurve3 = !0,
                this.v1 = t,
                this.v2 = e
            }
            getPoint(t, e=new rt) {
                const n = e;
                return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
                n.multiplyScalar(t).add(this.v1)),
                n
            }
            getPointAt(t, e) {
                return this.getPoint(t, e)
            }
            copy(t) {
                return super.copy(t),
                this.v1.copy(t.v1),
                this.v2.copy(t.v2),
                this
            }
            toJSON() {
                const t = super.toJSON();
                return t.v1 = this.v1.toArray(),
                t.v2 = this.v2.toArray(),
                t
            }
            fromJSON(t) {
                return super.fromJSON(t),
                this.v1.fromArray(t.v1),
                this.v2.fromArray(t.v2),
                this
            }
        }
        ,
        QuadraticBezierCurve: Ma,
        QuadraticBezierCurve3: ba,
        SplineCurve: wa
    });
    class Ta extends aa {
        constructor() {
            super(),
            this.type = "CurvePath",
            this.curves = [],
            this.autoClose = !1
        }
        add(t) {
            this.curves.push(t)
        }
        closePath() {
            const t = this.curves[0].getPoint(0)
              , e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new _a(e,t))
        }
        getPoint(t, e) {
            const n = t * this.getLength()
              , i = this.getCurveLengths();
            let r = 0;
            for (; r < i.length; ) {
                if (i[r] >= n) {
                    const t = i[r] - n
                      , s = this.curves[r]
                      , a = s.getLength()
                      , o = 0 === a ? 0 : 1 - t / a;
                    return s.getPointAt(o, e)
                }
                r++
            }
            return null
        }
        getLength() {
            const t = this.getCurveLengths();
            return t[t.length - 1]
        }
        updateArcLengths() {
            this.needsUpdate = !0,
            this.cacheLengths = null,
            this.getCurveLengths()
        }
        getCurveLengths() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
                return this.cacheLengths;
            const t = [];
            let e = 0;
            for (let n = 0, i = this.curves.length; n < i; n++)
                e += this.curves[n].getLength(),
                t.push(e);
            return this.cacheLengths = t,
            t
        }
        getSpacedPoints(t=40) {
            const e = [];
            for (let n = 0; n <= t; n++)
                e.push(this.getPoint(n / t));
            return this.autoClose && e.push(e[0]),
            e
        }
        getPoints(t=12) {
            const e = [];
            let n;
            for (let i = 0, r = this.curves; i < r.length; i++) {
                const s = r[i]
                  , a = s && s.isEllipseCurve ? 2 * t : s && (s.isLineCurve || s.isLineCurve3) ? 1 : s && s.isSplineCurve ? t * s.points.length : t
                  , o = s.getPoints(a);
                for (let t = 0; t < o.length; t++) {
                    const i = o[t];
                    n && n.equals(i) || (e.push(i),
                    n = i)
                }
            }
            return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]),
            e
        }
        copy(t) {
            super.copy(t),
            this.curves = [];
            for (let e = 0, n = t.curves.length; e < n; e++) {
                const n = t.curves[e];
                this.curves.push(n.clone())
            }
            return this.autoClose = t.autoClose,
            this
        }
        toJSON() {
            const t = super.toJSON();
            t.autoClose = this.autoClose,
            t.curves = [];
            for (let e = 0, n = this.curves.length; e < n; e++) {
                const n = this.curves[e];
                t.curves.push(n.toJSON())
            }
            return t
        }
        fromJSON(t) {
            super.fromJSON(t),
            this.autoClose = t.autoClose,
            this.curves = [];
            for (let e = 0, n = t.curves.length; e < n; e++) {
                const n = t.curves[e];
                this.curves.push((new Sa[n.type]).fromJSON(n))
            }
            return this
        }
    }
    class Ea extends Ta {
        constructor(t) {
            super(),
            this.type = "Path",
            this.currentPoint = new W,
            t && this.setFromPoints(t)
        }
        setFromPoints(t) {
            this.moveTo(t[0].x, t[0].y);
            for (let e = 1, n = t.length; e < n; e++)
                this.lineTo(t[e].x, t[e].y);
            return this
        }
        moveTo(t, e) {
            return this.currentPoint.set(t, e),
            this
        }
        lineTo(t, e) {
            const n = new _a(this.currentPoint.clone(),new W(t,e));
            return this.curves.push(n),
            this.currentPoint.set(t, e),
            this
        }
        quadraticCurveTo(t, e, n, i) {
            const r = new Ma(this.currentPoint.clone(),new W(t,e),new W(n,i));
            return this.curves.push(r),
            this.currentPoint.set(n, i),
            this
        }
        bezierCurveTo(t, e, n, i, r, s) {
            const a = new xa(this.currentPoint.clone(),new W(t,e),new W(n,i),new W(r,s));
            return this.curves.push(a),
            this.currentPoint.set(r, s),
            this
        }
        splineThru(t) {
            const e = [this.currentPoint.clone()].concat(t)
              , n = new wa(e);
            return this.curves.push(n),
            this.currentPoint.copy(t[t.length - 1]),
            this
        }
        arc(t, e, n, i, r, s) {
            const a = this.currentPoint.x
              , o = this.currentPoint.y;
            return this.absarc(t + a, e + o, n, i, r, s),
            this
        }
        absarc(t, e, n, i, r, s) {
            return this.absellipse(t, e, n, n, i, r, s),
            this
        }
        ellipse(t, e, n, i, r, s, a, o) {
            const l = this.currentPoint.x
              , c = this.currentPoint.y;
            return this.absellipse(t + l, e + c, n, i, r, s, a, o),
            this
        }
        absellipse(t, e, n, i, r, s, a, o) {
            const l = new oa(t,e,n,i,r,s,a,o);
            if (this.curves.length > 0) {
                const t = l.getPoint(0);
                t.equals(this.currentPoint) || this.lineTo(t.x, t.y)
            }
            this.curves.push(l);
            const c = l.getPoint(1);
            return this.currentPoint.copy(c),
            this
        }
        copy(t) {
            return super.copy(t),
            this.currentPoint.copy(t.currentPoint),
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.currentPoint = this.currentPoint.toArray(),
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.currentPoint.fromArray(t.currentPoint),
            this
        }
    }
    class Aa extends Ea {
        constructor(t) {
            super(t),
            this.uuid = F(),
            this.type = "Shape",
            this.holes = []
        }
        getPointsHoles(t) {
            const e = [];
            for (let n = 0, i = this.holes.length; n < i; n++)
                e[n] = this.holes[n].getPoints(t);
            return e
        }
        extractPoints(t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            }
        }
        copy(t) {
            super.copy(t),
            this.holes = [];
            for (let e = 0, n = t.holes.length; e < n; e++) {
                const n = t.holes[e];
                this.holes.push(n.clone())
            }
            return this
        }
        toJSON() {
            const t = super.toJSON();
            t.uuid = this.uuid,
            t.holes = [];
            for (let e = 0, n = this.holes.length; e < n; e++) {
                const n = this.holes[e];
                t.holes.push(n.toJSON())
            }
            return t
        }
        fromJSON(t) {
            super.fromJSON(t),
            this.uuid = t.uuid,
            this.holes = [];
            for (let e = 0, n = t.holes.length; e < n; e++) {
                const n = t.holes[e];
                this.holes.push((new Ea).fromJSON(n))
            }
            return this
        }
    }
    function La(t, e, n, i, r) {
        let s, a;
        if (r === function(t, e, n, i) {
            let r = 0;
            for (let s = e, a = n - i; s < n; s += i)
                r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]),
                a = s;
            return r
        }(t, e, n, i) > 0)
            for (s = e; s < n; s += i)
                a = Ja(s, t[s], t[s + 1], a);
        else
            for (s = n - i; s >= e; s -= i)
                a = Ja(s, t[s], t[s + 1], a);
        return a && ka(a, a.next) && (Za(a),
        a = a.next),
        a
    }
    function Ra(t, e) {
        if (!t)
            return t;
        e || (e = t);
        let n, i = t;
        do {
            if (n = !1,
            i.steiner || !ka(i, i.next) && 0 !== Va(i.prev, i, i.next))
                i = i.next;
            else {
                if (Za(i),
                i = e = i.prev,
                i === i.next)
                    break;
                n = !0
            }
        } while (n || i !== e);
        return e
    }
    function Ca(t, e, n, i, r, s, a) {
        if (!t)
            return;
        !a && s && function(t, e, n, i) {
            let r = t;
            do {
                null === r.z && (r.z = Ua(r.x, r.y, e, n, i)),
                r.prevZ = r.prev,
                r.nextZ = r.next,
                r = r.next
            } while (r !== t);
            r.prevZ.nextZ = null,
            r.prevZ = null,
            function(t) {
                let e, n, i, r, s, a, o, l, c = 1;
                do {
                    for (n = t,
                    t = null,
                    s = null,
                    a = 0; n; ) {
                        for (a++,
                        i = n,
                        o = 0,
                        e = 0; e < c && (o++,
                        i = i.nextZ,
                        i); e++)
                            ;
                        for (l = c; o > 0 || l > 0 && i; )
                            0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n,
                            n = n.nextZ,
                            o--) : (r = i,
                            i = i.nextZ,
                            l--),
                            s ? s.nextZ = r : t = r,
                            r.prevZ = s,
                            s = r;
                        n = i
                    }
                    s.nextZ = null,
                    c *= 2
                } while (a > 1)
            }(r)
        }(t, i, r, s);
        let o, l, c = t;
        for (; t.prev !== t.next; )
            if (o = t.prev,
            l = t.next,
            s ? Da(t, i, r, s) : Pa(t))
                e.push(o.i / n),
                e.push(t.i / n),
                e.push(l.i / n),
                Za(t),
                t = l.next,
                c = l.next;
            else if ((t = l) === c) {
                a ? 1 === a ? Ca(t = Ia(Ra(t), e, n), e, n, i, r, s, 2) : 2 === a && Na(t, e, n, i, r, s) : Ca(Ra(t), e, n, i, r, s, 1);
                break
            }
    }
    function Pa(t) {
        const e = t.prev
          , n = t
          , i = t.next;
        if (Va(e, n, i) >= 0)
            return !1;
        let r = t.next.next;
        for (; r !== t.prev; ) {
            if (Ha(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && Va(r.prev, r, r.next) >= 0)
                return !1;
            r = r.next
        }
        return !0
    }
    function Da(t, e, n, i) {
        const r = t.prev
          , s = t
          , a = t.next;
        if (Va(r, s, a) >= 0)
            return !1;
        const o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x
          , l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y
          , c = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x
          , h = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y
          , u = Ua(o, l, e, n, i)
          , d = Ua(c, h, e, n, i);
        let p = t.prevZ
          , m = t.nextZ;
        for (; p && p.z >= u && m && m.z <= d; ) {
            if (p !== t.prev && p !== t.next && Ha(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && Va(p.prev, p, p.next) >= 0)
                return !1;
            if (p = p.prevZ,
            m !== t.prev && m !== t.next && Ha(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && Va(m.prev, m, m.next) >= 0)
                return !1;
            m = m.nextZ
        }
        for (; p && p.z >= u; ) {
            if (p !== t.prev && p !== t.next && Ha(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && Va(p.prev, p, p.next) >= 0)
                return !1;
            p = p.prevZ
        }
        for (; m && m.z <= d; ) {
            if (m !== t.prev && m !== t.next && Ha(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && Va(m.prev, m, m.next) >= 0)
                return !1;
            m = m.nextZ
        }
        return !0
    }
    function Ia(t, e, n) {
        let i = t;
        do {
            const r = i.prev
              , s = i.next.next;
            !ka(r, s) && Wa(r, i, i.next, s) && Xa(r, s) && Xa(s, r) && (e.push(r.i / n),
            e.push(i.i / n),
            e.push(s.i / n),
            Za(i),
            Za(i.next),
            i = t = s),
            i = i.next
        } while (i !== t);
        return Ra(i)
    }
    function Na(t, e, n, i, r, s) {
        let a = t;
        do {
            let t = a.next.next;
            for (; t !== a.prev; ) {
                if (a.i !== t.i && Ga(a, t)) {
                    let o = Ya(a, t);
                    return a = Ra(a, a.next),
                    o = Ra(o, o.next),
                    Ca(a, e, n, i, r, s),
                    void Ca(o, e, n, i, r, s)
                }
                t = t.next
            }
            a = a.next
        } while (a !== t)
    }
    function za(t, e) {
        return t.x - e.x
    }
    function Oa(t, e) {
        if (e = function(t, e) {
            let n = e;
            const i = t.x
              , r = t.y;
            let s, a = -1 / 0;
            do {
                if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
                    const t = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                    if (t <= i && t > a) {
                        if (a = t,
                        t === i) {
                            if (r === n.y)
                                return n;
                            if (r === n.next.y)
                                return n.next
                        }
                        s = n.x < n.next.x ? n : n.next
                    }
                }
                n = n.next
            } while (n !== e);
            if (!s)
                return null;
            if (i === a)
                return s;
            const o = s
              , l = s.x
              , c = s.y;
            let h, u = 1 / 0;
            n = s;
            do {
                i >= n.x && n.x >= l && i !== n.x && Ha(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) && (h = Math.abs(r - n.y) / (i - n.x),
                Xa(n, t) && (h < u || h === u && (n.x > s.x || n.x === s.x && Ba(s, n))) && (s = n,
                u = h)),
                n = n.next
            } while (n !== o);
            return s
        }(t, e),
        e) {
            const n = Ya(e, t);
            Ra(e, e.next),
            Ra(n, n.next)
        }
    }
    function Ba(t, e) {
        return Va(t.prev, t, e.prev) < 0 && Va(e.next, t, t.next) < 0
    }
    function Ua(t, e, n, i, r) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }
    function Fa(t) {
        let e = t
          , n = t;
        do {
            (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e),
            e = e.next
        } while (e !== t);
        return n
    }
    function Ha(t, e, n, i, r, s, a, o) {
        return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (i - o) - (n - a) * (e - o) >= 0 && (n - a) * (s - o) - (r - a) * (i - o) >= 0
    }
    function Ga(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && !function(t, e) {
            let n = t;
            do {
                if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && Wa(n, n.next, t, e))
                    return !0;
                n = n.next
            } while (n !== t);
            return !1
        }(t, e) && (Xa(t, e) && Xa(e, t) && function(t, e) {
            let n = t
              , i = !1;
            const r = (t.x + e.x) / 2
              , s = (t.y + e.y) / 2;
            do {
                n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i),
                n = n.next
            } while (n !== t);
            return i
        }(t, e) && (Va(t.prev, t, e.prev) || Va(t, e.prev, e)) || ka(t, e) && Va(t.prev, t, t.next) > 0 && Va(e.prev, e, e.next) > 0)
    }
    function Va(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
    }
    function ka(t, e) {
        return t.x === e.x && t.y === e.y
    }
    function Wa(t, e, n, i) {
        const r = qa(Va(t, e, n))
          , s = qa(Va(t, e, i))
          , a = qa(Va(n, i, t))
          , o = qa(Va(n, i, e));
        return r !== s && a !== o || !(0 !== r || !ja(t, n, e)) || !(0 !== s || !ja(t, i, e)) || !(0 !== a || !ja(n, t, i)) || !(0 !== o || !ja(n, e, i))
    }
    function ja(t, e, n) {
        return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y)
    }
    function qa(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0
    }
    function Xa(t, e) {
        return Va(t.prev, t, t.next) < 0 ? Va(t, e, t.next) >= 0 && Va(t, t.prev, e) >= 0 : Va(t, e, t.prev) < 0 || Va(t, t.next, e) < 0
    }
    function Ya(t, e) {
        const n = new Qa(t.i,t.x,t.y)
          , i = new Qa(e.i,e.x,e.y)
          , r = t.next
          , s = e.prev;
        return t.next = e,
        e.prev = t,
        n.next = r,
        r.prev = n,
        i.next = n,
        n.prev = i,
        s.next = i,
        i.prev = s,
        i
    }
    function Ja(t, e, n, i) {
        const r = new Qa(t,e,n);
        return i ? (r.next = i.next,
        r.prev = i,
        i.next.prev = r,
        i.next = r) : (r.prev = r,
        r.next = r),
        r
    }
    function Za(t) {
        t.next.prev = t.prev,
        t.prev.next = t.next,
        t.prevZ && (t.prevZ.nextZ = t.nextZ),
        t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }
    function Qa(t, e, n) {
        this.i = t,
        this.x = e,
        this.y = n,
        this.prev = null,
        this.next = null,
        this.z = null,
        this.prevZ = null,
        this.nextZ = null,
        this.steiner = !1
    }
    class Ka {
        static area(t) {
            const e = t.length;
            let n = 0;
            for (let i = e - 1, r = 0; r < e; i = r++)
                n += t[i].x * t[r].y - t[r].x * t[i].y;
            return .5 * n
        }
        static isClockWise(t) {
            return Ka.area(t) < 0
        }
        static triangulateShape(t, e) {
            const n = []
              , i = []
              , r = [];
            $a(t),
            to(n, t);
            let s = t.length;
            e.forEach($a);
            for (let t = 0; t < e.length; t++)
                i.push(s),
                s += e[t].length,
                to(n, e[t]);
            const a = function(t, e, n=2) {
                const i = e && e.length
                  , r = i ? e[0] * n : t.length;
                let s = La(t, 0, r, n, !0);
                const a = [];
                if (!s || s.next === s.prev)
                    return a;
                let o, l, c, h, u, d, p;
                if (i && (s = function(t, e, n, i) {
                    const r = [];
                    let s, a, o, l, c;
                    for (s = 0,
                    a = e.length; s < a; s++)
                        o = e[s] * i,
                        l = s < a - 1 ? e[s + 1] * i : t.length,
                        c = La(t, o, l, i, !1),
                        c === c.next && (c.steiner = !0),
                        r.push(Fa(c));
                    for (r.sort(za),
                    s = 0; s < r.length; s++)
                        Oa(r[s], n),
                        n = Ra(n, n.next);
                    return n
                }(t, e, s, n)),
                t.length > 80 * n) {
                    o = c = t[0],
                    l = h = t[1];
                    for (let e = n; e < r; e += n)
                        u = t[e],
                        d = t[e + 1],
                        u < o && (o = u),
                        d < l && (l = d),
                        u > c && (c = u),
                        d > h && (h = d);
                    p = Math.max(c - o, h - l),
                    p = 0 !== p ? 1 / p : 0
                }
                return Ca(s, a, n, o, l, p),
                a
            }(n, i);
            for (let t = 0; t < a.length; t += 3)
                r.push(a.slice(t, t + 3));
            return r
        }
    }
    function $a(t) {
        const e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop()
    }
    function to(t, e) {
        for (let n = 0; n < e.length; n++)
            t.push(e[n].x),
            t.push(e[n].y)
    }
    class eo extends Ge {
        constructor(t=new Aa([new W(.5,.5), new W(-.5,.5), new W(-.5,-.5), new W(.5,-.5)]), e={}) {
            super(),
            this.type = "ExtrudeGeometry",
            this.parameters = {
                shapes: t,
                options: e
            },
            t = Array.isArray(t) ? t : [t];
            const n = this
              , i = []
              , r = [];
            for (let e = 0, n = t.length; e < n; e++)
                s(t[e]);
            function s(t) {
                const s = []
                  , a = void 0 !== e.curveSegments ? e.curveSegments : 12
                  , o = void 0 !== e.steps ? e.steps : 1;
                let l = void 0 !== e.depth ? e.depth : 1
                  , c = void 0 === e.bevelEnabled || e.bevelEnabled
                  , h = void 0 !== e.bevelThickness ? e.bevelThickness : .2
                  , u = void 0 !== e.bevelSize ? e.bevelSize : h - .1
                  , d = void 0 !== e.bevelOffset ? e.bevelOffset : 0
                  , p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
                const m = e.extrudePath
                  , f = void 0 !== e.UVGenerator ? e.UVGenerator : no;
                void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),
                l = e.amount);
                let g, v, x, y, _, M = !1;
                m && (g = m.getSpacedPoints(o),
                M = !0,
                c = !1,
                v = m.computeFrenetFrames(o, !1),
                x = new rt,
                y = new rt,
                _ = new rt),
                c || (p = 0,
                h = 0,
                u = 0,
                d = 0);
                const b = t.extractPoints(a);
                let w = b.shape;
                const S = b.holes;
                if (!Ka.isClockWise(w)) {
                    w = w.reverse();
                    for (let t = 0, e = S.length; t < e; t++) {
                        const e = S[t];
                        Ka.isClockWise(e) && (S[t] = e.reverse())
                    }
                }
                const T = Ka.triangulateShape(w, S)
                  , E = w;
                for (let t = 0, e = S.length; t < e; t++) {
                    const e = S[t];
                    w = w.concat(e)
                }
                function A(t, e, n) {
                    return e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
                    e.clone().multiplyScalar(n).add(t)
                }
                const L = w.length
                  , R = T.length;
                function C(t, e, n) {
                    let i, r, s;
                    const a = t.x - e.x
                      , o = t.y - e.y
                      , l = n.x - t.x
                      , c = n.y - t.y
                      , h = a * a + o * o
                      , u = a * c - o * l;
                    if (Math.abs(u) > Number.EPSILON) {
                        const u = Math.sqrt(h)
                          , d = Math.sqrt(l * l + c * c)
                          , p = e.x - o / u
                          , m = e.y + a / u
                          , f = ((n.x - c / d - p) * c - (n.y + l / d - m) * l) / (a * c - o * l);
                        i = p + a * f - t.x,
                        r = m + o * f - t.y;
                        const g = i * i + r * r;
                        if (g <= 2)
                            return new W(i,r);
                        s = Math.sqrt(g / 2)
                    } else {
                        let t = !1;
                        a > Number.EPSILON ? l > Number.EPSILON && (t = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(c) && (t = !0),
                        t ? (i = -o,
                        r = a,
                        s = Math.sqrt(h)) : (i = a,
                        r = o,
                        s = Math.sqrt(h / 2))
                    }
                    return new W(i / s,r / s)
                }
                const P = [];
                for (let t = 0, e = E.length, n = e - 1, i = t + 1; t < e; t++,
                n++,
                i++)
                    n === e && (n = 0),
                    i === e && (i = 0),
                    P[t] = C(E[t], E[n], E[i]);
                const D = [];
                let I, N = P.concat();
                for (let t = 0, e = S.length; t < e; t++) {
                    const e = S[t];
                    I = [];
                    for (let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++,
                    i++,
                    r++)
                        i === n && (i = 0),
                        r === n && (r = 0),
                        I[t] = C(e[t], e[i], e[r]);
                    D.push(I),
                    N = N.concat(I)
                }
                for (let t = 0; t < p; t++) {
                    const e = t / p
                      , n = h * Math.cos(e * Math.PI / 2)
                      , i = u * Math.sin(e * Math.PI / 2) + d;
                    for (let t = 0, e = E.length; t < e; t++) {
                        const e = A(E[t], P[t], i);
                        B(e.x, e.y, -n)
                    }
                    for (let t = 0, e = S.length; t < e; t++) {
                        const e = S[t];
                        I = D[t];
                        for (let t = 0, r = e.length; t < r; t++) {
                            const r = A(e[t], I[t], i);
                            B(r.x, r.y, -n)
                        }
                    }
                }
                const z = u + d;
                for (let t = 0; t < L; t++) {
                    const e = c ? A(w[t], N[t], z) : w[t];
                    M ? (y.copy(v.normals[0]).multiplyScalar(e.x),
                    x.copy(v.binormals[0]).multiplyScalar(e.y),
                    _.copy(g[0]).add(y).add(x),
                    B(_.x, _.y, _.z)) : B(e.x, e.y, 0)
                }
                for (let t = 1; t <= o; t++)
                    for (let e = 0; e < L; e++) {
                        const n = c ? A(w[e], N[e], z) : w[e];
                        M ? (y.copy(v.normals[t]).multiplyScalar(n.x),
                        x.copy(v.binormals[t]).multiplyScalar(n.y),
                        _.copy(g[t]).add(y).add(x),
                        B(_.x, _.y, _.z)) : B(n.x, n.y, l / o * t)
                    }
                for (let t = p - 1; t >= 0; t--) {
                    const e = t / p
                      , n = h * Math.cos(e * Math.PI / 2)
                      , i = u * Math.sin(e * Math.PI / 2) + d;
                    for (let t = 0, e = E.length; t < e; t++) {
                        const e = A(E[t], P[t], i);
                        B(e.x, e.y, l + n)
                    }
                    for (let t = 0, e = S.length; t < e; t++) {
                        const e = S[t];
                        I = D[t];
                        for (let t = 0, r = e.length; t < r; t++) {
                            const r = A(e[t], I[t], i);
                            M ? B(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : B(r.x, r.y, l + n)
                        }
                    }
                }
                function O(t, e) {
                    let n = t.length;
                    for (; --n >= 0; ) {
                        const i = n;
                        let r = n - 1;
                        r < 0 && (r = t.length - 1);
                        for (let t = 0, n = o + 2 * p; t < n; t++) {
                            const n = L * t
                              , s = L * (t + 1);
                            F(e + i + n, e + r + n, e + r + s, e + i + s)
                        }
                    }
                }
                function B(t, e, n) {
                    s.push(t),
                    s.push(e),
                    s.push(n)
                }
                function U(t, e, r) {
                    H(t),
                    H(e),
                    H(r);
                    const s = i.length / 3
                      , a = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
                    G(a[0]),
                    G(a[1]),
                    G(a[2])
                }
                function F(t, e, r, s) {
                    H(t),
                    H(e),
                    H(s),
                    H(e),
                    H(r),
                    H(s);
                    const a = i.length / 3
                      , o = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
                    G(o[0]),
                    G(o[1]),
                    G(o[3]),
                    G(o[1]),
                    G(o[2]),
                    G(o[3])
                }
                function H(t) {
                    i.push(s[3 * t + 0]),
                    i.push(s[3 * t + 1]),
                    i.push(s[3 * t + 2])
                }
                function G(t) {
                    r.push(t.x),
                    r.push(t.y)
                }
                !function() {
                    const t = i.length / 3;
                    if (c) {
                        let t = 0
                          , e = L * t;
                        for (let t = 0; t < R; t++) {
                            const n = T[t];
                            U(n[2] + e, n[1] + e, n[0] + e)
                        }
                        t = o + 2 * p,
                        e = L * t;
                        for (let t = 0; t < R; t++) {
                            const n = T[t];
                            U(n[0] + e, n[1] + e, n[2] + e)
                        }
                    } else {
                        for (let t = 0; t < R; t++) {
                            const e = T[t];
                            U(e[2], e[1], e[0])
                        }
                        for (let t = 0; t < R; t++) {
                            const e = T[t];
                            U(e[0] + L * o, e[1] + L * o, e[2] + L * o)
                        }
                    }
                    n.addGroup(t, i.length / 3 - t, 0)
                }(),
                function() {
                    const t = i.length / 3;
                    let e = 0;
                    O(E, e),
                    e += E.length;
                    for (let t = 0, n = S.length; t < n; t++) {
                        const n = S[t];
                        O(n, e),
                        e += n.length
                    }
                    n.addGroup(t, i.length / 3 - t, 1)
                }()
            }
            this.setAttribute("position", new Ie(i,3)),
            this.setAttribute("uv", new Ie(r,2)),
            this.computeVertexNormals()
        }
        toJSON() {
            const t = super.toJSON();
            return function(t, e, n) {
                if (n.shapes = [],
                Array.isArray(t))
                    for (let e = 0, i = t.length; e < i; e++) {
                        const i = t[e];
                        n.shapes.push(i.uuid)
                    }
                else
                    n.shapes.push(t.uuid);
                return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()),
                n
            }(this.parameters.shapes, this.parameters.options, t)
        }
        static fromJSON(t, e) {
            const n = [];
            for (let i = 0, r = t.shapes.length; i < r; i++) {
                const r = e[t.shapes[i]];
                n.push(r)
            }
            const i = t.options.extrudePath;
            return void 0 !== i && (t.options.extrudePath = (new Sa[i.type]).fromJSON(i)),
            new eo(n,t.options)
        }
    }
    const no = {
        generateTopUV: function(t, e, n, i, r) {
            const s = e[3 * n]
              , a = e[3 * n + 1]
              , o = e[3 * i]
              , l = e[3 * i + 1]
              , c = e[3 * r]
              , h = e[3 * r + 1];
            return [new W(s,a), new W(o,l), new W(c,h)]
        },
        generateSideWallUV: function(t, e, n, i, r, s) {
            const a = e[3 * n]
              , o = e[3 * n + 1]
              , l = e[3 * n + 2]
              , c = e[3 * i]
              , h = e[3 * i + 1]
              , u = e[3 * i + 2]
              , d = e[3 * r]
              , p = e[3 * r + 1]
              , m = e[3 * r + 2]
              , f = e[3 * s]
              , g = e[3 * s + 1]
              , v = e[3 * s + 2];
            return Math.abs(o - h) < Math.abs(a - c) ? [new W(a,1 - l), new W(c,1 - u), new W(d,1 - m), new W(f,1 - v)] : [new W(o,1 - l), new W(h,1 - u), new W(p,1 - m), new W(g,1 - v)]
        }
    };
    class io extends Ge {
        constructor(t=new Aa([new W(0,.5), new W(-.5,-.5), new W(.5,-.5)]), e=12) {
            super(),
            this.type = "ShapeGeometry",
            this.parameters = {
                shapes: t,
                curveSegments: e
            };
            const n = []
              , i = []
              , r = []
              , s = [];
            let a = 0
              , o = 0;
            if (!1 === Array.isArray(t))
                l(t);
            else
                for (let e = 0; e < t.length; e++)
                    l(t[e]),
                    this.addGroup(a, o, e),
                    a += o,
                    o = 0;
            function l(t) {
                const a = i.length / 3
                  , l = t.extractPoints(e);
                let c = l.shape;
                const h = l.holes;
                !1 === Ka.isClockWise(c) && (c = c.reverse());
                for (let t = 0, e = h.length; t < e; t++) {
                    const e = h[t];
                    !0 === Ka.isClockWise(e) && (h[t] = e.reverse())
                }
                const u = Ka.triangulateShape(c, h);
                for (let t = 0, e = h.length; t < e; t++) {
                    const e = h[t];
                    c = c.concat(e)
                }
                for (let t = 0, e = c.length; t < e; t++) {
                    const e = c[t];
                    i.push(e.x, e.y, 0),
                    r.push(0, 0, 1),
                    s.push(e.x, e.y)
                }
                for (let t = 0, e = u.length; t < e; t++) {
                    const e = u[t]
                      , i = e[0] + a
                      , r = e[1] + a
                      , s = e[2] + a;
                    n.push(i, r, s),
                    o += 3
                }
            }
            this.setIndex(n),
            this.setAttribute("position", new Ie(i,3)),
            this.setAttribute("normal", new Ie(r,3)),
            this.setAttribute("uv", new Ie(s,2))
        }
        toJSON() {
            const t = super.toJSON();
            return function(t, e) {
                if (e.shapes = [],
                Array.isArray(t))
                    for (let n = 0, i = t.length; n < i; n++) {
                        const i = t[n];
                        e.shapes.push(i.uuid)
                    }
                else
                    e.shapes.push(t.uuid);
                return e
            }(this.parameters.shapes, t)
        }
        static fromJSON(t, e) {
            const n = [];
            for (let i = 0, r = t.shapes.length; i < r; i++) {
                const r = e[t.shapes[i]];
                n.push(r)
            }
            return new io(n,t.curveSegments)
        }
    }
    (class extends ye {
        constructor(t) {
            super(),
            this.type = "ShadowMaterial",
            this.color = new Ee(0),
            this.transparent = !0,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this
        }
    }
    ).prototype.isShadowMaterial = !0;
    class ro extends ye {
        constructor(t) {
            super(),
            this.defines = {
                STANDARD: ""
            },
            this.type = "MeshStandardMaterial",
            this.color = new Ee(16777215),
            this.roughness = 1,
            this.metalness = 0,
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new Ee(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new W(1,1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.roughnessMap = null,
            this.metalnessMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.envMapIntensity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.flatShading = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.defines = {
                STANDARD: ""
            },
            this.color.copy(t.color),
            this.roughness = t.roughness,
            this.metalness = t.metalness,
            this.map = t.map,
            this.lightMap = t.lightMap,
            this.lightMapIntensity = t.lightMapIntensity,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.emissive.copy(t.emissive),
            this.emissiveMap = t.emissiveMap,
            this.emissiveIntensity = t.emissiveIntensity,
            this.bumpMap = t.bumpMap,
            this.bumpScale = t.bumpScale,
            this.normalMap = t.normalMap,
            this.normalMapType = t.normalMapType,
            this.normalScale.copy(t.normalScale),
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.roughnessMap = t.roughnessMap,
            this.metalnessMap = t.metalnessMap,
            this.alphaMap = t.alphaMap,
            this.envMap = t.envMap,
            this.envMapIntensity = t.envMapIntensity,
            this.refractionRatio = t.refractionRatio,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this.flatShading = t.flatShading,
            this
        }
    }
    ro.prototype.isMeshStandardMaterial = !0;
    (class extends ro {
        constructor(t) {
            super(),
            this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            },
            this.type = "MeshPhysicalMaterial",
            this.clearcoatMap = null,
            this.clearcoatRoughness = 0,
            this.clearcoatRoughnessMap = null,
            this.clearcoatNormalScale = new W(1,1),
            this.clearcoatNormalMap = null,
            this.ior = 1.5,
            Object.defineProperty(this, "reflectivity", {
                get: function() {
                    return H(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
                },
                set: function(t) {
                    this.ior = (1 + .4 * t) / (1 - .4 * t)
                }
            }),
            this.sheenColor = new Ee(0),
            this.sheenColorMap = null,
            this.sheenRoughness = 1,
            this.sheenRoughnessMap = null,
            this.transmissionMap = null,
            this.thickness = .01,
            this.thicknessMap = null,
            this.attenuationDistance = 0,
            this.attenuationColor = new Ee(1,1,1),
            this.specularIntensity = 1,
            this.specularIntensityMap = null,
            this.specularColor = new Ee(1,1,1),
            this.specularColorMap = null,
            this._sheen = 0,
            this._clearcoat = 0,
            this._transmission = 0,
            this.setValues(t)
        }
        get sheen() {
            return this._sheen
        }
        set sheen(t) {
            this._sheen > 0 != t > 0 && this.version++,
            this._sheen = t
        }
        get clearcoat() {
            return this._clearcoat
        }
        set clearcoat(t) {
            this._clearcoat > 0 != t > 0 && this.version++,
            this._clearcoat = t
        }
        get transmission() {
            return this._transmission
        }
        set transmission(t) {
            this._transmission > 0 != t > 0 && this.version++,
            this._transmission = t
        }
        copy(t) {
            return super.copy(t),
            this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            },
            this.clearcoat = t.clearcoat,
            this.clearcoatMap = t.clearcoatMap,
            this.clearcoatRoughness = t.clearcoatRoughness,
            this.clearcoatRoughnessMap = t.clearcoatRoughnessMap,
            this.clearcoatNormalMap = t.clearcoatNormalMap,
            this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
            this.ior = t.ior,
            this.sheen = t.sheen,
            this.sheenColor.copy(t.sheenColor),
            this.sheenColorMap = t.sheenColorMap,
            this.sheenRoughness = t.sheenRoughness,
            this.sheenRoughnessMap = t.sheenRoughnessMap,
            this.transmission = t.transmission,
            this.transmissionMap = t.transmissionMap,
            this.thickness = t.thickness,
            this.thicknessMap = t.thicknessMap,
            this.attenuationDistance = t.attenuationDistance,
            this.attenuationColor.copy(t.attenuationColor),
            this.specularIntensity = t.specularIntensity,
            this.specularIntensityMap = t.specularIntensityMap,
            this.specularColor.copy(t.specularColor),
            this.specularColorMap = t.specularColorMap,
            this
        }
    }
    ).prototype.isMeshPhysicalMaterial = !0;
    class so extends ye {
        constructor(t) {
            super(),
            this.type = "MeshPhongMaterial",
            this.color = new Ee(16777215),
            this.specular = new Ee(1118481),
            this.shininess = 30,
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new Ee(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new W(1,1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.specularMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.combine = 0,
            this.reflectivity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.flatShading = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.specular.copy(t.specular),
            this.shininess = t.shininess,
            this.map = t.map,
            this.lightMap = t.lightMap,
            this.lightMapIntensity = t.lightMapIntensity,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.emissive.copy(t.emissive),
            this.emissiveMap = t.emissiveMap,
            this.emissiveIntensity = t.emissiveIntensity,
            this.bumpMap = t.bumpMap,
            this.bumpScale = t.bumpScale,
            this.normalMap = t.normalMap,
            this.normalMapType = t.normalMapType,
            this.normalScale.copy(t.normalScale),
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.specularMap = t.specularMap,
            this.alphaMap = t.alphaMap,
            this.envMap = t.envMap,
            this.combine = t.combine,
            this.reflectivity = t.reflectivity,
            this.refractionRatio = t.refractionRatio,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this.flatShading = t.flatShading,
            this
        }
    }
    so.prototype.isMeshPhongMaterial = !0;
    (class extends ye {
        constructor(t) {
            super(),
            this.defines = {
                TOON: ""
            },
            this.type = "MeshToonMaterial",
            this.color = new Ee(16777215),
            this.map = null,
            this.gradientMap = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new Ee(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new W(1,1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.alphaMap = null,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.map = t.map,
            this.gradientMap = t.gradientMap,
            this.lightMap = t.lightMap,
            this.lightMapIntensity = t.lightMapIntensity,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.emissive.copy(t.emissive),
            this.emissiveMap = t.emissiveMap,
            this.emissiveIntensity = t.emissiveIntensity,
            this.bumpMap = t.bumpMap,
            this.bumpScale = t.bumpScale,
            this.normalMap = t.normalMap,
            this.normalMapType = t.normalMapType,
            this.normalScale.copy(t.normalScale),
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.alphaMap = t.alphaMap,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this
        }
    }
    ).prototype.isMeshToonMaterial = !0;
    (class extends ye {
        constructor(t) {
            super(),
            this.type = "MeshNormalMaterial",
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new W(1,1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.fog = !1,
            this.flatShading = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.bumpMap = t.bumpMap,
            this.bumpScale = t.bumpScale,
            this.normalMap = t.normalMap,
            this.normalMapType = t.normalMapType,
            this.normalScale.copy(t.normalScale),
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.flatShading = t.flatShading,
            this
        }
    }
    ).prototype.isMeshNormalMaterial = !0;
    (class extends ye {
        constructor(t) {
            super(),
            this.type = "MeshLambertMaterial",
            this.color = new Ee(16777215),
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new Ee(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.specularMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.combine = 0,
            this.reflectivity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.map = t.map,
            this.lightMap = t.lightMap,
            this.lightMapIntensity = t.lightMapIntensity,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.emissive.copy(t.emissive),
            this.emissiveMap = t.emissiveMap,
            this.emissiveIntensity = t.emissiveIntensity,
            this.specularMap = t.specularMap,
            this.alphaMap = t.alphaMap,
            this.envMap = t.envMap,
            this.combine = t.combine,
            this.reflectivity = t.reflectivity,
            this.refractionRatio = t.refractionRatio,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this
        }
    }
    ).prototype.isMeshLambertMaterial = !0;
    (class extends ye {
        constructor(t) {
            super(),
            this.defines = {
                MATCAP: ""
            },
            this.type = "MeshMatcapMaterial",
            this.color = new Ee(16777215),
            this.matcap = null,
            this.map = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new W(1,1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.alphaMap = null,
            this.flatShading = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.defines = {
                MATCAP: ""
            },
            this.color.copy(t.color),
            this.matcap = t.matcap,
            this.map = t.map,
            this.bumpMap = t.bumpMap,
            this.bumpScale = t.bumpScale,
            this.normalMap = t.normalMap,
            this.normalMapType = t.normalMapType,
            this.normalScale.copy(t.normalScale),
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.alphaMap = t.alphaMap,
            this.flatShading = t.flatShading,
            this
        }
    }
    ).prototype.isMeshMatcapMaterial = !0;
    (class extends ks {
        constructor(t) {
            super(),
            this.type = "LineDashedMaterial",
            this.scale = 1,
            this.dashSize = 3,
            this.gapSize = 1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.scale = t.scale,
            this.dashSize = t.dashSize,
            this.gapSize = t.gapSize,
            this
        }
    }
    ).prototype.isLineDashedMaterial = !0;
    const ao = {
        arraySlice: function(t, e, n) {
            return ao.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
        },
        convertArray: function(t, e, n) {
            return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        },
        isTypedArray: function(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        },
        getKeyframeOrder: function(t) {
            const e = t.length
              , n = new Array(e);
            for (let t = 0; t !== e; ++t)
                n[t] = t;
            return n.sort((function(e, n) {
                return t[e] - t[n]
            }
            )),
            n
        },
        sortedArray: function(t, e, n) {
            const i = t.length
              , r = new t.constructor(i);
            for (let s = 0, a = 0; a !== i; ++s) {
                const i = n[s] * e;
                for (let n = 0; n !== e; ++n)
                    r[a++] = t[i + n]
            }
            return r
        },
        flattenJSON: function(t, e, n, i) {
            let r = 1
              , s = t[0];
            for (; void 0 !== s && void 0 === s[i]; )
                s = t[r++];
            if (void 0 === s)
                return;
            let a = s[i];
            if (void 0 !== a)
                if (Array.isArray(a))
                    do {
                        a = s[i],
                        void 0 !== a && (e.push(s.time),
                        n.push.apply(n, a)),
                        s = t[r++]
                    } while (void 0 !== s);
                else if (void 0 !== a.toArray)
                    do {
                        a = s[i],
                        void 0 !== a && (e.push(s.time),
                        a.toArray(n, n.length)),
                        s = t[r++]
                    } while (void 0 !== s);
                else
                    do {
                        a = s[i],
                        void 0 !== a && (e.push(s.time),
                        n.push(a)),
                        s = t[r++]
                    } while (void 0 !== s)
        },
        subclip: function(t, e, n, i, r=30) {
            const s = t.clone();
            s.name = e;
            const a = [];
            for (let t = 0; t < s.tracks.length; ++t) {
                const e = s.tracks[t]
                  , o = e.getValueSize()
                  , l = []
                  , c = [];
                for (let t = 0; t < e.times.length; ++t) {
                    const s = e.times[t] * r;
                    if (!(s < n || s >= i)) {
                        l.push(e.times[t]);
                        for (let n = 0; n < o; ++n)
                            c.push(e.values[t * o + n])
                    }
                }
                0 !== l.length && (e.times = ao.convertArray(l, e.times.constructor),
                e.values = ao.convertArray(c, e.values.constructor),
                a.push(e))
            }
            s.tracks = a;
            let o = 1 / 0;
            for (let t = 0; t < s.tracks.length; ++t)
                o > s.tracks[t].times[0] && (o = s.tracks[t].times[0]);
            for (let t = 0; t < s.tracks.length; ++t)
                s.tracks[t].shift(-1 * o);
            return s.resetDuration(),
            s
        },
        makeClipAdditive: function(t, e=0, n=t, i=30) {
            i <= 0 && (i = 30);
            const r = n.tracks.length
              , s = e / i;
            for (let e = 0; e < r; ++e) {
                const i = n.tracks[e]
                  , r = i.ValueTypeName;
                if ("bool" === r || "string" === r)
                    continue;
                const a = t.tracks.find((function(t) {
                    return t.name === i.name && t.ValueTypeName === r
                }
                ));
                if (void 0 === a)
                    continue;
                let o = 0;
                const l = i.getValueSize();
                i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
                let c = 0;
                const h = a.getValueSize();
                a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
                const u = i.times.length - 1;
                let d;
                if (s <= i.times[0]) {
                    const t = o
                      , e = l - o;
                    d = ao.arraySlice(i.values, t, e)
                } else if (s >= i.times[u]) {
                    const t = u * l + o
                      , e = t + l - o;
                    d = ao.arraySlice(i.values, t, e)
                } else {
                    const t = i.createInterpolant()
                      , e = o
                      , n = l - o;
                    t.evaluate(s),
                    d = ao.arraySlice(t.resultBuffer, e, n)
                }
                "quaternion" === r && (new it).fromArray(d).normalize().conjugate().toArray(d);
                const p = a.times.length;
                for (let t = 0; t < p; ++t) {
                    const e = t * h + c;
                    if ("quaternion" === r)
                        it.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
                    else {
                        const t = h - 2 * c;
                        for (let n = 0; n < t; ++n)
                            a.values[e + n] -= d[n]
                    }
                }
            }
            return t.blendMode = 2501,
            t
        }
    };
    class oo {
        constructor(t, e, n, i) {
            this.parameterPositions = t,
            this._cachedIndex = 0,
            this.resultBuffer = void 0 !== i ? i : new e.constructor(n),
            this.sampleValues = e,
            this.valueSize = n,
            this.settings = null,
            this.DefaultSettings_ = {}
        }
        evaluate(t) {
            const e = this.parameterPositions;
            let n = this._cachedIndex
              , i = e[n]
              , r = e[n - 1];
            t: {
                e: {
                    let s;
                    n: {
                        i: if (!(t < i)) {
                            for (let s = n + 2; ; ) {
                                if (void 0 === i) {
                                    if (t < r)
                                        break i;
                                    return n = e.length,
                                    this._cachedIndex = n,
                                    this.afterEnd_(n - 1, t, r)
                                }
                                if (n === s)
                                    break;
                                if (r = i,
                                i = e[++n],
                                t < i)
                                    break e
                            }
                            s = e.length;
                            break n
                        }
                        if (t >= r)
                            break t;
                        {
                            const a = e[1];
                            t < a && (n = 2,
                            r = a);
                            for (let s = n - 2; ; ) {
                                if (void 0 === r)
                                    return this._cachedIndex = 0,
                                    this.beforeStart_(0, t, i);
                                if (n === s)
                                    break;
                                if (i = r,
                                r = e[--n - 1],
                                t >= r)
                                    break e
                            }
                            s = n,
                            n = 0
                        }
                    }
                    for (; n < s; ) {
                        const i = n + s >>> 1;
                        t < e[i] ? s = i : n = i + 1
                    }
                    if (i = e[n],
                    r = e[n - 1],
                    void 0 === r)
                        return this._cachedIndex = 0,
                        this.beforeStart_(0, t, i);
                    if (void 0 === i)
                        return n = e.length,
                        this._cachedIndex = n,
                        this.afterEnd_(n - 1, r, t)
                }
                this._cachedIndex = n,
                this.intervalChanged_(n, r, i)
            }
            return this.interpolate_(n, r, t, i)
        }
        getSettings_() {
            return this.settings || this.DefaultSettings_
        }
        copySampleValue_(t) {
            const e = this.resultBuffer
              , n = this.sampleValues
              , i = this.valueSize
              , r = t * i;
            for (let t = 0; t !== i; ++t)
                e[t] = n[r + t];
            return e
        }
        interpolate_() {
            throw new Error("call to abstract method")
        }
        intervalChanged_() {}
    }
    oo.prototype.beforeStart_ = oo.prototype.copySampleValue_,
    oo.prototype.afterEnd_ = oo.prototype.copySampleValue_;
    class lo extends oo {
        constructor(t, e, n, i) {
            super(t, e, n, i),
            this._weightPrev = -0,
            this._offsetPrev = -0,
            this._weightNext = -0,
            this._offsetNext = -0,
            this.DefaultSettings_ = {
                endingStart: w,
                endingEnd: w
            }
        }
        intervalChanged_(t, e, n) {
            const i = this.parameterPositions;
            let r = t - 2
              , s = t + 1
              , a = i[r]
              , o = i[s];
            if (void 0 === a)
                switch (this.getSettings_().endingStart) {
                case S:
                    r = t,
                    a = 2 * e - n;
                    break;
                case T:
                    r = i.length - 2,
                    a = e + i[r] - i[r + 1];
                    break;
                default:
                    r = t,
                    a = n
                }
            if (void 0 === o)
                switch (this.getSettings_().endingEnd) {
                case S:
                    s = t,
                    o = 2 * n - e;
                    break;
                case T:
                    s = 1,
                    o = n + i[1] - i[0];
                    break;
                default:
                    s = t - 1,
                    o = e
                }
            const l = .5 * (n - e)
              , c = this.valueSize;
            this._weightPrev = l / (e - a),
            this._weightNext = l / (o - n),
            this._offsetPrev = r * c,
            this._offsetNext = s * c
        }
        interpolate_(t, e, n, i) {
            const r = this.resultBuffer
              , s = this.sampleValues
              , a = this.valueSize
              , o = t * a
              , l = o - a
              , c = this._offsetPrev
              , h = this._offsetNext
              , u = this._weightPrev
              , d = this._weightNext
              , p = (n - e) / (i - e)
              , m = p * p
              , f = m * p
              , g = -u * f + 2 * u * m - u * p
              , v = (1 + u) * f + (-1.5 - 2 * u) * m + (-.5 + u) * p + 1
              , x = (-1 - d) * f + (1.5 + d) * m + .5 * p
              , y = d * f - d * m;
            for (let t = 0; t !== a; ++t)
                r[t] = g * s[c + t] + v * s[l + t] + x * s[o + t] + y * s[h + t];
            return r
        }
    }
    class co extends oo {
        constructor(t, e, n, i) {
            super(t, e, n, i)
        }
        interpolate_(t, e, n, i) {
            const r = this.resultBuffer
              , s = this.sampleValues
              , a = this.valueSize
              , o = t * a
              , l = o - a
              , c = (n - e) / (i - e)
              , h = 1 - c;
            for (let t = 0; t !== a; ++t)
                r[t] = s[l + t] * h + s[o + t] * c;
            return r
        }
    }
    class ho extends oo {
        constructor(t, e, n, i) {
            super(t, e, n, i)
        }
        interpolate_(t) {
            return this.copySampleValue_(t - 1)
        }
    }
    class uo {
        constructor(t, e, n, i) {
            if (void 0 === t)
                throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (void 0 === e || 0 === e.length)
                throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
            this.name = t,
            this.times = ao.convertArray(e, this.TimeBufferType),
            this.values = ao.convertArray(n, this.ValueBufferType),
            this.setInterpolation(i || this.DefaultInterpolation)
        }
        static toJSON(t) {
            const e = t.constructor;
            let n;
            if (e.toJSON !== this.toJSON)
                n = e.toJSON(t);
            else {
                n = {
                    name: t.name,
                    times: ao.convertArray(t.times, Array),
                    values: ao.convertArray(t.values, Array)
                };
                const e = t.getInterpolation();
                e !== t.DefaultInterpolation && (n.interpolation = e)
            }
            return n.type = t.ValueTypeName,
            n
        }
        InterpolantFactoryMethodDiscrete(t) {
            return new ho(this.times,this.values,this.getValueSize(),t)
        }
        InterpolantFactoryMethodLinear(t) {
            return new co(this.times,this.values,this.getValueSize(),t)
        }
        InterpolantFactoryMethodSmooth(t) {
            return new lo(this.times,this.values,this.getValueSize(),t)
        }
        setInterpolation(t) {
            let e;
            switch (t) {
            case _:
                e = this.InterpolantFactoryMethodDiscrete;
                break;
            case M:
                e = this.InterpolantFactoryMethodLinear;
                break;
            case b:
                e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === e) {
                const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation)
                        throw new Error(e);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                return console.warn("THREE.KeyframeTrack:", e),
                this
            }
            return this.createInterpolant = e,
            this
        }
        getInterpolation() {
            switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return _;
            case this.InterpolantFactoryMethodLinear:
                return M;
            case this.InterpolantFactoryMethodSmooth:
                return b
            }
        }
        getValueSize() {
            return this.values.length / this.times.length
        }
        shift(t) {
            if (0 !== t) {
                const e = this.times;
                for (let n = 0, i = e.length; n !== i; ++n)
                    e[n] += t
            }
            return this
        }
        scale(t) {
            if (1 !== t) {
                const e = this.times;
                for (let n = 0, i = e.length; n !== i; ++n)
                    e[n] *= t
            }
            return this
        }
        trim(t, e) {
            const n = this.times
              , i = n.length;
            let r = 0
              , s = i - 1;
            for (; r !== i && n[r] < t; )
                ++r;
            for (; -1 !== s && n[s] > e; )
                --s;
            if (++s,
            0 !== r || s !== i) {
                r >= s && (s = Math.max(s, 1),
                r = s - 1);
                const t = this.getValueSize();
                this.times = ao.arraySlice(n, r, s),
                this.values = ao.arraySlice(this.values, r * t, s * t)
            }
            return this
        }
        validate() {
            let t = !0;
            const e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
            t = !1);
            const n = this.times
              , i = this.values
              , r = n.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this),
            t = !1);
            let s = null;
            for (let e = 0; e !== r; e++) {
                const i = n[e];
                if ("number" == typeof i && isNaN(i)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i),
                    t = !1;
                    break
                }
                if (null !== s && s > i) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s),
                    t = !1;
                    break
                }
                s = i
            }
            if (void 0 !== i && ao.isTypedArray(i))
                for (let e = 0, n = i.length; e !== n; ++e) {
                    const n = i[e];
                    if (isNaN(n)) {
                        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n),
                        t = !1;
                        break
                    }
                }
            return t
        }
        optimize() {
            const t = ao.arraySlice(this.times)
              , e = ao.arraySlice(this.values)
              , n = this.getValueSize()
              , i = this.getInterpolation() === b
              , r = t.length - 1;
            let s = 1;
            for (let a = 1; a < r; ++a) {
                let r = !1;
                const o = t[a];
                if (o !== t[a + 1] && (1 !== a || o !== t[0]))
                    if (i)
                        r = !0;
                    else {
                        const t = a * n
                          , i = t - n
                          , s = t + n;
                        for (let a = 0; a !== n; ++a) {
                            const n = e[t + a];
                            if (n !== e[i + a] || n !== e[s + a]) {
                                r = !0;
                                break
                            }
                        }
                    }
                if (r) {
                    if (a !== s) {
                        t[s] = t[a];
                        const i = a * n
                          , r = s * n;
                        for (let t = 0; t !== n; ++t)
                            e[r + t] = e[i + t]
                    }
                    ++s
                }
            }
            if (r > 0) {
                t[s] = t[r];
                for (let t = r * n, i = s * n, a = 0; a !== n; ++a)
                    e[i + a] = e[t + a];
                ++s
            }
            return s !== t.length ? (this.times = ao.arraySlice(t, 0, s),
            this.values = ao.arraySlice(e, 0, s * n)) : (this.times = t,
            this.values = e),
            this
        }
        clone() {
            const t = ao.arraySlice(this.times, 0)
              , e = ao.arraySlice(this.values, 0)
              , n = new (0,
            this.constructor)(this.name,t,e);
            return n.createInterpolant = this.createInterpolant,
            n
        }
    }
    uo.prototype.TimeBufferType = Float32Array,
    uo.prototype.ValueBufferType = Float32Array,
    uo.prototype.DefaultInterpolation = M;
    class po extends uo {
    }
    po.prototype.ValueTypeName = "bool",
    po.prototype.ValueBufferType = Array,
    po.prototype.DefaultInterpolation = _,
    po.prototype.InterpolantFactoryMethodLinear = void 0,
    po.prototype.InterpolantFactoryMethodSmooth = void 0;
    class mo extends uo {
    }
    mo.prototype.ValueTypeName = "color";
    class fo extends uo {
    }
    fo.prototype.ValueTypeName = "number";
    class go extends oo {
        constructor(t, e, n, i) {
            super(t, e, n, i)
        }
        interpolate_(t, e, n, i) {
            const r = this.resultBuffer
              , s = this.sampleValues
              , a = this.valueSize
              , o = (n - e) / (i - e);
            let l = t * a;
            for (let t = l + a; l !== t; l += 4)
                it.slerpFlat(r, 0, s, l - a, s, l, o);
            return r
        }
    }
    class vo extends uo {
        InterpolantFactoryMethodLinear(t) {
            return new go(this.times,this.values,this.getValueSize(),t)
        }
    }
    vo.prototype.ValueTypeName = "quaternion",
    vo.prototype.DefaultInterpolation = M,
    vo.prototype.InterpolantFactoryMethodSmooth = void 0;
    class xo extends uo {
    }
    xo.prototype.ValueTypeName = "string",
    xo.prototype.ValueBufferType = Array,
    xo.prototype.DefaultInterpolation = _,
    xo.prototype.InterpolantFactoryMethodLinear = void 0,
    xo.prototype.InterpolantFactoryMethodSmooth = void 0;
    class yo extends uo {
    }
    yo.prototype.ValueTypeName = "vector";
    class _o {
        constructor(t, e=-1, n, i=2500) {
            this.name = t,
            this.tracks = n,
            this.duration = e,
            this.blendMode = i,
            this.uuid = F(),
            this.duration < 0 && this.resetDuration()
        }
        static parse(t) {
            const e = []
              , n = t.tracks
              , i = 1 / (t.fps || 1);
            for (let t = 0, r = n.length; t !== r; ++t)
                e.push(Mo(n[t]).scale(i));
            const r = new this(t.name,t.duration,e,t.blendMode);
            return r.uuid = t.uuid,
            r
        }
        static toJSON(t) {
            const e = []
              , n = t.tracks
              , i = {
                name: t.name,
                duration: t.duration,
                tracks: e,
                uuid: t.uuid,
                blendMode: t.blendMode
            };
            for (let t = 0, i = n.length; t !== i; ++t)
                e.push(uo.toJSON(n[t]));
            return i
        }
        static CreateFromMorphTargetSequence(t, e, n, i) {
            const r = e.length
              , s = [];
            for (let t = 0; t < r; t++) {
                let a = []
                  , o = [];
                a.push((t + r - 1) % r, t, (t + 1) % r),
                o.push(0, 1, 0);
                const l = ao.getKeyframeOrder(a);
                a = ao.sortedArray(a, 1, l),
                o = ao.sortedArray(o, 1, l),
                i || 0 !== a[0] || (a.push(r),
                o.push(o[0])),
                s.push(new fo(".morphTargetInfluences[" + e[t].name + "]",a,o).scale(1 / n))
            }
            return new this(t,-1,s)
        }
        static findByName(t, e) {
            let n = t;
            if (!Array.isArray(t)) {
                const e = t;
                n = e.geometry && e.geometry.animations || e.animations
            }
            for (let t = 0; t < n.length; t++)
                if (n[t].name === e)
                    return n[t];
            return null
        }
        static CreateClipsFromMorphTargetSequences(t, e, n) {
            const i = {}
              , r = /^([\w-]*?)([\d]+)$/;
            for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e]
                  , s = n.name.match(r);
                if (s && s.length > 1) {
                    const t = s[1];
                    let e = i[t];
                    e || (i[t] = e = []),
                    e.push(n)
                }
            }
            const s = [];
            for (const t in i)
                s.push(this.CreateFromMorphTargetSequence(t, i[t], e, n));
            return s
        }
        static parseAnimation(t, e) {
            if (!t)
                return console.error("THREE.AnimationClip: No animation in JSONLoader data."),
                null;
            const n = function(t, e, n, i, r) {
                if (0 !== n.length) {
                    const s = []
                      , a = [];
                    ao.flattenJSON(n, s, a, i),
                    0 !== s.length && r.push(new t(e,s,a))
                }
            }
              , i = []
              , r = t.name || "default"
              , s = t.fps || 30
              , a = t.blendMode;
            let o = t.length || -1;
            const l = t.hierarchy || [];
            for (let t = 0; t < l.length; t++) {
                const r = l[t].keys;
                if (r && 0 !== r.length)
                    if (r[0].morphTargets) {
                        const t = {};
                        let e;
                        for (e = 0; e < r.length; e++)
                            if (r[e].morphTargets)
                                for (let n = 0; n < r[e].morphTargets.length; n++)
                                    t[r[e].morphTargets[n]] = -1;
                        for (const n in t) {
                            const t = []
                              , s = [];
                            for (let i = 0; i !== r[e].morphTargets.length; ++i) {
                                const i = r[e];
                                t.push(i.time),
                                s.push(i.morphTarget === n ? 1 : 0)
                            }
                            i.push(new fo(".morphTargetInfluence[" + n + "]",t,s))
                        }
                        o = t.length * (s || 1)
                    } else {
                        const s = ".bones[" + e[t].name + "]";
                        n(yo, s + ".position", r, "pos", i),
                        n(vo, s + ".quaternion", r, "rot", i),
                        n(yo, s + ".scale", r, "scl", i)
                    }
            }
            return 0 === i.length ? null : new this(r,o,i,a)
        }
        resetDuration() {
            let t = 0;
            for (let e = 0, n = this.tracks.length; e !== n; ++e) {
                const n = this.tracks[e];
                t = Math.max(t, n.times[n.times.length - 1])
            }
            return this.duration = t,
            this
        }
        trim() {
            for (let t = 0; t < this.tracks.length; t++)
                this.tracks[t].trim(0, this.duration);
            return this
        }
        validate() {
            let t = !0;
            for (let e = 0; e < this.tracks.length; e++)
                t = t && this.tracks[e].validate();
            return t
        }
        optimize() {
            for (let t = 0; t < this.tracks.length; t++)
                this.tracks[t].optimize();
            return this
        }
        clone() {
            const t = [];
            for (let e = 0; e < this.tracks.length; e++)
                t.push(this.tracks[e].clone());
            return new this.constructor(this.name,this.duration,t,this.blendMode)
        }
        toJSON() {
            return this.constructor.toJSON(this)
        }
    }
    function Mo(t) {
        if (void 0 === t.type)
            throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        const e = function(t) {
            switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return fo;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return yo;
            case "color":
                return mo;
            case "quaternion":
                return vo;
            case "bool":
            case "boolean":
                return po;
            case "string":
                return xo
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
        }(t.type);
        if (void 0 === t.times) {
            const e = []
              , n = [];
            ao.flattenJSON(t.keys, e, n, "value"),
            t.times = e,
            t.values = n
        }
        return void 0 !== e.parse ? e.parse(t) : new e(t.name,t.times,t.values,t.interpolation)
    }
    const bo = {
        enabled: !1,
        files: {},
        add: function(t, e) {
            !1 !== this.enabled && (this.files[t] = e)
        },
        get: function(t) {
            if (!1 !== this.enabled)
                return this.files[t]
        },
        remove: function(t) {
            delete this.files[t]
        },
        clear: function() {
            this.files = {}
        }
    };
    const wo = new class {
        constructor(t, e, n) {
            const i = this;
            let r, s = !1, a = 0, o = 0;
            const l = [];
            this.onStart = void 0,
            this.onLoad = t,
            this.onProgress = e,
            this.onError = n,
            this.itemStart = function(t) {
                o++,
                !1 === s && void 0 !== i.onStart && i.onStart(t, a, o),
                s = !0
            }
            ,
            this.itemEnd = function(t) {
                a++,
                void 0 !== i.onProgress && i.onProgress(t, a, o),
                a === o && (s = !1,
                void 0 !== i.onLoad && i.onLoad())
            }
            ,
            this.itemError = function(t) {
                void 0 !== i.onError && i.onError(t)
            }
            ,
            this.resolveURL = function(t) {
                return r ? r(t) : t
            }
            ,
            this.setURLModifier = function(t) {
                return r = t,
                this
            }
            ,
            this.addHandler = function(t, e) {
                return l.push(t, e),
                this
            }
            ,
            this.removeHandler = function(t) {
                const e = l.indexOf(t);
                return -1 !== e && l.splice(e, 2),
                this
            }
            ,
            this.getHandler = function(t) {
                for (let e = 0, n = l.length; e < n; e += 2) {
                    const n = l[e]
                      , i = l[e + 1];
                    if (n.global && (n.lastIndex = 0),
                    n.test(t))
                        return i
                }
                return null
            }
        }
    }
    ;
    class So {
        constructor(t) {
            this.manager = void 0 !== t ? t : wo,
            this.crossOrigin = "anonymous",
            this.withCredentials = !1,
            this.path = "",
            this.resourcePath = "",
            this.requestHeader = {}
        }
        load() {}
        loadAsync(t, e) {
            const n = this;
            return new Promise((function(i, r) {
                n.load(t, i, e, r)
            }
            ))
        }
        parse() {}
        setCrossOrigin(t) {
            return this.crossOrigin = t,
            this
        }
        setWithCredentials(t) {
            return this.withCredentials = t,
            this
        }
        setPath(t) {
            return this.path = t,
            this
        }
        setResourcePath(t) {
            return this.resourcePath = t,
            this
        }
        setRequestHeader(t) {
            return this.requestHeader = t,
            this
        }
    }
    const To = {};
    class Eo extends So {
        constructor(t) {
            super(t)
        }
        load(t, e, n, i) {
            void 0 === t && (t = ""),
            void 0 !== this.path && (t = this.path + t),
            t = this.manager.resolveURL(t);
            const r = bo.get(t);
            if (void 0 !== r)
                return this.manager.itemStart(t),
                setTimeout((()=>{
                    e && e(r),
                    this.manager.itemEnd(t)
                }
                ), 0),
                r;
            if (void 0 !== To[t])
                return void To[t].push({
                    onLoad: e,
                    onProgress: n,
                    onError: i
                });
            To[t] = [],
            To[t].push({
                onLoad: e,
                onProgress: n,
                onError: i
            });
            const s = new Request(t,{
                headers: new Headers(this.requestHeader),
                credentials: this.withCredentials ? "include" : "same-origin"
            });
            fetch(s).then((e=>{
                if (200 === e.status || 0 === e.status) {
                    0 === e.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
                    const n = To[t]
                      , i = e.body.getReader()
                      , r = e.headers.get("Content-Length")
                      , s = r ? parseInt(r) : 0
                      , a = 0 !== s;
                    let o = 0;
                    return new ReadableStream({
                        start(t) {
                            !function e() {
                                i.read().then((({done: i, value: r})=>{
                                    if (i)
                                        t.close();
                                    else {
                                        o += r.byteLength;
                                        const i = new ProgressEvent("progress",{
                                            lengthComputable: a,
                                            loaded: o,
                                            total: s
                                        });
                                        for (let t = 0, e = n.length; t < e; t++) {
                                            const e = n[t];
                                            e.onProgress && e.onProgress(i)
                                        }
                                        t.enqueue(r),
                                        e()
                                    }
                                }
                                ))
                            }()
                        }
                    })
                }
                throw Error(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`)
            }
            )).then((t=>{
                const e = new Response(t);
                switch (this.responseType) {
                case "arraybuffer":
                    return e.arrayBuffer();
                case "blob":
                    return e.blob();
                case "document":
                    return e.text().then((t=>(new DOMParser).parseFromString(t, this.mimeType)));
                case "json":
                    return e.json();
                default:
                    return e.text()
                }
            }
            )).then((e=>{
                bo.add(t, e);
                const n = To[t];
                delete To[t];
                for (let t = 0, i = n.length; t < i; t++) {
                    const i = n[t];
                    i.onLoad && i.onLoad(e)
                }
                this.manager.itemEnd(t)
            }
            )).catch((e=>{
                const n = To[t];
                delete To[t];
                for (let t = 0, i = n.length; t < i; t++) {
                    const i = n[t];
                    i.onError && i.onError(e)
                }
                this.manager.itemError(t),
                this.manager.itemEnd(t)
            }
            )),
            this.manager.itemStart(t)
        }
        setResponseType(t) {
            return this.responseType = t,
            this
        }
        setMimeType(t) {
            return this.mimeType = t,
            this
        }
    }
    class Ao extends So {
        constructor(t) {
            super(t)
        }
        load(t, e, n, i) {
            void 0 !== this.path && (t = this.path + t),
            t = this.manager.resolveURL(t);
            const r = this
              , s = bo.get(t);
            if (void 0 !== s)
                return r.manager.itemStart(t),
                setTimeout((function() {
                    e && e(s),
                    r.manager.itemEnd(t)
                }
                ), 0),
                s;
            const a = X("img");
            function o() {
                c(),
                bo.add(t, this),
                e && e(this),
                r.manager.itemEnd(t)
            }
            function l(e) {
                c(),
                i && i(e),
                r.manager.itemError(t),
                r.manager.itemEnd(t)
            }
            function c() {
                a.removeEventListener("load", o, !1),
                a.removeEventListener("error", l, !1)
            }
            return a.addEventListener("load", o, !1),
            a.addEventListener("error", l, !1),
            "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin),
            r.manager.itemStart(t),
            a.src = t,
            a
        }
    }
    class Lo extends So {
        constructor(t) {
            super(t)
        }
        load(t, e, n, i) {
            const r = new vn
              , s = new Ao(this.manager);
            s.setCrossOrigin(this.crossOrigin),
            s.setPath(this.path);
            let a = 0;
            function o(n) {
                s.load(t[n], (function(t) {
                    r.images[n] = t,
                    a++,
                    6 === a && (r.needsUpdate = !0,
                    e && e(r))
                }
                ), void 0, i)
            }
            for (let e = 0; e < t.length; ++e)
                o(e);
            return r
        }
    }
    class Ro extends So {
        constructor(t) {
            super(t)
        }
        load(t, e, n, i) {
            const r = new K
              , s = new Ao(this.manager);
            return s.setCrossOrigin(this.crossOrigin),
            s.setPath(this.path),
            s.load(t, (function(t) {
                r.image = t,
                r.needsUpdate = !0,
                void 0 !== e && e(r)
            }
            ), n, i),
            r
        }
    }
    class Co extends ae {
        constructor(t, e=1) {
            super(),
            this.type = "Light",
            this.color = new Ee(t),
            this.intensity = e
        }
        dispose() {}
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.intensity = t.intensity,
            this
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.color = this.color.getHex(),
            e.object.intensity = this.intensity,
            void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
            void 0 !== this.distance && (e.object.distance = this.distance),
            void 0 !== this.angle && (e.object.angle = this.angle),
            void 0 !== this.decay && (e.object.decay = this.decay),
            void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
            void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
            e
        }
    }
    Co.prototype.isLight = !0;
    (class extends Co {
        constructor(t, e, n) {
            super(t, n),
            this.type = "HemisphereLight",
            this.position.copy(ae.DefaultUp),
            this.updateMatrix(),
            this.groundColor = new Ee(e)
        }
        copy(t) {
            return Co.prototype.copy.call(this, t),
            this.groundColor.copy(t.groundColor),
            this
        }
    }
    ).prototype.isHemisphereLight = !0;
    const Po = new zt
      , Do = new rt
      , Io = new rt;
    class No {
        constructor(t) {
            this.camera = t,
            this.bias = 0,
            this.normalBias = 0,
            this.radius = 1,
            this.blurSamples = 8,
            this.mapSize = new W(512,512),
            this.map = null,
            this.mapPass = null,
            this.matrix = new zt,
            this.autoUpdate = !0,
            this.needsUpdate = !1,
            this._frustum = new Tn,
            this._frameExtents = new W(1,1),
            this._viewportCount = 1,
            this._viewports = [new tt(0,0,1,1)]
        }
        getViewportCount() {
            return this._viewportCount
        }
        getFrustum() {
            return this._frustum
        }
        updateMatrices(t) {
            const e = this.camera
              , n = this.matrix;
            Do.setFromMatrixPosition(t.matrixWorld),
            e.position.copy(Do),
            Io.setFromMatrixPosition(t.target.matrixWorld),
            e.lookAt(Io),
            e.updateMatrixWorld(),
            Po.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
            this._frustum.setFromProjectionMatrix(Po),
            n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
            n.multiply(e.projectionMatrix),
            n.multiply(e.matrixWorldInverse)
        }
        getViewport(t) {
            return this._viewports[t]
        }
        getFrameExtents() {
            return this._frameExtents
        }
        dispose() {
            this.map && this.map.dispose(),
            this.mapPass && this.mapPass.dispose()
        }
        copy(t) {
            return this.camera = t.camera.clone(),
            this.bias = t.bias,
            this.radius = t.radius,
            this.mapSize.copy(t.mapSize),
            this
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        toJSON() {
            const t = {};
            return 0 !== this.bias && (t.bias = this.bias),
            0 !== this.normalBias && (t.normalBias = this.normalBias),
            1 !== this.radius && (t.radius = this.radius),
            512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()),
            t.camera = this.camera.toJSON(!1).object,
            delete t.camera.matrix,
            t
        }
    }
    class zo extends No {
        constructor() {
            super(new mn(50,1,.5,500)),
            this.focus = 1
        }
        updateMatrices(t) {
            const e = this.camera
              , n = 2 * O * t.angle * this.focus
              , i = this.mapSize.width / this.mapSize.height
              , r = t.distance || e.far;
            n === e.fov && i === e.aspect && r === e.far || (e.fov = n,
            e.aspect = i,
            e.far = r,
            e.updateProjectionMatrix()),
            super.updateMatrices(t)
        }
        copy(t) {
            return super.copy(t),
            this.focus = t.focus,
            this
        }
    }
    zo.prototype.isSpotLightShadow = !0;
    (class extends Co {
        constructor(t, e, n=0, i=Math.PI / 3, r=0, s=1) {
            super(t, e),
            this.type = "SpotLight",
            this.position.copy(ae.DefaultUp),
            this.updateMatrix(),
            this.target = new ae,
            this.distance = n,
            this.angle = i,
            this.penumbra = r,
            this.decay = s,
            this.shadow = new zo
        }
        get power() {
            return this.intensity * Math.PI
        }
        set power(t) {
            this.intensity = t / Math.PI
        }
        dispose() {
            this.shadow.dispose()
        }
        copy(t) {
            return super.copy(t),
            this.distance = t.distance,
            this.angle = t.angle,
            this.penumbra = t.penumbra,
            this.decay = t.decay,
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }
    ).prototype.isSpotLight = !0;
    const Oo = new zt
      , Bo = new rt
      , Uo = new rt;
    class Fo extends No {
        constructor() {
            super(new mn(90,1,.5,500)),
            this._frameExtents = new W(4,2),
            this._viewportCount = 6,
            this._viewports = [new tt(2,1,1,1), new tt(0,1,1,1), new tt(3,1,1,1), new tt(1,1,1,1), new tt(3,0,1,1), new tt(1,0,1,1)],
            this._cubeDirections = [new rt(1,0,0), new rt(-1,0,0), new rt(0,0,1), new rt(0,0,-1), new rt(0,1,0), new rt(0,-1,0)],
            this._cubeUps = [new rt(0,1,0), new rt(0,1,0), new rt(0,1,0), new rt(0,1,0), new rt(0,0,1), new rt(0,0,-1)]
        }
        updateMatrices(t, e=0) {
            const n = this.camera
              , i = this.matrix
              , r = t.distance || n.far;
            r !== n.far && (n.far = r,
            n.updateProjectionMatrix()),
            Bo.setFromMatrixPosition(t.matrixWorld),
            n.position.copy(Bo),
            Uo.copy(n.position),
            Uo.add(this._cubeDirections[e]),
            n.up.copy(this._cubeUps[e]),
            n.lookAt(Uo),
            n.updateMatrixWorld(),
            i.makeTranslation(-Bo.x, -Bo.y, -Bo.z),
            Oo.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
            this._frustum.setFromProjectionMatrix(Oo)
        }
    }
    Fo.prototype.isPointLightShadow = !0;
    (class extends Co {
        constructor(t, e, n=0, i=1) {
            super(t, e),
            this.type = "PointLight",
            this.distance = n,
            this.decay = i,
            this.shadow = new Fo
        }
        get power() {
            return 4 * this.intensity * Math.PI
        }
        set power(t) {
            this.intensity = t / (4 * Math.PI)
        }
        dispose() {
            this.shadow.dispose()
        }
        copy(t) {
            return super.copy(t),
            this.distance = t.distance,
            this.decay = t.decay,
            this.shadow = t.shadow.clone(),
            this
        }
    }
    ).prototype.isPointLight = !0;
    class Ho extends No {
        constructor() {
            super(new Un(-5,5,5,-5,.5,500))
        }
    }
    Ho.prototype.isDirectionalLightShadow = !0;
    class Go extends Co {
        constructor(t, e) {
            super(t, e),
            this.type = "DirectionalLight",
            this.position.copy(ae.DefaultUp),
            this.updateMatrix(),
            this.target = new ae,
            this.shadow = new Ho
        }
        dispose() {
            this.shadow.dispose()
        }
        copy(t) {
            return super.copy(t),
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }
    Go.prototype.isDirectionalLight = !0;
    class Vo extends Co {
        constructor(t, e) {
            super(t, e),
            this.type = "AmbientLight"
        }
    }
    Vo.prototype.isAmbientLight = !0;
    (class extends Co {
        constructor(t, e, n=10, i=10) {
            super(t, e),
            this.type = "RectAreaLight",
            this.width = n,
            this.height = i
        }
        get power() {
            return this.intensity * this.width * this.height * Math.PI
        }
        set power(t) {
            this.intensity = t / (this.width * this.height * Math.PI)
        }
        copy(t) {
            return super.copy(t),
            this.width = t.width,
            this.height = t.height,
            this
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.width = this.width,
            e.object.height = this.height,
            e
        }
    }
    ).prototype.isRectAreaLight = !0;
    class ko {
        constructor() {
            this.coefficients = [];
            for (let t = 0; t < 9; t++)
                this.coefficients.push(new rt)
        }
        set(t) {
            for (let e = 0; e < 9; e++)
                this.coefficients[e].copy(t[e]);
            return this
        }
        zero() {
            for (let t = 0; t < 9; t++)
                this.coefficients[t].set(0, 0, 0);
            return this
        }
        getAt(t, e) {
            const n = t.x
              , i = t.y
              , r = t.z
              , s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.282095),
            e.addScaledVector(s[1], .488603 * i),
            e.addScaledVector(s[2], .488603 * r),
            e.addScaledVector(s[3], .488603 * n),
            e.addScaledVector(s[4], n * i * 1.092548),
            e.addScaledVector(s[5], i * r * 1.092548),
            e.addScaledVector(s[6], .315392 * (3 * r * r - 1)),
            e.addScaledVector(s[7], n * r * 1.092548),
            e.addScaledVector(s[8], .546274 * (n * n - i * i)),
            e
        }
        getIrradianceAt(t, e) {
            const n = t.x
              , i = t.y
              , r = t.z
              , s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.886227),
            e.addScaledVector(s[1], 1.023328 * i),
            e.addScaledVector(s[2], 1.023328 * r),
            e.addScaledVector(s[3], 1.023328 * n),
            e.addScaledVector(s[4], .858086 * n * i),
            e.addScaledVector(s[5], .858086 * i * r),
            e.addScaledVector(s[6], .743125 * r * r - .247708),
            e.addScaledVector(s[7], .858086 * n * r),
            e.addScaledVector(s[8], .429043 * (n * n - i * i)),
            e
        }
        add(t) {
            for (let e = 0; e < 9; e++)
                this.coefficients[e].add(t.coefficients[e]);
            return this
        }
        addScaledSH(t, e) {
            for (let n = 0; n < 9; n++)
                this.coefficients[n].addScaledVector(t.coefficients[n], e);
            return this
        }
        scale(t) {
            for (let e = 0; e < 9; e++)
                this.coefficients[e].multiplyScalar(t);
            return this
        }
        lerp(t, e) {
            for (let n = 0; n < 9; n++)
                this.coefficients[n].lerp(t.coefficients[n], e);
            return this
        }
        equals(t) {
            for (let e = 0; e < 9; e++)
                if (!this.coefficients[e].equals(t.coefficients[e]))
                    return !1;
            return !0
        }
        copy(t) {
            return this.set(t.coefficients)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        fromArray(t, e=0) {
            const n = this.coefficients;
            for (let i = 0; i < 9; i++)
                n[i].fromArray(t, e + 3 * i);
            return this
        }
        toArray(t=[], e=0) {
            const n = this.coefficients;
            for (let i = 0; i < 9; i++)
                n[i].toArray(t, e + 3 * i);
            return t
        }
        static getBasisAt(t, e) {
            const n = t.x
              , i = t.y
              , r = t.z;
            e[0] = .282095,
            e[1] = .488603 * i,
            e[2] = .488603 * r,
            e[3] = .488603 * n,
            e[4] = 1.092548 * n * i,
            e[5] = 1.092548 * i * r,
            e[6] = .315392 * (3 * r * r - 1),
            e[7] = 1.092548 * n * r,
            e[8] = .546274 * (n * n - i * i)
        }
    }
    ko.prototype.isSphericalHarmonics3 = !0;
    class Wo extends Co {
        constructor(t=new ko, e=1) {
            super(void 0, e),
            this.sh = t
        }
        copy(t) {
            return super.copy(t),
            this.sh.copy(t.sh),
            this
        }
        fromJSON(t) {
            return this.intensity = t.intensity,
            this.sh.fromArray(t.sh),
            this
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.sh = this.sh.toArray(),
            e
        }
    }
    Wo.prototype.isLightProbe = !0;
    let jo;
    (class extends Ge {
        constructor() {
            super(),
            this.type = "InstancedBufferGeometry",
            this.instanceCount = 1 / 0
        }
        copy(t) {
            return super.copy(t),
            this.instanceCount = t.instanceCount,
            this
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        toJSON() {
            const t = super.toJSON(this);
            return t.instanceCount = this.instanceCount,
            t.isInstancedBufferGeometry = !0,
            t
        }
    }
    ).prototype.isInstancedBufferGeometry = !0,
    class extends So {
        constructor(t) {
            super(t),
            "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),
            "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
            this.options = {
                premultiplyAlpha: "none"
            }
        }
        setOptions(t) {
            return this.options = t,
            this
        }
        load(t, e, n, i) {
            void 0 === t && (t = ""),
            void 0 !== this.path && (t = this.path + t),
            t = this.manager.resolveURL(t);
            const r = this
              , s = bo.get(t);
            if (void 0 !== s)
                return r.manager.itemStart(t),
                setTimeout((function() {
                    e && e(s),
                    r.manager.itemEnd(t)
                }
                ), 0),
                s;
            const a = {};
            a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include",
            a.headers = this.requestHeader,
            fetch(t, a).then((function(t) {
                return t.blob()
            }
            )).then((function(t) {
                return createImageBitmap(t, Object.assign(r.options, {
                    colorSpaceConversion: "none"
                }))
            }
            )).then((function(n) {
                bo.add(t, n),
                e && e(n),
                r.manager.itemEnd(t)
            }
            )).catch((function(e) {
                i && i(e),
                r.manager.itemError(t),
                r.manager.itemEnd(t)
            }
            )),
            r.manager.itemStart(t)
        }
    }
    .prototype.isImageBitmapLoader = !0;
    class qo extends So {
        constructor(t) {
            super(t)
        }
        load(t, e, n, i) {
            const r = this
              , s = new Eo(this.manager);
            s.setResponseType("arraybuffer"),
            s.setPath(this.path),
            s.setRequestHeader(this.requestHeader),
            s.setWithCredentials(this.withCredentials),
            s.load(t, (function(n) {
                try {
                    const t = n.slice(0);
                    (void 0 === jo && (jo = new (window.AudioContext || window.webkitAudioContext)),
                    jo).decodeAudioData(t, (function(t) {
                        e(t)
                    }
                    ))
                } catch (e) {
                    i ? i(e) : console.error(e),
                    r.manager.itemError(t)
                }
            }
            ), n, i)
        }
    }
    (class extends Wo {
        constructor(t, e, n=1) {
            super(void 0, n);
            const i = (new Ee).set(t)
              , r = (new Ee).set(e)
              , s = new rt(i.r,i.g,i.b)
              , a = new rt(r.r,r.g,r.b)
              , o = Math.sqrt(Math.PI)
              , l = o * Math.sqrt(.75);
            this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),
            this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)
        }
    }
    ).prototype.isHemisphereLightProbe = !0,
    class extends Wo {
        constructor(t, e=1) {
            super(void 0, e);
            const n = (new Ee).set(t);
            this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
        }
    }
    .prototype.isAmbientLightProbe = !0;
    function Xo() {
        return ("undefined" == typeof performance ? Date : performance).now()
    }
    class Yo {
        constructor(t, e, n) {
            let i, r, s;
            switch (this.binding = t,
            this.valueSize = n,
            e) {
            case "quaternion":
                i = this._slerp,
                r = this._slerpAdditive,
                s = this._setAdditiveIdentityQuaternion,
                this.buffer = new Float64Array(6 * n),
                this._workIndex = 5;
                break;
            case "string":
            case "bool":
                i = this._select,
                r = this._select,
                s = this._setAdditiveIdentityOther,
                this.buffer = new Array(5 * n);
                break;
            default:
                i = this._lerp,
                r = this._lerpAdditive,
                s = this._setAdditiveIdentityNumeric,
                this.buffer = new Float64Array(5 * n)
            }
            this._mixBufferRegion = i,
            this._mixBufferRegionAdditive = r,
            this._setIdentity = s,
            this._origIndex = 3,
            this._addIndex = 4,
            this.cumulativeWeight = 0,
            this.cumulativeWeightAdditive = 0,
            this.useCount = 0,
            this.referenceCount = 0
        }
        accumulate(t, e) {
            const n = this.buffer
              , i = this.valueSize
              , r = t * i + i;
            let s = this.cumulativeWeight;
            if (0 === s) {
                for (let t = 0; t !== i; ++t)
                    n[r + t] = n[t];
                s = e
            } else {
                s += e;
                const t = e / s;
                this._mixBufferRegion(n, r, 0, t, i)
            }
            this.cumulativeWeight = s
        }
        accumulateAdditive(t) {
            const e = this.buffer
              , n = this.valueSize
              , i = n * this._addIndex;
            0 === this.cumulativeWeightAdditive && this._setIdentity(),
            this._mixBufferRegionAdditive(e, i, 0, t, n),
            this.cumulativeWeightAdditive += t
        }
        apply(t) {
            const e = this.valueSize
              , n = this.buffer
              , i = t * e + e
              , r = this.cumulativeWeight
              , s = this.cumulativeWeightAdditive
              , a = this.binding;
            if (this.cumulativeWeight = 0,
            this.cumulativeWeightAdditive = 0,
            r < 1) {
                const t = e * this._origIndex;
                this._mixBufferRegion(n, i, t, 1 - r, e)
            }
            s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
            for (let t = e, r = e + e; t !== r; ++t)
                if (n[t] !== n[t + e]) {
                    a.setValue(n, i);
                    break
                }
        }
        saveOriginalState() {
            const t = this.binding
              , e = this.buffer
              , n = this.valueSize
              , i = n * this._origIndex;
            t.getValue(e, i);
            for (let t = n, r = i; t !== r; ++t)
                e[t] = e[i + t % n];
            this._setIdentity(),
            this.cumulativeWeight = 0,
            this.cumulativeWeightAdditive = 0
        }
        restoreOriginalState() {
            const t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t)
        }
        _setAdditiveIdentityNumeric() {
            const t = this._addIndex * this.valueSize
              , e = t + this.valueSize;
            for (let n = t; n < e; n++)
                this.buffer[n] = 0
        }
        _setAdditiveIdentityQuaternion() {
            this._setAdditiveIdentityNumeric(),
            this.buffer[this._addIndex * this.valueSize + 3] = 1
        }
        _setAdditiveIdentityOther() {
            const t = this._origIndex * this.valueSize
              , e = this._addIndex * this.valueSize;
            for (let n = 0; n < this.valueSize; n++)
                this.buffer[e + n] = this.buffer[t + n]
        }
        _select(t, e, n, i, r) {
            if (i >= .5)
                for (let i = 0; i !== r; ++i)
                    t[e + i] = t[n + i]
        }
        _slerp(t, e, n, i) {
            it.slerpFlat(t, e, t, e, t, n, i)
        }
        _slerpAdditive(t, e, n, i, r) {
            const s = this._workIndex * r;
            it.multiplyQuaternionsFlat(t, s, t, e, t, n),
            it.slerpFlat(t, e, t, e, t, s, i)
        }
        _lerp(t, e, n, i, r) {
            const s = 1 - i;
            for (let a = 0; a !== r; ++a) {
                const r = e + a;
                t[r] = t[r] * s + t[n + a] * i
            }
        }
        _lerpAdditive(t, e, n, i, r) {
            for (let s = 0; s !== r; ++s) {
                const r = e + s;
                t[r] = t[r] + t[n + s] * i
            }
        }
    }
    const Jo = new RegExp("[\\[\\]\\.:\\/]","g")
      , Zo = "[^\\[\\]\\.:\\/]"
      , Qo = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]"
      , Ko = /((?:WC+[\/:])*)/.source.replace("WC", Zo)
      , $o = /(WCOD+)?/.source.replace("WCOD", Qo)
      , tl = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Zo)
      , el = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Zo)
      , nl = new RegExp("^" + Ko + $o + tl + el + "$")
      , il = ["material", "materials", "bones"];
    class rl {
        constructor(t, e, n) {
            this.path = e,
            this.parsedPath = n || rl.parseTrackName(e),
            this.node = rl.findNode(t, this.parsedPath.nodeName) || t,
            this.rootNode = t,
            this.getValue = this._getValue_unbound,
            this.setValue = this._setValue_unbound
        }
        static create(t, e, n) {
            return t && t.isAnimationObjectGroup ? new rl.Composite(t,e,n) : new rl(t,e,n)
        }
        static sanitizeNodeName(t) {
            return t.replace(/\s/g, "_").replace(Jo, "")
        }
        static parseTrackName(t) {
            const e = nl.exec(t);
            if (!e)
                throw new Error("PropertyBinding: Cannot parse trackName: " + t);
            const n = {
                nodeName: e[2],
                objectName: e[3],
                objectIndex: e[4],
                propertyName: e[5],
                propertyIndex: e[6]
            }
              , i = n.nodeName && n.nodeName.lastIndexOf(".");
            if (void 0 !== i && -1 !== i) {
                const t = n.nodeName.substring(i + 1);
                -1 !== il.indexOf(t) && (n.nodeName = n.nodeName.substring(0, i),
                n.objectName = t)
            }
            if (null === n.propertyName || 0 === n.propertyName.length)
                throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
            return n
        }
        static findNode(t, e) {
            if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid)
                return t;
            if (t.skeleton) {
                const n = t.skeleton.getBoneByName(e);
                if (void 0 !== n)
                    return n
            }
            if (t.children) {
                const n = function(t) {
                    for (let i = 0; i < t.length; i++) {
                        const r = t[i];
                        if (r.name === e || r.uuid === e)
                            return r;
                        const s = n(r.children);
                        if (s)
                            return s
                    }
                    return null
                }
                  , i = n(t.children);
                if (i)
                    return i
            }
            return null
        }
        _getValue_unavailable() {}
        _setValue_unavailable() {}
        _getValue_direct(t, e) {
            t[e] = this.targetObject[this.propertyName]
        }
        _getValue_array(t, e) {
            const n = this.resolvedProperty;
            for (let i = 0, r = n.length; i !== r; ++i)
                t[e++] = n[i]
        }
        _getValue_arrayElement(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex]
        }
        _getValue_toArray(t, e) {
            this.resolvedProperty.toArray(t, e)
        }
        _setValue_direct(t, e) {
            this.targetObject[this.propertyName] = t[e]
        }
        _setValue_direct_setNeedsUpdate(t, e) {
            this.targetObject[this.propertyName] = t[e],
            this.targetObject.needsUpdate = !0
        }
        _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
            this.targetObject[this.propertyName] = t[e],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        _setValue_array(t, e) {
            const n = this.resolvedProperty;
            for (let i = 0, r = n.length; i !== r; ++i)
                n[i] = t[e++]
        }
        _setValue_array_setNeedsUpdate(t, e) {
            const n = this.resolvedProperty;
            for (let i = 0, r = n.length; i !== r; ++i)
                n[i] = t[e++];
            this.targetObject.needsUpdate = !0
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
            const n = this.resolvedProperty;
            for (let i = 0, r = n.length; i !== r; ++i)
                n[i] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        _setValue_arrayElement(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e]
        }
        _setValue_arrayElement_setNeedsUpdate(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e],
            this.targetObject.needsUpdate = !0
        }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        _setValue_fromArray(t, e) {
            this.resolvedProperty.fromArray(t, e)
        }
        _setValue_fromArray_setNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e),
            this.targetObject.needsUpdate = !0
        }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e),
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        _getValue_unbound(t, e) {
            this.bind(),
            this.getValue(t, e)
        }
        _setValue_unbound(t, e) {
            this.bind(),
            this.setValue(t, e)
        }
        bind() {
            let t = this.node;
            const e = this.parsedPath
              , n = e.objectName
              , i = e.propertyName;
            let r = e.propertyIndex;
            if (t || (t = rl.findNode(this.rootNode, e.nodeName) || this.rootNode,
            this.node = t),
            this.getValue = this._getValue_unavailable,
            this.setValue = this._setValue_unavailable,
            !t)
                return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
            if (n) {
                let i = e.objectIndex;
                switch (n) {
                case "materials":
                    if (!t.material)
                        return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                    if (!t.material.materials)
                        return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                    t = t.material.materials;
                    break;
                case "bones":
                    if (!t.skeleton)
                        return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                    t = t.skeleton.bones;
                    for (let e = 0; e < t.length; e++)
                        if (t[e].name === i) {
                            i = e;
                            break
                        }
                    break;
                default:
                    if (void 0 === t[n])
                        return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                    t = t[n]
                }
                if (void 0 !== i) {
                    if (void 0 === t[i])
                        return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                    t = t[i]
                }
            }
            const s = t[i];
            if (void 0 === s) {
                const n = e.nodeName;
                return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t)
            }
            let a = this.Versioning.None;
            this.targetObject = t,
            void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
            let o = this.BindingType.Direct;
            if (void 0 !== r) {
                if ("morphTargetInfluences" === i) {
                    if (!t.geometry)
                        return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    if (!t.geometry.isBufferGeometry)
                        return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                    if (!t.geometry.morphAttributes)
                        return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r])
                }
                o = this.BindingType.ArrayElement,
                this.resolvedProperty = s,
                this.propertyIndex = r
            } else
                void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray,
                this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray,
                this.resolvedProperty = s) : this.propertyName = i;
            this.getValue = this.GetterByBindingType[o],
            this.setValue = this.SetterByBindingTypeAndVersioning[o][a]
        }
        unbind() {
            this.node = null,
            this.getValue = this._getValue_unbound,
            this.setValue = this._setValue_unbound
        }
    }
    rl.Composite = class {
        constructor(t, e, n) {
            const i = n || rl.parseTrackName(e);
            this._targetGroup = t,
            this._bindings = t.subscribe_(e, i)
        }
        getValue(t, e) {
            this.bind();
            const n = this._targetGroup.nCachedObjects_
              , i = this._bindings[n];
            void 0 !== i && i.getValue(t, e)
        }
        setValue(t, e) {
            const n = this._bindings;
            for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
                n[i].setValue(t, e)
        }
        bind() {
            const t = this._bindings;
            for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
                t[e].bind()
        }
        unbind() {
            const t = this._bindings;
            for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
                t[e].unbind()
        }
    }
    ,
    rl.prototype.BindingType = {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    },
    rl.prototype.Versioning = {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    },
    rl.prototype.GetterByBindingType = [rl.prototype._getValue_direct, rl.prototype._getValue_array, rl.prototype._getValue_arrayElement, rl.prototype._getValue_toArray],
    rl.prototype.SetterByBindingTypeAndVersioning = [[rl.prototype._setValue_direct, rl.prototype._setValue_direct_setNeedsUpdate, rl.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [rl.prototype._setValue_array, rl.prototype._setValue_array_setNeedsUpdate, rl.prototype._setValue_array_setMatrixWorldNeedsUpdate], [rl.prototype._setValue_arrayElement, rl.prototype._setValue_arrayElement_setNeedsUpdate, rl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [rl.prototype._setValue_fromArray, rl.prototype._setValue_fromArray_setNeedsUpdate, rl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
    class sl {
        constructor(t, e, n=null, i=e.blendMode) {
            this._mixer = t,
            this._clip = e,
            this._localRoot = n,
            this.blendMode = i;
            const r = e.tracks
              , s = r.length
              , a = new Array(s)
              , o = {
                endingStart: w,
                endingEnd: w
            };
            for (let t = 0; t !== s; ++t) {
                const e = r[t].createInterpolant(null);
                a[t] = e,
                e.settings = o
            }
            this._interpolantSettings = o,
            this._interpolants = a,
            this._propertyBindings = new Array(s),
            this._cacheIndex = null,
            this._byClipCacheIndex = null,
            this._timeScaleInterpolant = null,
            this._weightInterpolant = null,
            this.loop = 2201,
            this._loopCount = -1,
            this._startTime = null,
            this.time = 0,
            this.timeScale = 1,
            this._effectiveTimeScale = 1,
            this.weight = 1,
            this._effectiveWeight = 1,
            this.repetitions = 1 / 0,
            this.paused = !1,
            this.enabled = !0,
            this.clampWhenFinished = !1,
            this.zeroSlopeAtStart = !0,
            this.zeroSlopeAtEnd = !0
        }
        play() {
            return this._mixer._activateAction(this),
            this
        }
        stop() {
            return this._mixer._deactivateAction(this),
            this.reset()
        }
        reset() {
            return this.paused = !1,
            this.enabled = !0,
            this.time = 0,
            this._loopCount = -1,
            this._startTime = null,
            this.stopFading().stopWarping()
        }
        isRunning() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        }
        isScheduled() {
            return this._mixer._isActiveAction(this)
        }
        startAt(t) {
            return this._startTime = t,
            this
        }
        setLoop(t, e) {
            return this.loop = t,
            this.repetitions = e,
            this
        }
        setEffectiveWeight(t) {
            return this.weight = t,
            this._effectiveWeight = this.enabled ? t : 0,
            this.stopFading()
        }
        getEffectiveWeight() {
            return this._effectiveWeight
        }
        fadeIn(t) {
            return this._scheduleFading(t, 0, 1)
        }
        fadeOut(t) {
            return this._scheduleFading(t, 1, 0)
        }
        crossFadeFrom(t, e, n) {
            if (t.fadeOut(e),
            this.fadeIn(e),
            n) {
                const n = this._clip.duration
                  , i = t._clip.duration
                  , r = i / n
                  , s = n / i;
                t.warp(1, r, e),
                this.warp(s, 1, e)
            }
            return this
        }
        crossFadeTo(t, e, n) {
            return t.crossFadeFrom(this, e, n)
        }
        stopFading() {
            const t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null,
            this._mixer._takeBackControlInterpolant(t)),
            this
        }
        setEffectiveTimeScale(t) {
            return this.timeScale = t,
            this._effectiveTimeScale = this.paused ? 0 : t,
            this.stopWarping()
        }
        getEffectiveTimeScale() {
            return this._effectiveTimeScale
        }
        setDuration(t) {
            return this.timeScale = this._clip.duration / t,
            this.stopWarping()
        }
        syncWith(t) {
            return this.time = t.time,
            this.timeScale = t.timeScale,
            this.stopWarping()
        }
        halt(t) {
            return this.warp(this._effectiveTimeScale, 0, t)
        }
        warp(t, e, n) {
            const i = this._mixer
              , r = i.time
              , s = this.timeScale;
            let a = this._timeScaleInterpolant;
            null === a && (a = i._lendControlInterpolant(),
            this._timeScaleInterpolant = a);
            const o = a.parameterPositions
              , l = a.sampleValues;
            return o[0] = r,
            o[1] = r + n,
            l[0] = t / s,
            l[1] = e / s,
            this
        }
        stopWarping() {
            const t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null,
            this._mixer._takeBackControlInterpolant(t)),
            this
        }
        getMixer() {
            return this._mixer
        }
        getClip() {
            return this._clip
        }
        getRoot() {
            return this._localRoot || this._mixer._root
        }
        _update(t, e, n, i) {
            if (!this.enabled)
                return void this._updateWeight(t);
            const r = this._startTime;
            if (null !== r) {
                const i = (t - r) * n;
                if (i < 0 || 0 === n)
                    return;
                this._startTime = null,
                e = n * i
            }
            e *= this._updateTimeScale(t);
            const s = this._updateTime(e)
              , a = this._updateWeight(t);
            if (a > 0) {
                const t = this._interpolants
                  , e = this._propertyBindings;
                if (2501 === this.blendMode)
                    for (let n = 0, i = t.length; n !== i; ++n)
                        t[n].evaluate(s),
                        e[n].accumulateAdditive(a);
                else
                    for (let n = 0, r = t.length; n !== r; ++n)
                        t[n].evaluate(s),
                        e[n].accumulate(i, a)
            }
        }
        _updateWeight(t) {
            let e = 0;
            if (this.enabled) {
                e = this.weight;
                const n = this._weightInterpolant;
                if (null !== n) {
                    const i = n.evaluate(t)[0];
                    e *= i,
                    t > n.parameterPositions[1] && (this.stopFading(),
                    0 === i && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = e,
            e
        }
        _updateTimeScale(t) {
            let e = 0;
            if (!this.paused) {
                e = this.timeScale;
                const n = this._timeScaleInterpolant;
                null !== n && (e *= n.evaluate(t)[0],
                t > n.parameterPositions[1] && (this.stopWarping(),
                0 === e ? this.paused = !0 : this.timeScale = e))
            }
            return this._effectiveTimeScale = e,
            e
        }
        _updateTime(t) {
            const e = this._clip.duration
              , n = this.loop;
            let i = this.time + t
              , r = this._loopCount;
            const s = 2202 === n;
            if (0 === t)
                return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
            if (2200 === n) {
                -1 === r && (this._loopCount = 0,
                this._setEndings(!0, !0, !1));
                t: {
                    if (i >= e)
                        i = e;
                    else {
                        if (!(i < 0)) {
                            this.time = i;
                            break t
                        }
                        i = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    this.time = i,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t < 0 ? -1 : 1
                    })
                }
            } else {
                if (-1 === r && (t >= 0 ? (r = 0,
                this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)),
                i >= e || i < 0) {
                    const n = Math.floor(i / e);
                    i -= e * n,
                    r += Math.abs(n);
                    const a = this.repetitions - r;
                    if (a <= 0)
                        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                        i = t > 0 ? e : 0,
                        this.time = i,
                        this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: t > 0 ? 1 : -1
                        });
                    else {
                        if (1 === a) {
                            const e = t < 0;
                            this._setEndings(e, !e, s)
                        } else
                            this._setEndings(!1, !1, s);
                        this._loopCount = r,
                        this.time = i,
                        this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: n
                        })
                    }
                } else
                    this.time = i;
                if (s && 1 == (1 & r))
                    return e - i
            }
            return i
        }
        _setEndings(t, e, n) {
            const i = this._interpolantSettings;
            n ? (i.endingStart = S,
            i.endingEnd = S) : (i.endingStart = t ? this.zeroSlopeAtStart ? S : w : T,
            i.endingEnd = e ? this.zeroSlopeAtEnd ? S : w : T)
        }
        _scheduleFading(t, e, n) {
            const i = this._mixer
              , r = i.time;
            let s = this._weightInterpolant;
            null === s && (s = i._lendControlInterpolant(),
            this._weightInterpolant = s);
            const a = s.parameterPositions
              , o = s.sampleValues;
            return a[0] = r,
            o[0] = e,
            a[1] = r + t,
            o[1] = n,
            this
        }
    }
    (class extends N {
        constructor(t) {
            super(),
            this._root = t,
            this._initMemoryManager(),
            this._accuIndex = 0,
            this.time = 0,
            this.timeScale = 1
        }
        _bindAction(t, e) {
            const n = t._localRoot || this._root
              , i = t._clip.tracks
              , r = i.length
              , s = t._propertyBindings
              , a = t._interpolants
              , o = n.uuid
              , l = this._bindingsByRootAndName;
            let c = l[o];
            void 0 === c && (c = {},
            l[o] = c);
            for (let t = 0; t !== r; ++t) {
                const r = i[t]
                  , l = r.name;
                let h = c[l];
                if (void 0 !== h)
                    s[t] = h;
                else {
                    if (h = s[t],
                    void 0 !== h) {
                        null === h._cacheIndex && (++h.referenceCount,
                        this._addInactiveBinding(h, o, l));
                        continue
                    }
                    const i = e && e._propertyBindings[t].binding.parsedPath;
                    h = new Yo(rl.create(n, l, i),r.ValueTypeName,r.getValueSize()),
                    ++h.referenceCount,
                    this._addInactiveBinding(h, o, l),
                    s[t] = h
                }
                a[t].resultBuffer = h.buffer
            }
        }
        _activateAction(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    const e = (t._localRoot || this._root).uuid
                      , n = t._clip.uuid
                      , i = this._actionsByClip[n];
                    this._bindAction(t, i && i.knownActions[0]),
                    this._addInactiveAction(t, n, e)
                }
                const e = t._propertyBindings;
                for (let t = 0, n = e.length; t !== n; ++t) {
                    const n = e[t];
                    0 == n.useCount++ && (this._lendBinding(n),
                    n.saveOriginalState())
                }
                this._lendAction(t)
            }
        }
        _deactivateAction(t) {
            if (this._isActiveAction(t)) {
                const e = t._propertyBindings;
                for (let t = 0, n = e.length; t !== n; ++t) {
                    const n = e[t];
                    0 == --n.useCount && (n.restoreOriginalState(),
                    this._takeBackBinding(n))
                }
                this._takeBackAction(t)
            }
        }
        _initMemoryManager() {
            this._actions = [],
            this._nActiveActions = 0,
            this._actionsByClip = {},
            this._bindings = [],
            this._nActiveBindings = 0,
            this._bindingsByRootAndName = {},
            this._controlInterpolants = [],
            this._nActiveControlInterpolants = 0;
            const t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length
                    },
                    get inUse() {
                        return t._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return t._bindings.length
                    },
                    get inUse() {
                        return t._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length
                    },
                    get inUse() {
                        return t._nActiveControlInterpolants
                    }
                }
            }
        }
        _isActiveAction(t) {
            const e = t._cacheIndex;
            return null !== e && e < this._nActiveActions
        }
        _addInactiveAction(t, e, n) {
            const i = this._actions
              , r = this._actionsByClip;
            let s = r[e];
            if (void 0 === s)
                s = {
                    knownActions: [t],
                    actionByRoot: {}
                },
                t._byClipCacheIndex = 0,
                r[e] = s;
            else {
                const e = s.knownActions;
                t._byClipCacheIndex = e.length,
                e.push(t)
            }
            t._cacheIndex = i.length,
            i.push(t),
            s.actionByRoot[n] = t
        }
        _removeInactiveAction(t) {
            const e = this._actions
              , n = e[e.length - 1]
              , i = t._cacheIndex;
            n._cacheIndex = i,
            e[i] = n,
            e.pop(),
            t._cacheIndex = null;
            const r = t._clip.uuid
              , s = this._actionsByClip
              , a = s[r]
              , o = a.knownActions
              , l = o[o.length - 1]
              , c = t._byClipCacheIndex;
            l._byClipCacheIndex = c,
            o[c] = l,
            o.pop(),
            t._byClipCacheIndex = null,
            delete a.actionByRoot[(t._localRoot || this._root).uuid],
            0 === o.length && delete s[r],
            this._removeInactiveBindingsForAction(t)
        }
        _removeInactiveBindingsForAction(t) {
            const e = t._propertyBindings;
            for (let t = 0, n = e.length; t !== n; ++t) {
                const n = e[t];
                0 == --n.referenceCount && this._removeInactiveBinding(n)
            }
        }
        _lendAction(t) {
            const e = this._actions
              , n = t._cacheIndex
              , i = this._nActiveActions++
              , r = e[i];
            t._cacheIndex = i,
            e[i] = t,
            r._cacheIndex = n,
            e[n] = r
        }
        _takeBackAction(t) {
            const e = this._actions
              , n = t._cacheIndex
              , i = --this._nActiveActions
              , r = e[i];
            t._cacheIndex = i,
            e[i] = t,
            r._cacheIndex = n,
            e[n] = r
        }
        _addInactiveBinding(t, e, n) {
            const i = this._bindingsByRootAndName
              , r = this._bindings;
            let s = i[e];
            void 0 === s && (s = {},
            i[e] = s),
            s[n] = t,
            t._cacheIndex = r.length,
            r.push(t)
        }
        _removeInactiveBinding(t) {
            const e = this._bindings
              , n = t.binding
              , i = n.rootNode.uuid
              , r = n.path
              , s = this._bindingsByRootAndName
              , a = s[i]
              , o = e[e.length - 1]
              , l = t._cacheIndex;
            o._cacheIndex = l,
            e[l] = o,
            e.pop(),
            delete a[r],
            0 === Object.keys(a).length && delete s[i]
        }
        _lendBinding(t) {
            const e = this._bindings
              , n = t._cacheIndex
              , i = this._nActiveBindings++
              , r = e[i];
            t._cacheIndex = i,
            e[i] = t,
            r._cacheIndex = n,
            e[n] = r
        }
        _takeBackBinding(t) {
            const e = this._bindings
              , n = t._cacheIndex
              , i = --this._nActiveBindings
              , r = e[i];
            t._cacheIndex = i,
            e[i] = t,
            r._cacheIndex = n,
            e[n] = r
        }
        _lendControlInterpolant() {
            const t = this._controlInterpolants
              , e = this._nActiveControlInterpolants++;
            let n = t[e];
            return void 0 === n && (n = new co(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),
            n.__cacheIndex = e,
            t[e] = n),
            n
        }
        _takeBackControlInterpolant(t) {
            const e = this._controlInterpolants
              , n = t.__cacheIndex
              , i = --this._nActiveControlInterpolants
              , r = e[i];
            t.__cacheIndex = i,
            e[i] = t,
            r.__cacheIndex = n,
            e[n] = r
        }
        clipAction(t, e, n) {
            const i = e || this._root
              , r = i.uuid;
            let s = "string" == typeof t ? _o.findByName(i, t) : t;
            const a = null !== s ? s.uuid : t
              , o = this._actionsByClip[a];
            let l = null;
            if (void 0 === n && (n = null !== s ? s.blendMode : 2500),
            void 0 !== o) {
                const t = o.actionByRoot[r];
                if (void 0 !== t && t.blendMode === n)
                    return t;
                l = o.knownActions[0],
                null === s && (s = l._clip)
            }
            if (null === s)
                return null;
            const c = new sl(this,s,e,n);
            return this._bindAction(c, l),
            this._addInactiveAction(c, a, r),
            c
        }
        existingAction(t, e) {
            const n = e || this._root
              , i = n.uuid
              , r = "string" == typeof t ? _o.findByName(n, t) : t
              , s = r ? r.uuid : t
              , a = this._actionsByClip[s];
            return void 0 !== a && a.actionByRoot[i] || null
        }
        stopAllAction() {
            const t = this._actions;
            for (let e = this._nActiveActions - 1; e >= 0; --e)
                t[e].stop();
            return this
        }
        update(t) {
            t *= this.timeScale;
            const e = this._actions
              , n = this._nActiveActions
              , i = this.time += t
              , r = Math.sign(t)
              , s = this._accuIndex ^= 1;
            for (let a = 0; a !== n; ++a)
                e[a]._update(i, t, r, s);
            const a = this._bindings
              , o = this._nActiveBindings;
            for (let t = 0; t !== o; ++t)
                a[t].apply(s);
            return this
        }
        setTime(t) {
            this.time = 0;
            for (let t = 0; t < this._actions.length; t++)
                this._actions[t].time = 0;
            return this.update(t)
        }
        getRoot() {
            return this._root
        }
        uncacheClip(t) {
            const e = this._actions
              , n = t.uuid
              , i = this._actionsByClip
              , r = i[n];
            if (void 0 !== r) {
                const t = r.knownActions;
                for (let n = 0, i = t.length; n !== i; ++n) {
                    const i = t[n];
                    this._deactivateAction(i);
                    const r = i._cacheIndex
                      , s = e[e.length - 1];
                    i._cacheIndex = null,
                    i._byClipCacheIndex = null,
                    s._cacheIndex = r,
                    e[r] = s,
                    e.pop(),
                    this._removeInactiveBindingsForAction(i)
                }
                delete i[n]
            }
        }
        uncacheRoot(t) {
            const e = t.uuid
              , n = this._actionsByClip;
            for (const t in n) {
                const i = n[t].actionByRoot[e];
                void 0 !== i && (this._deactivateAction(i),
                this._removeInactiveAction(i))
            }
            const i = this._bindingsByRootAndName[e];
            if (void 0 !== i)
                for (const t in i) {
                    const e = i[t];
                    e.restoreOriginalState(),
                    this._removeInactiveBinding(e)
                }
        }
        uncacheAction(t, e) {
            const n = this.existingAction(t, e);
            null !== n && (this._deactivateAction(n),
            this._removeInactiveAction(n))
        }
    }
    ).prototype._controlInterpolantsResultBuffer = new Float32Array(1);
    class al {
        constructor(t) {
            "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."),
            t = arguments[1]),
            this.value = t
        }
        clone() {
            return new al(void 0 === this.value.clone ? this.value : this.value.clone())
        }
    }
    (class extends ms {
        constructor(t, e, n=1) {
            super(t, e),
            this.meshPerAttribute = n
        }
        copy(t) {
            return super.copy(t),
            this.meshPerAttribute = t.meshPerAttribute,
            this
        }
        clone(t) {
            const e = super.clone(t);
            return e.meshPerAttribute = this.meshPerAttribute,
            e
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.isInstancedInterleavedBuffer = !0,
            e.meshPerAttribute = this.meshPerAttribute,
            e
        }
    }
    ).prototype.isInstancedInterleavedBuffer = !0;
    const ol = new W;
    class ll {
        constructor(t=new W(1 / 0,1 / 0), e=new W(-1 / 0,-1 / 0)) {
            this.min = t,
            this.max = e
        }
        set(t, e) {
            return this.min.copy(t),
            this.max.copy(e),
            this
        }
        setFromPoints(t) {
            this.makeEmpty();
            for (let e = 0, n = t.length; e < n; e++)
                this.expandByPoint(t[e]);
            return this
        }
        setFromCenterAndSize(t, e) {
            const n = ol.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n),
            this.max.copy(t).add(n),
            this
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.min.copy(t.min),
            this.max.copy(t.max),
            this
        }
        makeEmpty() {
            return this.min.x = this.min.y = 1 / 0,
            this.max.x = this.max.y = -1 / 0,
            this
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        }
        getCenter(t) {
            return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        }
        getSize(t) {
            return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
        }
        expandByPoint(t) {
            return this.min.min(t),
            this.max.max(t),
            this
        }
        expandByVector(t) {
            return this.min.sub(t),
            this.max.add(t),
            this
        }
        expandByScalar(t) {
            return this.min.addScalar(-t),
            this.max.addScalar(t),
            this
        }
        containsPoint(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        }
        getParameter(t, e) {
            return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        }
        intersectsBox(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        }
        clampPoint(t, e) {
            return e.copy(t).clamp(this.min, this.max)
        }
        distanceToPoint(t) {
            return ol.copy(t).clamp(this.min, this.max).sub(t).length()
        }
        intersect(t) {
            return this.min.max(t.min),
            this.max.min(t.max),
            this
        }
        union(t) {
            return this.min.min(t.min),
            this.max.max(t.max),
            this
        }
        translate(t) {
            return this.min.add(t),
            this.max.add(t),
            this
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }
    ll.prototype.isBox2 = !0;
    const cl = new rt
      , hl = new zt
      , ul = new zt;
    function dl(t) {
        const e = [];
        t && t.isBone && e.push(t);
        for (let n = 0; n < t.children.length; n++)
            e.push.apply(e, dl(t.children[n]));
        return e
    }
    const pl = new Float32Array(1);
    new Int32Array(pl.buffer),
    aa.create = function(t, e) {
        return console.log("THREE.Curve.create() has been deprecated"),
        t.prototype = Object.create(aa.prototype),
        t.prototype.constructor = t,
        t.prototype.getPoint = e,
        t
    }
    ,
    Ea.prototype.fromPoints = function(t) {
        return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),
        this.setFromPoints(t)
    }
    ,
    class extends Ks {
        constructor(t=10, e=10, n=4473924, i=8947848) {
            n = new Ee(n),
            i = new Ee(i);
            const r = e / 2
              , s = t / e
              , a = t / 2
              , o = []
              , l = [];
            for (let t = 0, c = 0, h = -a; t <= e; t++,
            h += s) {
                o.push(-a, 0, h, a, 0, h),
                o.push(h, 0, -a, h, 0, a);
                const e = t === r ? n : i;
                e.toArray(l, c),
                c += 3,
                e.toArray(l, c),
                c += 3,
                e.toArray(l, c),
                c += 3,
                e.toArray(l, c),
                c += 3
            }
            const c = new Ge;
            c.setAttribute("position", new Ie(o,3)),
            c.setAttribute("color", new Ie(l,3)),
            super(c, new ks({
                vertexColors: !0,
                toneMapped: !1
            })),
            this.type = "GridHelper"
        }
    }
    .prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }
    ,
    class extends Ks {
        constructor(t) {
            const e = dl(t)
              , n = new Ge
              , i = []
              , r = []
              , s = new Ee(0,0,1)
              , a = new Ee(0,1,0);
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                n.parent && n.parent.isBone && (i.push(0, 0, 0),
                i.push(0, 0, 0),
                r.push(s.r, s.g, s.b),
                r.push(a.r, a.g, a.b))
            }
            n.setAttribute("position", new Ie(i,3)),
            n.setAttribute("color", new Ie(r,3)),
            super(n, new ks({
                vertexColors: !0,
                depthTest: !1,
                depthWrite: !1,
                toneMapped: !1,
                transparent: !0
            })),
            this.type = "SkeletonHelper",
            this.isSkeletonHelper = !0,
            this.root = t,
            this.bones = e,
            this.matrix = t.matrixWorld,
            this.matrixAutoUpdate = !1
        }
        updateMatrixWorld(t) {
            const e = this.bones
              , n = this.geometry
              , i = n.getAttribute("position");
            ul.copy(this.root.matrixWorld).invert();
            for (let t = 0, n = 0; t < e.length; t++) {
                const r = e[t];
                r.parent && r.parent.isBone && (hl.multiplyMatrices(ul, r.matrixWorld),
                cl.setFromMatrixPosition(hl),
                i.setXYZ(n, cl.x, cl.y, cl.z),
                hl.multiplyMatrices(ul, r.parent.matrixWorld),
                cl.setFromMatrixPosition(hl),
                i.setXYZ(n + 1, cl.x, cl.y, cl.z),
                n += 2)
            }
            n.getAttribute("position").needsUpdate = !0,
            super.updateMatrixWorld(t)
        }
    }
    .prototype.update = function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
    }
    ,
    So.prototype.extractUrlBase = function(t) {
        return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),
        class {
            static decodeText(t) {
                if ("undefined" != typeof TextDecoder)
                    return (new TextDecoder).decode(t);
                let e = "";
                for (let n = 0, i = t.length; n < i; n++)
                    e += String.fromCharCode(t[n]);
                try {
                    return decodeURIComponent(escape(e))
                } catch (t) {
                    return e
                }
            }
            static extractUrlBase(t) {
                const e = t.lastIndexOf("/");
                return -1 === e ? "./" : t.substr(0, e + 1)
            }
            static resolveURL(t, e) {
                return "string" != typeof t || "" === t ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
                /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t)
            }
        }
        .extractUrlBase(t)
    }
    ,
    So.Handlers = {
        add: function() {
            console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
        },
        get: function() {
            console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
        }
    },
    ll.prototype.center = function(t) {
        return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),
        this.getCenter(t)
    }
    ,
    ll.prototype.empty = function() {
        return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
        this.isEmpty()
    }
    ,
    ll.prototype.isIntersectionBox = function(t) {
        return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),
        this.intersectsBox(t)
    }
    ,
    ll.prototype.size = function(t) {
        return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
        this.getSize(t)
    }
    ,
    ot.prototype.center = function(t) {
        return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
        this.getCenter(t)
    }
    ,
    ot.prototype.empty = function() {
        return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
        this.isEmpty()
    }
    ,
    ot.prototype.isIntersectionBox = function(t) {
        return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
        this.intersectsBox(t)
    }
    ,
    ot.prototype.isIntersectionSphere = function(t) {
        return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
        this.intersectsSphere(t)
    }
    ,
    ot.prototype.size = function(t) {
        return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
        this.getSize(t)
    }
    ,
    Et.prototype.empty = function() {
        return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),
        this.isEmpty()
    }
    ,
    Tn.prototype.setFromMatrix = function(t) {
        return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),
        this.setFromProjectionMatrix(t)
    }
    ,
    j.prototype.flattenToArrayOffset = function(t, e) {
        return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
        this.toArray(t, e)
    }
    ,
    j.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
        t.applyMatrix3(this)
    }
    ,
    j.prototype.multiplyVector3Array = function() {
        console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
    }
    ,
    j.prototype.applyToBufferAttribute = function(t) {
        return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),
        t.applyMatrix3(this)
    }
    ,
    j.prototype.applyToVector3Array = function() {
        console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
    }
    ,
    j.prototype.getInverse = function(t) {
        return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),
        this.copy(t).invert()
    }
    ,
    zt.prototype.extractPosition = function(t) {
        return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
        this.copyPosition(t)
    }
    ,
    zt.prototype.flattenToArrayOffset = function(t, e) {
        return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
        this.toArray(t, e)
    }
    ,
    zt.prototype.getPosition = function() {
        return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
        (new rt).setFromMatrixColumn(this, 3)
    }
    ,
    zt.prototype.setRotationFromQuaternion = function(t) {
        return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
        this.makeRotationFromQuaternion(t)
    }
    ,
    zt.prototype.multiplyToArray = function() {
        console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
    }
    ,
    zt.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),
        t.applyMatrix4(this)
    }
    ,
    zt.prototype.multiplyVector4 = function(t) {
        return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
        t.applyMatrix4(this)
    }
    ,
    zt.prototype.multiplyVector3Array = function() {
        console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
    }
    ,
    zt.prototype.rotateAxis = function(t) {
        console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
        t.transformDirection(this)
    }
    ,
    zt.prototype.crossVector = function(t) {
        return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
        t.applyMatrix4(this)
    }
    ,
    zt.prototype.translate = function() {
        console.error("THREE.Matrix4: .translate() has been removed.")
    }
    ,
    zt.prototype.rotateX = function() {
        console.error("THREE.Matrix4: .rotateX() has been removed.")
    }
    ,
    zt.prototype.rotateY = function() {
        console.error("THREE.Matrix4: .rotateY() has been removed.")
    }
    ,
    zt.prototype.rotateZ = function() {
        console.error("THREE.Matrix4: .rotateZ() has been removed.")
    }
    ,
    zt.prototype.rotateByAxis = function() {
        console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
    }
    ,
    zt.prototype.applyToBufferAttribute = function(t) {
        return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),
        t.applyMatrix4(this)
    }
    ,
    zt.prototype.applyToVector3Array = function() {
        console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
    }
    ,
    zt.prototype.makeFrustum = function(t, e, n, i, r, s) {
        return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),
        this.makePerspective(t, e, i, n, r, s)
    }
    ,
    zt.prototype.getInverse = function(t) {
        return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),
        this.copy(t).invert()
    }
    ,
    bn.prototype.isIntersectionLine = function(t) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
        this.intersectsLine(t)
    }
    ,
    it.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
        t.applyQuaternion(this)
    }
    ,
    it.prototype.inverse = function() {
        return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),
        this.invert()
    }
    ,
    Nt.prototype.isIntersectionBox = function(t) {
        return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
        this.intersectsBox(t)
    }
    ,
    Nt.prototype.isIntersectionPlane = function(t) {
        return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
        this.intersectsPlane(t)
    }
    ,
    Nt.prototype.isIntersectionSphere = function(t) {
        return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
        this.intersectsSphere(t)
    }
    ,
    ve.prototype.area = function() {
        return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),
        this.getArea()
    }
    ,
    ve.prototype.barycoordFromPoint = function(t, e) {
        return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
        this.getBarycoord(t, e)
    }
    ,
    ve.prototype.midpoint = function(t) {
        return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),
        this.getMidpoint(t)
    }
    ,
    ve.prototypenormal = function(t) {
        return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
        this.getNormal(t)
    }
    ,
    ve.prototype.plane = function(t) {
        return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),
        this.getPlane(t)
    }
    ,
    ve.barycoordFromPoint = function(t, e, n, i, r) {
        return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
        ve.getBarycoord(t, e, n, i, r)
    }
    ,
    ve.normal = function(t, e, n, i) {
        return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
        ve.getNormal(t, e, n, i)
    }
    ,
    Aa.prototype.extractAllPoints = function(t) {
        return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),
        this.extractPoints(t)
    }
    ,
    Aa.prototype.extrude = function(t) {
        return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),
        new eo(this,t)
    }
    ,
    Aa.prototype.makeGeometry = function(t) {
        return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),
        new io(this,t)
    }
    ,
    W.prototype.fromAttribute = function(t, e, n) {
        return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),
        this.fromBufferAttribute(t, e, n)
    }
    ,
    W.prototype.distanceToManhattan = function(t) {
        return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
        this.manhattanDistanceTo(t)
    }
    ,
    W.prototype.lengthManhattan = function() {
        return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),
        this.manhattanLength()
    }
    ,
    rt.prototype.setEulerFromRotationMatrix = function() {
        console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
    }
    ,
    rt.prototype.setEulerFromQuaternion = function() {
        console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
    }
    ,
    rt.prototype.getPositionFromMatrix = function(t) {
        return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
        this.setFromMatrixPosition(t)
    }
    ,
    rt.prototype.getScaleFromMatrix = function(t) {
        return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
        this.setFromMatrixScale(t)
    }
    ,
    rt.prototype.getColumnFromMatrix = function(t, e) {
        return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
        this.setFromMatrixColumn(e, t)
    }
    ,
    rt.prototype.applyProjection = function(t) {
        return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),
        this.applyMatrix4(t)
    }
    ,
    rt.prototype.fromAttribute = function(t, e, n) {
        return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),
        this.fromBufferAttribute(t, e, n)
    }
    ,
    rt.prototype.distanceToManhattan = function(t) {
        return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
        this.manhattanDistanceTo(t)
    }
    ,
    rt.prototype.lengthManhattan = function() {
        return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),
        this.manhattanLength()
    }
    ,
    tt.prototype.fromAttribute = function(t, e, n) {
        return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),
        this.fromBufferAttribute(t, e, n)
    }
    ,
    tt.prototype.lengthManhattan = function() {
        return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),
        this.manhattanLength()
    }
    ,
    ae.prototype.getChildByName = function(t) {
        return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
        this.getObjectByName(t)
    }
    ,
    ae.prototype.renderDepth = function() {
        console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
    }
    ,
    ae.prototype.translate = function(t, e) {
        return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
        this.translateOnAxis(e, t)
    }
    ,
    ae.prototype.getWorldRotation = function() {
        console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
    }
    ,
    ae.prototype.applyMatrix = function(t) {
        return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),
        this.applyMatrix4(t)
    }
    ,
    Object.defineProperties(ae.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order
            },
            set: function(t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order = t
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }),
    an.prototype.setDrawMode = function() {
        console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
    }
    ,
    Object.defineProperties(an.prototype, {
        drawMode: {
            get: function() {
                return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),
                0
            },
            set: function() {
                console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
            }
        }
    }),
    Bs.prototype.initBones = function() {
        console.error("THREE.SkinnedMesh: initBones() has been removed.")
    }
    ,
    mn.prototype.setLens = function(t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
        void 0 !== e && (this.filmGauge = e),
        this.setFocalLength(t)
    }
    ,
    Object.defineProperties(Co.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
                this.shadow.camera.fov = t
            }
        },
        shadowCameraLeft: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
                this.shadow.camera.left = t
            }
        },
        shadowCameraRight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
                this.shadow.camera.right = t
            }
        },
        shadowCameraTop: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
                this.shadow.camera.top = t
            }
        },
        shadowCameraBottom: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
                this.shadow.camera.bottom = t
            }
        },
        shadowCameraNear: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
                this.shadow.camera.near = t
            }
        },
        shadowCameraFar: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
                this.shadow.camera.far = t
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
                this.shadow.bias = t
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
                this.shadow.mapSize.width = t
            }
        },
        shadowMapHeight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
                this.shadow.mapSize.height = t
            }
        }
    }),
    Object.defineProperties(Ce.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),
                this.array.length
            }
        },
        dynamic: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),
                this.usage === D
            },
            set: function() {
                console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),
                this.setUsage(D)
            }
        }
    }),
    Ce.prototype.setDynamic = function(t) {
        return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),
        this.setUsage(!0 === t ? D : P),
        this
    }
    ,
    Ce.prototype.copyIndicesArray = function() {
        console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
    }
    ,
    Ce.prototype.setArray = function() {
        console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
    }
    ,
    Ge.prototype.addIndex = function(t) {
        console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
        this.setIndex(t)
    }
    ,
    Ge.prototype.addAttribute = function(t, e) {
        return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),
        e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
        this.setIndex(e),
        this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
        this.setAttribute(t, new Ce(arguments[1],arguments[2])))
    }
    ,
    Ge.prototype.addDrawCall = function(t, e, n) {
        void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
        console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
        this.addGroup(t, e)
    }
    ,
    Ge.prototype.clearDrawCalls = function() {
        console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
        this.clearGroups()
    }
    ,
    Ge.prototype.computeOffsets = function() {
        console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
    }
    ,
    Ge.prototype.removeAttribute = function(t) {
        return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),
        this.deleteAttribute(t)
    }
    ,
    Ge.prototype.applyMatrix = function(t) {
        return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),
        this.applyMatrix4(t)
    }
    ,
    Object.defineProperties(Ge.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
                this.groups
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
                this.groups
            }
        }
    }),
    ms.prototype.setDynamic = function(t) {
        return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),
        this.setUsage(!0 === t ? D : P),
        this
    }
    ,
    ms.prototype.setArray = function() {
        console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
    }
    ,
    eo.prototype.getArrays = function() {
        console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")
    }
    ,
    eo.prototype.addShapeList = function() {
        console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")
    }
    ,
    eo.prototype.addShape = function() {
        console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")
    }
    ,
    ps.prototype.dispose = function() {
        console.error("THREE.Scene: .dispose() has been removed.")
    }
    ,
    al.prototype.onUpdate = function() {
        return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),
        this
    }
    ,
    Object.defineProperties(ye.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }
        },
        overdraw: {
            get: function() {
                console.warn("THREE.Material: .overdraw has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .overdraw has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE.Material: .wrapRGB has been removed."),
                new Ee
            }
        },
        shading: {
            get: function() {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                this.flatShading = 1 === t
            }
        },
        stencilMask: {
            get: function() {
                return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."),
                this.stencilFuncMask
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."),
                this.stencilFuncMask = t
            }
        },
        vertexTangents: {
            get: function() {
                console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
            },
            set: function() {
                console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
            }
        }
    }),
    Object.defineProperties(dn.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives
            },
            set: function(t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives = t
            }
        }
    }),
    hs.prototype.clearTarget = function(t, e, n, i) {
        console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),
        this.setRenderTarget(t),
        this.clear(e, n, i)
    }
    ,
    hs.prototype.animate = function(t) {
        console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),
        this.setAnimationLoop(t)
    }
    ,
    hs.prototype.getCurrentRenderTarget = function() {
        return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),
        this.getRenderTarget()
    }
    ,
    hs.prototype.getMaxAnisotropy = function() {
        return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),
        this.capabilities.getMaxAnisotropy()
    }
    ,
    hs.prototype.getPrecision = function() {
        return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),
        this.capabilities.precision
    }
    ,
    hs.prototype.resetGLState = function() {
        return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),
        this.state.reset()
    }
    ,
    hs.prototype.supportsFloatTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
        this.extensions.get("OES_texture_float")
    }
    ,
    hs.prototype.supportsHalfFloatTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
        this.extensions.get("OES_texture_half_float")
    }
    ,
    hs.prototype.supportsStandardDerivatives = function() {
        return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
        this.extensions.get("OES_standard_derivatives")
    }
    ,
    hs.prototype.supportsCompressedTextureS3TC = function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
        this.extensions.get("WEBGL_compressed_texture_s3tc")
    }
    ,
    hs.prototype.supportsCompressedTexturePVRTC = function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
        this.extensions.get("WEBGL_compressed_texture_pvrtc")
    }
    ,
    hs.prototype.supportsBlendMinMax = function() {
        return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
        this.extensions.get("EXT_blend_minmax")
    }
    ,
    hs.prototype.supportsVertexTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),
        this.capabilities.vertexTextures
    }
    ,
    hs.prototype.supportsInstancedArrays = function() {
        return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
        this.extensions.get("ANGLE_instanced_arrays")
    }
    ,
    hs.prototype.enableScissorTest = function(t) {
        console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
        this.setScissorTest(t)
    }
    ,
    hs.prototype.initMaterial = function() {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
    }
    ,
    hs.prototype.addPrePlugin = function() {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
    }
    ,
    hs.prototype.addPostPlugin = function() {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
    }
    ,
    hs.prototype.updateShadowMap = function() {
        console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
    }
    ,
    hs.prototype.setFaceCulling = function() {
        console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
    }
    ,
    hs.prototype.allocTextureUnit = function() {
        console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
    }
    ,
    hs.prototype.setTexture = function() {
        console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
    }
    ,
    hs.prototype.setTexture2D = function() {
        console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
    }
    ,
    hs.prototype.setTextureCube = function() {
        console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
    }
    ,
    hs.prototype.getActiveMipMapLevel = function() {
        return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),
        this.getActiveMipmapLevel()
    }
    ,
    Object.defineProperties(hs.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
                this.shadowMap.enabled = t
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
                this.shadowMap.type = t
            }
        },
        shadowMapCullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            }
        },
        context: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),
                this.getContext()
            }
        },
        vr: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),
                this.xr
            }
        },
        gammaInput: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),
                !1
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
            }
        },
        gammaOutput: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),
                !1
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),
                this.outputEncoding = !0 === t ? A : E
            }
        },
        toneMappingWhitePoint: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),
                1
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
            }
        }
    }),
    Object.defineProperties(ts.prototype, {
        cullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            }
        },
        renderReverseSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            }
        },
        renderSingleSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            }
        }
    }),
    Object.defineProperties(et.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS = t
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT = t
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter = t
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter = t
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy = t
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset = t
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat = t
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format = t
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type = t
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps = t
            }
        }
    }),
    class extends ae {
        constructor(t) {
            super(),
            this.type = "Audio",
            this.listener = t,
            this.context = t.context,
            this.gain = this.context.createGain(),
            this.gain.connect(t.getInput()),
            this.autoplay = !1,
            this.buffer = null,
            this.detune = 0,
            this.loop = !1,
            this.loopStart = 0,
            this.loopEnd = 0,
            this.offset = 0,
            this.duration = void 0,
            this.playbackRate = 1,
            this.isPlaying = !1,
            this.hasPlaybackControl = !0,
            this.source = null,
            this.sourceType = "empty",
            this._startedAt = 0,
            this._progress = 0,
            this._connected = !1,
            this.filters = []
        }
        getOutput() {
            return this.gain
        }
        setNodeSource(t) {
            return this.hasPlaybackControl = !1,
            this.sourceType = "audioNode",
            this.source = t,
            this.connect(),
            this
        }
        setMediaElementSource(t) {
            return this.hasPlaybackControl = !1,
            this.sourceType = "mediaNode",
            this.source = this.context.createMediaElementSource(t),
            this.connect(),
            this
        }
        setMediaStreamSource(t) {
            return this.hasPlaybackControl = !1,
            this.sourceType = "mediaStreamNode",
            this.source = this.context.createMediaStreamSource(t),
            this.connect(),
            this
        }
        setBuffer(t) {
            return this.buffer = t,
            this.sourceType = "buffer",
            this.autoplay && this.play(),
            this
        }
        play(t=0) {
            if (!0 === this.isPlaying)
                return void console.warn("THREE.Audio: Audio is already playing.");
            if (!1 === this.hasPlaybackControl)
                return void console.warn("THREE.Audio: this Audio has no playback control.");
            this._startedAt = this.context.currentTime + t;
            const e = this.context.createBufferSource();
            return e.buffer = this.buffer,
            e.loop = this.loop,
            e.loopStart = this.loopStart,
            e.loopEnd = this.loopEnd,
            e.onended = this.onEnded.bind(this),
            e.start(this._startedAt, this._progress + this.offset, this.duration),
            this.isPlaying = !0,
            this.source = e,
            this.setDetune(this.detune),
            this.setPlaybackRate(this.playbackRate),
            this.connect()
        }
        pause() {
            if (!1 !== this.hasPlaybackControl)
                return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate,
                !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)),
                this.source.stop(),
                this.source.onended = null,
                this.isPlaying = !1),
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        }
        stop() {
            if (!1 !== this.hasPlaybackControl)
                return this._progress = 0,
                this.source.stop(),
                this.source.onended = null,
                this.isPlaying = !1,
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        }
        connect() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (let t = 1, e = this.filters.length; t < e; t++)
                    this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else
                this.source.connect(this.getOutput());
            return this._connected = !0,
            this
        }
        disconnect() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (let t = 1, e = this.filters.length; t < e; t++)
                    this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else
                this.source.disconnect(this.getOutput());
            return this._connected = !1,
            this
        }
        getFilters() {
            return this.filters
        }
        setFilters(t) {
            return t || (t = []),
            !0 === this._connected ? (this.disconnect(),
            this.filters = t.slice(),
            this.connect()) : this.filters = t.slice(),
            this
        }
        setDetune(t) {
            if (this.detune = t,
            void 0 !== this.source.detune)
                return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01),
                this
        }
        getDetune() {
            return this.detune
        }
        getFilter() {
            return this.getFilters()[0]
        }
        setFilter(t) {
            return this.setFilters(t ? [t] : [])
        }
        setPlaybackRate(t) {
            if (!1 !== this.hasPlaybackControl)
                return this.playbackRate = t,
                !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01),
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        }
        getPlaybackRate() {
            return this.playbackRate
        }
        onEnded() {
            this.isPlaying = !1
        }
        getLoop() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."),
            !1) : this.loop
        }
        setLoop(t) {
            if (!1 !== this.hasPlaybackControl)
                return this.loop = t,
                !0 === this.isPlaying && (this.source.loop = this.loop),
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        }
        setLoopStart(t) {
            return this.loopStart = t,
            this
        }
        setLoopEnd(t) {
            return this.loopEnd = t,
            this
        }
        getVolume() {
            return this.gain.gain.value
        }
        setVolume(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01),
            this
        }
    }
    .prototype.load = function(t) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        const e = this;
        return (new qo).load(t, (function(t) {
            e.setBuffer(t)
        }
        )),
        this
    }
    ,
    gn.prototype.updateCubeMap = function(t, e) {
        return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
        this.update(t, e)
    }
    ,
    gn.prototype.clear = function(t, e, n, i) {
        return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),
        this.renderTarget.clear(t, e, n, i)
    }
    ,
    Z.crossOrigin = void 0,
    Z.loadTexture = function(t, e, n, i) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        const r = new Ro;
        r.setCrossOrigin(this.crossOrigin);
        const s = r.load(t, n, void 0, i);
        return e && (s.mapping = e),
        s
    }
    ,
    Z.loadTextureCube = function(t, e, n, i) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        const r = new Lo;
        r.setCrossOrigin(this.crossOrigin);
        const s = r.load(t, n, void 0, i);
        return e && (s.mapping = e),
        s
    }
    ,
    Z.loadCompressedTexture = function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    }
    ,
    Z.loadCompressedTextureCube = function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }
    ,
    "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
        detail: {
            revision: "134"
        }
    })),
    "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "134");
    const ml = /^[og]\s*(.+)?/
      , fl = /^mtllib /
      , gl = /^usemtl /
      , vl = /^usemap /
      , xl = new rt
      , yl = new rt
      , _l = new rt
      , Ml = new rt
      , bl = new rt;
    function wl() {
        const t = {
            objects: [],
            object: {},
            vertices: [],
            normals: [],
            colors: [],
            uvs: [],
            materials: {},
            materialLibraries: [],
            startObject: function(t, e) {
                if (this.object && !1 === this.object.fromDeclaration)
                    return this.object.name = t,
                    void (this.object.fromDeclaration = !1 !== e);
                const n = this.object && "function" == typeof this.object.currentMaterial ? this.object.currentMaterial() : void 0;
                if (this.object && "function" == typeof this.object._finalize && this.object._finalize(!0),
                this.object = {
                    name: t || "",
                    fromDeclaration: !1 !== e,
                    geometry: {
                        vertices: [],
                        normals: [],
                        colors: [],
                        uvs: [],
                        hasUVIndices: !1
                    },
                    materials: [],
                    smooth: !0,
                    startMaterial: function(t, e) {
                        const n = this._finalize(!1);
                        n && (n.inherited || n.groupCount <= 0) && this.materials.splice(n.index, 1);
                        const i = {
                            index: this.materials.length,
                            name: t || "",
                            mtllib: Array.isArray(e) && e.length > 0 ? e[e.length - 1] : "",
                            smooth: void 0 !== n ? n.smooth : this.smooth,
                            groupStart: void 0 !== n ? n.groupEnd : 0,
                            groupEnd: -1,
                            groupCount: -1,
                            inherited: !1,
                            clone: function(t) {
                                const e = {
                                    index: "number" == typeof t ? t : this.index,
                                    name: this.name,
                                    mtllib: this.mtllib,
                                    smooth: this.smooth,
                                    groupStart: 0,
                                    groupEnd: -1,
                                    groupCount: -1,
                                    inherited: !1
                                };
                                return e.clone = this.clone.bind(e),
                                e
                            }
                        };
                        return this.materials.push(i),
                        i
                    },
                    currentMaterial: function() {
                        if (this.materials.length > 0)
                            return this.materials[this.materials.length - 1]
                    },
                    _finalize: function(t) {
                        const e = this.currentMaterial();
                        if (e && -1 === e.groupEnd && (e.groupEnd = this.geometry.vertices.length / 3,
                        e.groupCount = e.groupEnd - e.groupStart,
                        e.inherited = !1),
                        t && this.materials.length > 1)
                            for (let t = this.materials.length - 1; t >= 0; t--)
                                this.materials[t].groupCount <= 0 && this.materials.splice(t, 1);
                        return t && 0 === this.materials.length && this.materials.push({
                            name: "",
                            smooth: this.smooth
                        }),
                        e
                    }
                },
                n && n.name && "function" == typeof n.clone) {
                    const t = n.clone(0);
                    t.inherited = !0,
                    this.object.materials.push(t)
                }
                this.objects.push(this.object)
            },
            finalize: function() {
                this.object && "function" == typeof this.object._finalize && this.object._finalize(!0)
            },
            parseVertexIndex: function(t, e) {
                const n = parseInt(t, 10);
                return 3 * (n >= 0 ? n - 1 : n + e / 3)
            },
            parseNormalIndex: function(t, e) {
                const n = parseInt(t, 10);
                return 3 * (n >= 0 ? n - 1 : n + e / 3)
            },
            parseUVIndex: function(t, e) {
                const n = parseInt(t, 10);
                return 2 * (n >= 0 ? n - 1 : n + e / 2)
            },
            addVertex: function(t, e, n) {
                const i = this.vertices
                  , r = this.object.geometry.vertices;
                r.push(i[t + 0], i[t + 1], i[t + 2]),
                r.push(i[e + 0], i[e + 1], i[e + 2]),
                r.push(i[n + 0], i[n + 1], i[n + 2])
            },
            addVertexPoint: function(t) {
                const e = this.vertices;
                this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2])
            },
            addVertexLine: function(t) {
                const e = this.vertices;
                this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2])
            },
            addNormal: function(t, e, n) {
                const i = this.normals
                  , r = this.object.geometry.normals;
                r.push(i[t + 0], i[t + 1], i[t + 2]),
                r.push(i[e + 0], i[e + 1], i[e + 2]),
                r.push(i[n + 0], i[n + 1], i[n + 2])
            },
            addFaceNormal: function(t, e, n) {
                const i = this.vertices
                  , r = this.object.geometry.normals;
                xl.fromArray(i, t),
                yl.fromArray(i, e),
                _l.fromArray(i, n),
                bl.subVectors(_l, yl),
                Ml.subVectors(xl, yl),
                bl.cross(Ml),
                bl.normalize(),
                r.push(bl.x, bl.y, bl.z),
                r.push(bl.x, bl.y, bl.z),
                r.push(bl.x, bl.y, bl.z)
            },
            addColor: function(t, e, n) {
                const i = this.colors
                  , r = this.object.geometry.colors;
                void 0 !== i[t] && r.push(i[t + 0], i[t + 1], i[t + 2]),
                void 0 !== i[e] && r.push(i[e + 0], i[e + 1], i[e + 2]),
                void 0 !== i[n] && r.push(i[n + 0], i[n + 1], i[n + 2])
            },
            addUV: function(t, e, n) {
                const i = this.uvs
                  , r = this.object.geometry.uvs;
                r.push(i[t + 0], i[t + 1]),
                r.push(i[e + 0], i[e + 1]),
                r.push(i[n + 0], i[n + 1])
            },
            addDefaultUV: function() {
                const t = this.object.geometry.uvs;
                t.push(0, 0),
                t.push(0, 0),
                t.push(0, 0)
            },
            addUVLine: function(t) {
                const e = this.uvs;
                this.object.geometry.uvs.push(e[t + 0], e[t + 1])
            },
            addFace: function(t, e, n, i, r, s, a, o, l) {
                const c = this.vertices.length;
                let h = this.parseVertexIndex(t, c)
                  , u = this.parseVertexIndex(e, c)
                  , d = this.parseVertexIndex(n, c);
                if (this.addVertex(h, u, d),
                this.addColor(h, u, d),
                void 0 !== a && "" !== a) {
                    const t = this.normals.length;
                    h = this.parseNormalIndex(a, t),
                    u = this.parseNormalIndex(o, t),
                    d = this.parseNormalIndex(l, t),
                    this.addNormal(h, u, d)
                } else
                    this.addFaceNormal(h, u, d);
                if (void 0 !== i && "" !== i) {
                    const t = this.uvs.length;
                    h = this.parseUVIndex(i, t),
                    u = this.parseUVIndex(r, t),
                    d = this.parseUVIndex(s, t),
                    this.addUV(h, u, d),
                    this.object.geometry.hasUVIndices = !0
                } else
                    this.addDefaultUV()
            },
            addPointGeometry: function(t) {
                this.object.geometry.type = "Points";
                const e = this.vertices.length;
                for (let n = 0, i = t.length; n < i; n++) {
                    const i = this.parseVertexIndex(t[n], e);
                    this.addVertexPoint(i),
                    this.addColor(i)
                }
            },
            addLineGeometry: function(t, e) {
                this.object.geometry.type = "Line";
                const n = this.vertices.length
                  , i = this.uvs.length;
                for (let e = 0, i = t.length; e < i; e++)
                    this.addVertexLine(this.parseVertexIndex(t[e], n));
                for (let t = 0, n = e.length; t < n; t++)
                    this.addUVLine(this.parseUVIndex(e[t], i))
            }
        };
        return t.startObject("", !1),
        t
    }
    let Sl = document.querySelector(".filler")
      , Tl = document.querySelector(".secondary");
    const El = document.querySelector("canvas.webgl")
      , Al = new ps
      , Ll = new class extends So {
        constructor(t) {
            super(t),
            this.materials = null
        }
        load(t, e, n, i) {
            const r = this
              , s = new Eo(this.manager);
            s.setPath(this.path),
            s.setRequestHeader(this.requestHeader),
            s.setWithCredentials(this.withCredentials),
            s.load(t, (function(n) {
                try {
                    e(r.parse(n))
                } catch (e) {
                    i ? i(e) : console.error(e),
                    r.manager.itemError(t)
                }
            }
            ), n, i)
        }
        setMaterials(t) {
            return this.materials = t,
            this
        }
        parse(t) {
            const e = new wl;
            -1 !== t.indexOf("\r\n") && (t = t.replace(/\r\n/g, "\n")),
            -1 !== t.indexOf("\\\n") && (t = t.replace(/\\\n/g, ""));
            const n = t.split("\n");
            let i = ""
              , r = ""
              , s = 0
              , a = [];
            const o = "function" == typeof "".trimLeft;
            for (let t = 0, l = n.length; t < l; t++)
                if (i = n[t],
                i = o ? i.trimLeft() : i.trim(),
                s = i.length,
                0 !== s && (r = i.charAt(0),
                "#" !== r))
                    if ("v" === r) {
                        const t = i.split(/\s+/);
                        switch (t[0]) {
                        case "v":
                            e.vertices.push(parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3])),
                            t.length >= 7 ? e.colors.push(parseFloat(t[4]), parseFloat(t[5]), parseFloat(t[6])) : e.colors.push(void 0, void 0, void 0);
                            break;
                        case "vn":
                            e.normals.push(parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3]));
                            break;
                        case "vt":
                            e.uvs.push(parseFloat(t[1]), parseFloat(t[2]))
                        }
                    } else if ("f" === r) {
                        const t = i.substr(1).trim().split(/\s+/)
                          , n = [];
                        for (let e = 0, i = t.length; e < i; e++) {
                            const i = t[e];
                            if (i.length > 0) {
                                const t = i.split("/");
                                n.push(t)
                            }
                        }
                        const r = n[0];
                        for (let t = 1, i = n.length - 1; t < i; t++) {
                            const i = n[t]
                              , s = n[t + 1];
                            e.addFace(r[0], i[0], s[0], r[1], i[1], s[1], r[2], i[2], s[2])
                        }
                    } else if ("l" === r) {
                        const t = i.substring(1).trim().split(" ");
                        let n = [];
                        const r = [];
                        if (-1 === i.indexOf("/"))
                            n = t;
                        else
                            for (let e = 0, i = t.length; e < i; e++) {
                                const i = t[e].split("/");
                                "" !== i[0] && n.push(i[0]),
                                "" !== i[1] && r.push(i[1])
                            }
                        e.addLineGeometry(n, r)
                    } else if ("p" === r) {
                        const t = i.substr(1).trim().split(" ");
                        e.addPointGeometry(t)
                    } else if (null !== (a = ml.exec(i))) {
                        const t = (" " + a[0].substr(1).trim()).substr(1);
                        e.startObject(t)
                    } else if (gl.test(i))
                        e.object.startMaterial(i.substring(7).trim(), e.materialLibraries);
                    else if (fl.test(i))
                        e.materialLibraries.push(i.substring(7).trim());
                    else if (vl.test(i))
                        console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
                    else if ("s" === r) {
                        if (a = i.split(" "),
                        a.length > 1) {
                            const t = a[1].trim().toLowerCase();
                            e.object.smooth = "0" !== t && "off" !== t
                        } else
                            e.object.smooth = !0;
                        const t = e.object.currentMaterial();
                        t && (t.smooth = e.object.smooth)
                    } else {
                        if ("\0" === i)
                            continue;
                        console.warn('THREE.OBJLoader: Unexpected line: "' + i + '"')
                    }
            e.finalize();
            const l = new ss;
            if (l.materialLibraries = [].concat(e.materialLibraries),
            !0 == !(1 === e.objects.length && 0 === e.objects[0].geometry.vertices.length))
                for (let t = 0, n = e.objects.length; t < n; t++) {
                    const n = e.objects[t]
                      , i = n.geometry
                      , r = n.materials
                      , s = "Line" === i.type
                      , a = "Points" === i.type;
                    let o = !1;
                    if (0 === i.vertices.length)
                        continue;
                    const c = new Ge;
                    c.setAttribute("position", new Ie(i.vertices,3)),
                    i.normals.length > 0 && c.setAttribute("normal", new Ie(i.normals,3)),
                    i.colors.length > 0 && (o = !0,
                    c.setAttribute("color", new Ie(i.colors,3))),
                    !0 === i.hasUVIndices && c.setAttribute("uv", new Ie(i.uvs,2));
                    const h = [];
                    for (let t = 0, n = r.length; t < n; t++) {
                        const n = r[t]
                          , i = n.name + "_" + n.smooth + "_" + o;
                        let l = e.materials[i];
                        if (null !== this.materials)
                            if (l = this.materials.create(n.name),
                            !s || !l || l instanceof ks) {
                                if (a && l && !(l instanceof $s)) {
                                    const t = new $s({
                                        size: 10,
                                        sizeAttenuation: !1
                                    });
                                    ye.prototype.copy.call(t, l),
                                    t.color.copy(l.color),
                                    t.map = l.map,
                                    l = t
                                }
                            } else {
                                const t = new ks;
                                ye.prototype.copy.call(t, l),
                                t.color.copy(l.color),
                                l = t
                            }
                        void 0 === l && (l = s ? new ks : a ? new $s({
                            size: 1,
                            sizeAttenuation: !1
                        }) : new so,
                        l.name = n.name,
                        l.flatShading = !n.smooth,
                        l.vertexColors = o,
                        e.materials[i] = l),
                        h.push(l)
                    }
                    let u;
                    if (h.length > 1) {
                        for (let t = 0, e = r.length; t < e; t++) {
                            const e = r[t];
                            c.addGroup(e.groupStart, e.groupCount, t)
                        }
                        u = s ? new Ks(c,h) : a ? new ra(c,h) : new an(c,h)
                    } else
                        u = s ? new Ks(c,h[0]) : a ? new ra(c,h[0]) : new an(c,h[0]);
                    u.name = n.name,
                    l.add(u)
                }
            else if (e.vertices.length > 0) {
                const t = new $s({
                    size: 1,
                    sizeAttenuation: !1
                })
                  , n = new Ge;
                n.setAttribute("position", new Ie(e.vertices,3)),
                e.colors.length > 0 && void 0 !== e.colors[0] && (n.setAttribute("color", new Ie(e.colors,3)),
                t.vertexColors = !0);
                const i = new ra(n,t);
                l.add(i)
            }
            return l
        }
    }
      , Rl = new Vo(16777215,.8);
    Al.add(Rl);
    const Cl = new Go(16777215,.6);
    Cl.castShadow = !0,
    Cl.shadow.mapSize.set(1024, 1024),
    Cl.shadow.camera.far = 15,
    Cl.shadow.camera.left = -7,
    Cl.shadow.camera.top = 7,
    Cl.shadow.camera.right = 7,
    Cl.shadow.camera.bottom = -7,
    Cl.position.set(5, 5, 5),
    Al.add(Cl);
    const Pl = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    window.addEventListener("resize", (()=>{
        Pl.width = window.innerWidth,
        Pl.height = window.innerHeight,
        Dl.aspect = Pl.width / Pl.height,
        Dl.updateProjectionMatrix(),
        Nl.setSize(Pl.width, Pl.height),
        Nl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    ));
    const Dl = new mn(75,Pl.width / Pl.height,.1,100);
    let Il;
    Dl.position.set(2, 2, 2),
    ae.DefaultUp.set(0, 0, 1),
    Al.add(Dl),
    Ll.load("https://alireza4791.github.io/3d-logo-final/dist/models/logo/Obj/project-desk-4dc6d8fcea089283c968e0461330f846.obj", (function(t) {
        Il = t,
        window.innerWidth <= 420 ? (Il.scale.x = .052,
        Il.scale.y = .052,
        Il.scale.z = .052) : (Il.scale.x = .064,
        Il.scale.y = .064,
        Il.scale.z = .064),
        Il.rotation.x = 1.65,
        Il.rotation.y = 0,
        Il.rotation.z = 0,
        Il.position.x = 2,
        Il.position.y = 1.85,
        Il.position.z = -1.55,
        Al.add(Il)
    }
    ), (function(t) {
        console.log(t.loaded / t.total * 100 + "% loaded")
    }
    ), (function(t) {
        console.log("An error happened")
    }
    ));
    const Nl = new hs({
        canvas: El
    });
    Nl.shadowMap.enabled = !0,
    Nl.shadowMap.type = 2,
    Nl.setSize(Pl.width, Pl.height),
    Nl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const zl = new class {
        constructor(t=!0) {
            this.autoStart = t,
            this.startTime = 0,
            this.oldTime = 0,
            this.elapsedTime = 0,
            this.running = !1
        }
        start() {
            this.startTime = Xo(),
            this.oldTime = this.startTime,
            this.elapsedTime = 0,
            this.running = !0
        }
        stop() {
            this.getElapsedTime(),
            this.running = !1,
            this.autoStart = !1
        }
        getElapsedTime() {
            return this.getDelta(),
            this.elapsedTime
        }
        getDelta() {
            let t = 0;
            if (this.autoStart && !this.running)
                return this.start(),
                0;
            if (this.running) {
                const e = Xo();
                t = (e - this.oldTime) / 1e3,
                this.oldTime = e,
                this.elapsedTime += t
            }
            return t
        }
    }
    ;
    let Ol = 0
      , Bl = {
        x: 0,
        y: 0
    };
    window.innerWidth;
    let Ul = 1
      , Fl = .05
      , Hl = 0
      , Gl = 0
      , Vl = 0;
    const kl = ()=>{
        const t = zl.getElapsedTime();
        Ol = t,
        scrollY >= 500 ? (Ul = 26,
        Sl.style.transform = `scale(${Math.min(.25 + (scrollY - 500) / 500, 1)}, ${Math.min(.25 + (scrollY - 500) / 500, 1)})`,
        Vl += .02 * ((scrollY - 500) / 500 - Vl),
        Sl.style.opacity = `${Math.min(Vl, 1)}`,
        Gl += .02 * (.1 * scrollY - Gl),
        Il && (Sl.style.top = `${Math.min(scrollY / 50, 18)}vh`,
        "18vh" === Sl.style.top ? (Sl.style.position = "relative",
        Sl.style.top = `calc(${Math.min(scrollY, 950)}px + 18vh)`,
        Sl.style.left = "0",
        Tl.style.marginTop = "160vh") : (Sl.style.position = "fixed",
        Tl.style.marginTop = "400vh"))) : (Sl.style.transform = "scale(0.25, 0.25)",
        Sl.style.opacity = "0",
        Gl += .02 * (.02 * scrollY - Gl),
        0 === scrollY ? Ul = 1 : scrollY > 0 && scrollY <= 100 ? Ul = 5 : scrollY > 100 && scrollY <= 200 ? Ul = 10 : scrollY > 200 && scrollY <= 300 ? Ul = 15 : scrollY > 300 && scrollY <= 400 ? Ul = 20 : scrollY > 400 && scrollY <= 499 && (Ul = 25)),
        (Hl >= .05 || Hl <= -.05) && (Fl = .05,
        (Hl >= .1 || Hl <= -.1) && (Fl = .04,
        (Hl >= .2 || Hl <= -.2) && (Fl = .03,
        (Hl >= .3 || Hl <= -.3) && (Fl = .01,
        (Hl >= .4 || Hl <= -.4) && (Fl = .005))))),
        Hl += (Bl.x - Hl) * Fl,
        Il && (Il.rotation.set(1.65, 0, Hl / Ul),
        Dl.zoom = 1 + Gl),
        Dl.updateProjectionMatrix(),
        Nl.render(Al, Dl),
        window.requestAnimationFrame(kl)
    }
    ;
    kl(),
    window.addEventListener("mousemove", (t=>{
        Bl.x = t.clientX / Pl.width - .5
    }
    ), !1),
    window.addEventListener("touchmove", (t=>{
        t.touches && t.touches[0] ? Bl.x = t.touches[0].clientX / Pl.width - .5 : t.originalEvent && t.originalEvent.changedTouches[0] ? Bl.x = t.originalEvent.changedTouches[0].clientX / Pl.width - .5 : t.clientX && t.clientY && (Bl.x = t.clientX / Pl.width - .5)
    }
    ), !1)
}
)();
//# sourceMappingURL=bundle.ee728ce95f7ffdc9.js.map
