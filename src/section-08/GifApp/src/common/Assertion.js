export class Assertion {

    constructor(target) {
        this.target = target;
    }

    static This(value) {
        if (value === null || value === undefined) {
            throw new Error('Unsupported type for assertion');
        }
        
        switch (typeof value) {
            case 'string':
                return new StringAssertion(value);
            case 'number':
                return new NumberAssertion(value);
            case 'object':
                if (Array.isArray(value)) {
                    return new ArrayAssertion(value);
                } else {
                    return new ObjectAssertion(value);
                }
            default:
                throw new Error('Unsupported type for assertion');
        }
    }
}

class StringAssertion extends Assertion {
    IsNotNullOrEmpty(message) {
        if (!this.target || this.target.trim() === '') {
            throw new Error(message || 'String cannot be null or empty');
        }
        return this;
    }
    IsString(message) {
        if (typeof this.target !== 'string') {
            throw new Error(message || 'Value must be a string');
        }
        return this;
    }
    IsEmail(message) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(this.target)) {
            throw new Error(message || 'Invalid email format');
        }
        return this;
    }
    IsUrl(message) {
        const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:[0-9]+)?(\/.*)?$/;
        if (!urlPattern.test(this.target)) {
            throw new Error(message || 'Invalid URL format');
        }
        return this;
    }
}

class NumberAssertion extends Assertion {
    IsNumber(message) {
        if (typeof this.target !== 'number' || isNaN(this.target)) {
            throw new Error(message || 'Value must be a number');
        }
        return this;
    }
    IsGreaterThanZero(message) {
        if (this.target <= 0) {
            throw new Error(message || 'Number must be greater than zero');
        }
        return this;
    }
    IsInRange(min, max, message) {
        if (this.target < min || this.target > max) {
            throw new Error(message || `Number must be between ${min} and ${max}`);
        }
        return this;
    }
    IsInteger(message) {
        if (!Number.isInteger(this.target)) {
            throw new Error(message || 'Number must be an integer');
        }
        return this;
    }
    IsPositive(message) {
        if (this.target < 0) {
            throw new Error(message || 'Number must be positive');
        }
        return this;
    }
    IsNegative(message) {
        if (this.target >= 0) {
            throw new Error(message || 'Number must be negative');
        }
        return this;
    }
    IsNaN(message) {
        if (!Number.isNaN(this.target)) {
            throw new Error(message || 'Value must not be a number');
        }
        return this;
    }
}

class ArrayAssertion extends Assertion {
    IsNotEmpty(message) {
        if (this.target.length === 0) {
            throw new Error(message || 'Array cannot be empty');
        }
        return this;
    }
    Contains(value, message) {
        if (!this.target.includes(value)) {
            throw new Error(message || `Array must contain ${value}`);
        }
        return this;
    }
    DoesNotContain(value, message) {
        if (this.target.includes(value)) {
            throw new Error(message || `Array must not contain ${value}`);
        }
        return this;
    }
    HasLength(length, message) {
        if (this.target.length !== length) {
            throw new Error(message || `Array must have length ${length}`);
        }
        return this;
    }
}

class ObjectAssertion extends Assertion {
    IsNotEmpty(message) {
        if (Object.keys(this.target).length === 0) {
            throw new Error(message || 'Object cannot be empty');
        }
        return this;
    }
}